<template>
  <div>
    <b-tabs>
      <b-tab-item label="Debitos">
        <DebitCard />
      </b-tab-item>

      <b-tab-item label="Contas" class="py-4">
        <div class="columns is-multiline">
          <div
            v-for="x in [1, 2, 4, 6, 7, 5, 7, 8, 9, 6, 5, 1, 3, 4]"
            :key="x"
            class="column is-one-third"
          >
            <AccountCard />
          </div>
        </div>
      </b-tab-item>
    </b-tabs>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { mapState, mapActions } from "vuex";
import AccountCard from "~/components/AccountCard.vue";
import DebitCard from "~/components/DebitCard.vue";

export default Vue.extend({
  name: "IndexPage",
  components: {
    AccountCard,
    DebitCard,
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
