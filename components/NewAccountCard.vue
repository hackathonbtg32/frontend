<template>
  <div class="card">
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
          <p class="title is-4">{{ data.namedBroker }}</p>
        </div>

        <b-field position="is-top-left" class="is-clickable">
          <b-checkbox v-model="data.select"></b-checkbox>
        </b-field>
      </div>

      <div class="content">
        <b-field label="Apelido">
          <b-input v-model="data.label"></b-input>
        </b-field>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "AccountCard",
  props: {
    account: {
      type: Object,
      required: true,
    },
  },
  data: () => ({
    data: {
      namedBroker: null,
    },
  }),
  created() {
    this.data = this.account;
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
</style>
