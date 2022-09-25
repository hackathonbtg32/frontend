<template>
  <div class="p-6">
    <b-loading v-model="loading" :is-full-page="false"></b-loading>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "LoadingComponent",
  props: {
    isLoading: {
      type: Boolean,
      required: true,
    },
  },
  data: () => ({
    loading: true,
  }),
  watch: {
    isLoading(v: boolean) {
      this.loading = v;
    },
  },
});
</script>