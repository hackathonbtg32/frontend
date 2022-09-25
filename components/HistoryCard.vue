<template>
  <div v-if="loading" class="py-6">
    <Loading />
  </div>
  <section v-else>
    <div class="columns">
      <p class="column has-text-centered">Descricao</p>
      <p class="column has-text-centered">Valor</p>
      <p class="column has-text-centered">Destino</p>
      <p class="column has-text-centered">Pagamento</p>
    </div>

    <div
      v-for="debit in debits"
      :key="debit.id"
      class="card mb-5 is-relative hist"
    >
      <div class="columns">
        <p class="column has-text-centered">{{ debit.name }}</p>
        <p class="column has-text-centered">R$ {{ debit.paymentValue }}</p>
        <p class="column has-text-centered">
          {{ debit.paymentData.paymentTo }}
        </p>
        <p class="column has-text-centered">
          {{ new Date(debit.paymentData.paymentDate).toLocaleDateString() }}
        </p>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from "vue";
import Loading from "~/components/Loading.vue";
import { Debits } from "~/entities/Debits";

export default Vue.extend({
  name: "HistoryCard",
  components: {
    Loading,
  },
  data: () => ({
    loading: false,
    debits: [],
  }),
  mounted() {
    this.select();
  },
  methods: {
    async select() {
      this.loading = true;

      const debits = await this.$axios.get("/debits/history/1");
      this.debits = debits.data.data.map((debit: Debits) => {
        debit.paymentData = JSON.parse(debit.paymentData);
        return debit;
      });
      console.log(debits);

      this.loading = false;
    },
  },
});
</script>
    
<style scoped>
.is-tiny {
  height: 0.2rem !important;
}

.hist {
  border: 2px solid #3745a4;
  padding: 8px;
  background-color: #e6e7fa;
}
</style>
    
