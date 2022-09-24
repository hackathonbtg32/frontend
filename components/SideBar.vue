<template>
  <header class="p-4">
    <b-menu>
      <figure class="image is-3by1 mb-5">
        <img
          src="https://raw.githubusercontent.com/buefy/buefy/dev/static/img/buefy-logo.png"
          alt="Lightweight UI components for Vue.js based on Bulma"
        />
      </figure>
      <b-menu-list>
        <b-menu-item icon="account" label="Meu Perfil">
          <b-menu-item label="Gerenciar Perfil"></b-menu-item>
          <b-menu-item label="Configurar Contas"></b-menu-item>
        </b-menu-item>
        <b-menu-item icon="information-outline" label="Historico"></b-menu-item>
      </b-menu-list>
      <b-menu-list>
        <b-menu-item icon="logout" label="Sair"></b-menu-item>
      </b-menu-list>
    </b-menu>
  </header>
</template>
