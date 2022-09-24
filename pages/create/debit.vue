<template>
  <section class="p-4">
    <b-button tag="router-link" to="/" icon-left="arrow-left">Voltar</b-button>

    <div class="py-6">
      <b-field label="Name">
        <b-input v-model="name"></b-input>
      </b-field>

      <b-field label="Codigo do Boleto">
        <b-input v-model="code" class="is-large"> </b-input>
      </b-field>
    </div>

    <b-button class="is-success">Cadastrar</b-button>
  </section>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "CreateDebitPage",
  data: () => ({
    name: "",
    code: "",
  }),
});
</script>