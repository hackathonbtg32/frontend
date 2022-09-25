<template>
  <section>
    <div class="columns">
      <p class="column has-text-centered">Descricao</p>
      <p class="column has-text-centered">Valor</p>
      <p class="column has-text-centered">Vencimento</p>
      <p class="column has-text-centered">Destino</p>
      <p class="column is-1"></p>
    </div>

    <div v-for="debit in debits" :key="debit.id" class="card mb-5 is-relative">
      <b-progress
        :rounded="false"
        :value="debit.percent"
        :type="debit.percent === 100 ? 'is-success' : 'is-danger'"
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

export default Vue.extend({
  name: "DebitCard",
  computed: {
    ...mapState("debits", {
      dateDebits: "date",
    }),
    ...mapGetters("debits", {
      debits: "orderByPercent",
    }),
  },
  mounted() {
    this.selectDebits();

    setInterval(() => {
      this.selectDebits();
    }, 10000);
  },
  methods: {
    ...mapActions({
      selectDebits: "debits/select",
      deleteDebits: "debits/delete",
    }),
  },
});
</script>

<style scoped>
.is-tiny {
  height: 0.2rem !important;
}
</style>
