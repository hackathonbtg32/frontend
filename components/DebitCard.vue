<template>
  <section>
    <div class="columns">
      <p class="column has-text-centered">Descricao</p>
      <p class="column has-text-centered">Valor</p>
      <p class="column has-text-centered">Vencimento</p>
      <p class="column has-text-centered">Nome</p>
    </div>
    <div>
      <div class="card">
        <div class="columns">
          <p class="column has-text-centered">Faculdade</p>
          <p class="column has-text-centered">R$ 1000,00</p>
          <p class="column has-text-centered">
            <span class="tag is-success"> 10/12/22 </span>
          </p>
          <p class="column has-text-centered">Univem</p>
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
.action {
  position: absolute;
  top: 1rem;
  right: 1rem;
  cursor: pointer;
}
</style>
