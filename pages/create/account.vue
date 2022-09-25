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

    <b-button class="is-success" @click="onSubmit">Cadastrar</b-button>
  </section>
</template>

<script lang="ts">
import Vue from "vue";
import Loading from "~/components/Loading.vue";

interface Account {
  select: boolean;
  label: String;
  organizationId: String;
}

export default Vue.extend({
  name: "CreateDebitPage",
  components: {
    Loading,
  },
  data: () => ({
    accounts: [] as Account[],
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

      this.loading = false;
    },
    async onSubmit() {
      this.loading = true;

      const accounts = this.accounts.filter((account) => {
        return account.select && account.select === true;
      });
      const brokers = accounts.map((account) => ({
        label: account.label,
        organizationId: account.organizationId,
      }));

      await this.$axios.post("/broker/insert/1", {
        dataBrokers: brokers,
      });

      this.loading = false;

      this.$router.push({ path: "/" });
    },
  },
});
</script>