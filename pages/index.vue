<template>
  <div>
    <b-tabs v-model="activeTab">
      <b-tab-item label="Debitos"> Teste </b-tab-item>

      <b-tab-item label="Contas">
        <AccountCard />
      </b-tab-item>
    </b-tabs>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { mapState, mapActions } from "vuex";
import AccountCard from "~/components/AccountCard.vue";

export default Vue.extend({
  name: "IndexPage",
  components: {
    AccountCard,
  },
  data: () => ({
    tab: null,
  }),
  computed: {
    ...mapState("accounts", {
      accounts: "list",
      dateAccounts: "date",
    }),
  },
  mounted() {
    this.selectAccounts();
  },
  methods: {
    ...mapActions({
      selectAccounts: "accounts/select",
    }),
  },
});
</script>
