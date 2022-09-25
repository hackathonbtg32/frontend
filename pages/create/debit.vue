<template>
  <Loading v-if="loading" :full="true" />
  <section v-else class="p-4">
    <b-button tag="router-link" to="/" icon-left="arrow-left">Voltar</b-button>

    <hr />
    <div class="is-divider" data-content="OR"></div>

    <b-field label="Nome">
      <b-input v-model="name"></b-input>
    </b-field>

    <b-field label="Codigo do Boleto">
      <b-input v-model="code" v-mask="codeMask" class="is-large"> </b-input>
    </b-field>

    <b-button class="is-success" @click="onSubmit">Cadastrar</b-button>
  </section>
</template>

<script lang="ts">
import Vue from "vue";
import { mapActions } from "vuex";
import Loading from "~/components/Loading.vue";

export default Vue.extend({
  name: "CreateDebitPage",
  components: {
    Loading,
  },
  data: () => ({
    codeMask: "#####.##### #####.###### #####.###### # ##############",
    name: "",
    code: "",
    loading: false,
  }),
  methods: {
    ...mapActions({
      selectDebits: "debits/select",
    }),
    async onSubmit() {
      this.loading = true;

      await this.$axios.post("/debit/1", {
        name: this.name,
        paymentCode: this.code,
      });

      await this.selectDebits();
      this.loading = false;

      this.$router.push({ path: "/" });
    },
  },
});
</script>