<template>
  <div class="columns is-multiline">
    <div
      v-for="account in accounts"
      :key="account.id"
      class="column is-one-third"
    >
      <div class="card" :class="account.main && 'is-main'">
        <div class="card-content is-relative">
          <div class="media">
            <div class="media-left">
              <figure class="image is-48x48">
                <img
                  src="https://bulma.io/images/placeholders/96x96.png"
                  alt="Placeholder image"
                />
              </figure>
            </div>

            <div class="media-content">
              <p class="title is-4">{{ account.namedBroker }}</p>
              <p class="subtitle is-6">{{ account.cardLabel }}</p>
            </div>

            <b-dropdown
              v-if="!account.main"
              aria-role="list"
              position="is-top-left"
              class="is-clickable"
            >
              <template #trigger>
                <b-icon icon="dots-horizontal"></b-icon>
              </template>

              <b-dropdown-item
                aria-role="listitem"
                @click="() => deleteAccount(account.id)"
              >
                Remover
              </b-dropdown-item>
            </b-dropdown>
          </div>

          <div class="content">
            <p class="is-size-4 has-text-weight-semibold">
              R$ {{ account.availableBrokerValue }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { mapState, mapActions } from "vuex";

export default Vue.extend({
  name: "AccountCard",
  computed: {
    ...mapState("accounts", {
      accounts: "list",
      dateAccounts: "date",
    }),
  },
  mounted() {
    this.selectAccounts();

    setInterval(() => {
      this.selectAccounts();
    }, 100000);
  },
  methods: {
    ...mapActions({
      selectAccounts: "accounts/select",
      deleteAccount: "accounts/delete",
    }),
  },
});
</script>

<style scoped>
.action {
  position: absolute;
  top: 1rem;
  right: 1rem;
  cursor: pointer;
}

.is-main {
  background-color: #fef !important;
}
</style>
