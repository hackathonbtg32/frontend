<template>
  <Loading v-if="loading" />
  <section v-else class="p-4">
    <b-button tag="router-link" to="/" icon-left="arrow-left">Voltar</b-button>

    <hr />
    <div class="is-divider" data-content="OR"></div>

    <div class="columns is-multiline">
      <div
        v-for="account in accounts"
        :key="account.id"
        class="column is-one-third"
      >
        <NewAccountCard :account="account" />
      </div>
    </div>

    <b-button class="is-success">Cadastrar</b-button>
  </section>
</template>

<script lang="ts">
import Vue from "vue";
import Loading from "~/components/Loading.vue";

export default Vue.extend({
  name: "CreateDebitPage",
  components: {
    Loading,
  },
  data: () => ({
    accounts: [{ id: 1, namedBroker: "BTG Pactual" }],
    loading: false,
  }),
  mounted() {
    this.getAccounts();
  },
  methods: {
    async getAccounts() {
      this.loading = true;

      const accounts = await this.$axios.get("/openfinance/brokers/1");
      this.accounts = accounts.data.data;

      console.log(this.accounts);

      this.loading = false;
    },
  },
});
</script>