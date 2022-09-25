<template>
  <section class="p-4">
    <b-button tag="router-link" to="/" icon-left="arrow-left">Voltar</b-button>

    <hr />
    <div class="is-divider" data-content="OR"></div>

    <b-field label="Nome">
      <b-input v-model="name"></b-input>
    </b-field>

    <b-field label="Codigo do Boleto">
      <b-input v-model="code" v-mask="codeMask" class="is-large"> </b-input>
    </b-field>

    <b-button class="is-success">Cadastrar</b-button>
  </section>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "CreateDebitPage",
  data: () => ({
    codeMask: "#####.##### #####.###### #####.###### # ##############",
    name: "",
    code: "",
  }),
});
</script>