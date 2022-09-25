<template>
  <div>
    <div class="columns main">
      <div class="column">
        <SideBar />
      </div>
      <div class="column is-four-fifths is-relative">
        <Nuxt />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import SideBar from "~/components/SideBar.vue";

export default Vue.extend({
  name: "DefaultLayout",
  components: {
    SideBar,
  },
});
</script>

<style scoped>
.main {
  position: none !important;
}
</style>
