<template>
  <Loading v-if="loading" />
  <div v-else-if="accounts.length > 0" class="columns is-multiline">
    <div
      v-for="account in filter(accounts)"
      :key="account.id"
      class="column is-one-third"
    >
      <div class="card" :class="account.status === 1 && 'is-main'">
        <div class="card-content is-relative">
          <div class="media">
            <div class="media-left">
              <figure class="image is-64x64">
                <img
                  src="https://bulma.io/images/placeholders/96x96.png"
                  alt="Placeholder image"
                />
              </figure>
            </div>

            <div class="media-content">
              <p class="title is-4">{{ account.namedBroker }}</p>
              <p class="subtitle is-6 mb-0">
                {{ account.cardLabel }}
              </p>
              <p class="is-tiny is-light">
                {{
                  account.status >= 0
                    ? account.status === 1
                      ? "Banco Principal"
                      : "Banco"
                    : "Corretora"
                }}
              </p>
            </div>

            <b-dropdown
              v-if="account.status !== 1"
              aria-role="list"
              position="is-top-left"
              class="is-clickable"
            >
              <template #trigger>
                <b-icon icon="dots-horizontal"></b-icon>
              </template>

              <b-dropdown-item
                v-if="account.status === 0"
                aria-role="listitem"
                @click="() => mainAccount(account.id)"
              >
                Tornar Principal
              </b-dropdown-item>
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
  <div v-else class="p-6 columns is-multiline is-centered">
    <figure class="image is-128x128 mb-4">
      <img src="/noAccount.svg" />
    </figure>
    <p class="column is-full has-text-centered">
      Nenhuma conta cadastrada ainda!
    </p>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { mapState, mapActions } from "vuex";
import Loading from "~/components/Loading.vue";

export default Vue.extend({
  name: "AccountCard",
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
    ...mapState("accounts", {
      accounts: "list",
      dateAccounts: "date",
    }),
  },
  mounted() {
    this.select();

    setInterval(() => {
      this.selectAccounts();
    }, 10000);
  },
  methods: {
    ...mapActions({
      selectAccounts: "accounts/select",
      deleteAccount: "accounts/delete",
      mainAccount: "accounts/main",
    }),
    async select() {
      this.loading = true;
      await this.selectAccounts();
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
.action {
  position: absolute;
  top: 1rem;
  right: 1rem;
  cursor: pointer;
}

.is-main {
  background-color: #fef !important;
  border: 2px solid #3745a4;
}

.is-tiny {
  font-size: 12px;
}
</style>
