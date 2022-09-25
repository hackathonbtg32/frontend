<template>
  <Loading v-if="loading" />
  <section v-else>
    <div class="columns">
      <p class="column has-text-centered">Descricao</p>
      <p class="column has-text-centered">Valor</p>
      <p class="column has-text-centered">Vencimento</p>
      <p class="column has-text-centered">Instituicao</p>
      <p class="column is-1"></p>
    </div>

    <div v-for="debit in debits" :key="debit.id" class="card mb-5 is-relative">
      <b-progress
        :rounded="false"
        :value="debit.percent"
        :type="debit.paymentData.paymentStatus ? 'is-success' : 'is-danger'"
        class="is-tiny"
      ></b-progress>

      <div class="columns">
        <p class="column has-text-centered">{{ debit.name }}</p>
        <p class="column has-text-centered">R$ {{ debit.paymentValue }}</p>
        <p class="column has-text-centered">
          {{ new Date(debit.paymentData.paymentDueDate).toLocaleDateString() }}
        </p>
        <p class="column has-text-centered">
          {{ debit.paymentData.paymentTo }}
        </p>
        <div class="column is-1">
          <b-dropdown
            v-if="debit.percent < 100"
            aria-role="list"
            position="is-top-left"
            class="is-clickable"
          >
            <template #trigger>
              <b-icon icon="dots-horizontal"></b-icon>
            </template>

            <b-dropdown-item
              aria-role="listitem"
              @click="() => deleteDebits(debit.id)"
            >
              Remover
            </b-dropdown-item>
          </b-dropdown>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from "vue";
import { mapState, mapGetters, mapActions } from "vuex";
import Loading from "~/components/Loading.vue";

export default Vue.extend({
  name: "DebitCard",
  components: {
    Loading,
  },
  data: () => ({
    loading: false,
  }),
  computed: {
    ...mapState("debits", {
      dateDebits: "date",
    }),
    ...mapGetters("debits", {
      debits: "orderByPercent",
    }),
  },
  mounted() {
    this.select();

    setInterval(() => {
      this.selectDebits();
    }, 10000);
  },
  methods: {
    ...mapActions({
      selectDebits: "debits/select",
      deleteDebits: "debits/delete",
    }),
    async select() {
      this.loading = true;
      await this.selectDebits();
      this.loading = false;
    },
  },
});
</script>

<style scoped>
.is-tiny {
  height: 0.2rem !important;
}
</style>
