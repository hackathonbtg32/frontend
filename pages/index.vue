<template>
  <div class="py-4">
    <b-tabs v-model="tab">
      <b-tab-item label="Dashboard" value="dashboard">
        <DebitCard :limit="4" />
      </b-tab-item>

      <b-tab-item label="Debitos" value="debits">
        <DebitCard />
      </b-tab-item>

      <b-tab-item label="Contas" value="accounts">
        <AccountCard />
      </b-tab-item>
    </b-tabs>

    <b-button
      v-if="links[tab] !== ''"
      tag="router-link"
      :to="links[tab]"
      class="is-primary is-floating"
      icon-left="plus"
    >
      Cadastrar
    </b-button>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { mapState, mapMutations } from "vuex";
import AccountCard from "~/components/AccountCard.vue";
import DebitCard from "~/components/DebitCard.vue";

export default Vue.extend({
  name: "IndexPage",
  components: {
    AccountCard,
    DebitCard,
  },
  data: () => ({
    tab: 0,
    links: ["", "/create/debit", "/create/account"],
  }),
  computed: {
    ...mapState("user", {
      userTab: "tab",
    }),
  },
  watch: {
    tab(v: String) {
      this.setTab(v);
    },
  },
  mounted() {
    this.tab = this.userTab;
  },
  methods: {
    ...mapMutations({
      setTab: "user/set",
    }),
  },
});
</script>

<style scoped>
.is-floating {
  position: fixed;
  right: 2rem;
  bottom: 2rem;
}
</style>
