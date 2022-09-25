<template>
  <section class="p-4">
    <b-button tag="router-link" to="/" icon-left="arrow-left">Voltar</b-button>

    <hr/>

    <div class="is-divider" data-content="OR"></div>

    <NewAccountCard/>

    <b-button class="is-success">Cadastrar</b-button>
  </section>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "CreateDebitPage",
  data: () => ({}),
});
</script>