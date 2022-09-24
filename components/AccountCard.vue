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
          <p class="title is-4">BTG Pactual</p>
          <p class="subtitle is-6">Investimentos</p>
        </div>

        <b-dropdown
          aria-role="list"
          position="is-top-left"
          class="is-clickable"
        >
          <template #trigger>
            <b-icon icon="dots-horizontal"></b-icon>
          </template>

          <b-dropdown-item aria-role="listitem">Remover Conta</b-dropdown-item>
          <b-dropdown-item aria-role="listitem">Editar Apelido</b-dropdown-item>
        </b-dropdown>
      </div>

      <div class="content">
        <p class="is-size-4 has-text-weight-semibold">R$ 170.00</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "AccountCard",
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
