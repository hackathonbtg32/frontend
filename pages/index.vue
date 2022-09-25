<template>
  <div class="py-4">
    <b-tabs v-model="tab">
      <b-tab-item label="Debitos">
        <DebitCard />

        <b-button
          tag="router-link"
          to="/create/debit"
          type="is-primary mt-4"
          icon-left="plus"
        >
          Cadastrar
        </b-button>
      </b-tab-item>

      <b-tab-item label="Contas">
        <AccountCard />

        <b-button
          tag="router-link"
          to="/create/account"
          type="is-primary mt-4"
          icon-left="plus"
        >
          Cadastrar
        </b-button>
      </b-tab-item>
    </b-tabs>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
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
  }),
});
</script>
