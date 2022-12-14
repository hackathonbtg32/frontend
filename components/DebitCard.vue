<template>
  <Loading v-if="loading" />
  <section v-else-if="debits.length > 0">
    <div class="columns">
      <p class="column has-text-centered">Descricao</p>
      <p class="column has-text-centered">Valor</p>
      <p class="column has-text-centered">Vencimento</p>
      <p class="column has-text-centered">Instituicao</p>
      <p class="column is-1"></p>
    </div>

    <div
      v-for="debit in filter(debits)"
      :key="debit.id"
      class="card mb-5 is-relative"
    >
      <b-progress
        :rounded="false"
        :value="debit.percent"
        :type="debit.status === 1 ? 'is-success' : 'is-danger'"
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
            v-if="!debit.paymentData.paymentStatus"
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
  <div v-else class="p-6 columns is-multiline is-centered">
    <figure class="image is-128x128 mb-4">
      <img src="/noDebits.svg" />
    </figure>
    <p class="column is-full has-text-centered">Nenhum debito cadastrado!</p>
  </div>
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
  props: {
    limit: {
      type: Number,
      default: null,
    },
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
    filter(list: unknown[]) {
      if (this.limit === null) return list;
      if (list === undefined) return [];
      return list.slice(0, this.limit);
    },
  },
});
</script>

<style scoped>
.is-tiny {
  height: 0.2rem !important;
}
</style>
