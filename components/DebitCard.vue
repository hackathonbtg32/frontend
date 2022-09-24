<template>
  <section>
    <div class="columns">
      <p class="column has-text-centered">Descricao</p>
      <p class="column has-text-centered">Valor</p>
      <p class="column has-text-centered">Vencimento</p>
      <p class="column has-text-centered">Destino</p>
      <p class="column is-1"></p>
    </div>

    <div v-for="x in [1, 2, 3, 4, 5]" :key="x" class="card mb-5 is-relative">
      <b-progress
        :rounded="false"
        :value="60"
        type="is-success"
        class="is-tiny"
      ></b-progress>

      <div class="columns">
        <p class="column has-text-centered">Faculdade</p>
        <p class="column has-text-centered">R$ 1000,00</p>
        <p class="column has-text-centered">10 / 12 / 22</p>
        <p class="column has-text-centered">Univem</p>
        <div class="column is-1">
          <b-dropdown
            aria-role="list"
            position="is-top-left"
            class="is-clickable"
          >
            <template #trigger>
              <b-icon icon="dots-horizontal"></b-icon>
            </template>

            <b-dropdown-item aria-role="listitem"> Remover </b-dropdown-item>
          </b-dropdown>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "DebitCard",
});
</script>

<style scoped>
.is-tiny {
  height: 0.2rem !important;
}
</style>
