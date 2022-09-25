<template>
  <section class="p-4">
    <h6 class="title">Histórico</h6>
    <hr />
    <HistoryCard />
  </section>
</template>

<script lang="ts">
import Vue from "vue";
import HistoryCard from "~/components/HistoryCard.vue";

export default Vue.extend({
  name: "HistoryPage",
  components: { HistoryCard },
});
</script>

<style scoped>
.title {
  margin-top: 32px;
  font-size: 32px;
  color: #63476a;
}
</style>