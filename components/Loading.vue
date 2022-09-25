<template>
  <div class="p-6">
    <b-loading v-model="loading" :is-full-page="full"></b-loading>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "LoadingComponent",
  props: {
    full: {
      type: Boolean,
      default: false,
    },
  },
  data: () => ({
    loading: true,
  }),
});
</script>