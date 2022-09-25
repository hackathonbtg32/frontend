<template>
  <section class="p-4">
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
import { Account } from "~/entities/Account";

export default Vue.extend({
  name: "CreateDebitPage",
  data: () => ({
    accounts: [{ id: 1, namedBroker: "BTG Pactual" }],
  }),
  methods: {
    onList(list: Account[]) {
      console.log(list);
    },
  },
});
</script>