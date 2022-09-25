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
            </div>

            <b-field
            position="is-top-left"
            class="is-clickable"
            >
              <b-checkbox></b-checkbox>
            </b-field>
          </div>

          <div class="content">
            <b-field label="Apelido">
            <b-input v-model="label"></b-input>
        </b-field>
          </div>
        </div>
      </div>
    </div>
    <b-loading :is-full-page="false" v-model="isLoading" :can-cancel="true"></b-loading>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { mapState, mapActions } from "vuex";

export default Vue.extend({
  data() {
    return {
      isLoading: true,  
    }
  },
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
    this.isLoading = false
  },
  methods: {
    ...mapActions({
      selectAccounts: "accounts/select",
      deleteAccount: "accounts/delete",
    }),
    openLoading() {
      this.isLoading = true
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
  border: 4px solid #3745A4;
}
</style>
