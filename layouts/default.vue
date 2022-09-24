<template>
  <div class="columns">
    <div class="column">
      <SideBar />
    </div>
    <div class="column is-four-fifths">
      <Nuxt />
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
