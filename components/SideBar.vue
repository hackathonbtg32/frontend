<template>
  <header class="p-4">
    <b-menu :activable="false">
      <figure class="image is-3by1 mb-5">
        <img
          src="/Logo.svg"
          alt="Lightweight UI components for Vue.js based on Bulma"
        />
      </figure>
      <b-menu-list>
        <b-menu-item
          icon="home"
          label="Dashboard"
          tag="router-link"
          to="/"
        ></b-menu-item>
        <b-menu-item icon="account" label="Meu Perfil">
          <b-menu-item icon="cog" label="Gerenciar Perfil"></b-menu-item>
          <b-menu-item icon="logout" label="Sair"></b-menu-item>
        </b-menu-item>
        <b-menu-item
          icon="information-outline"
          label="Historico"
          tag="router-link"
          to="/history"
        ></b-menu-item>
      </b-menu-list>
    </b-menu>
  </header>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  data: () => ({
    active: false,
  }),
});
</script>
