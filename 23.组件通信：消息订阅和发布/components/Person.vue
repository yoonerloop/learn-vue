<template>
  <div>
    <h1>我是父组件person</h1>
    <Man />
  </div>
</template>

<script>
import Man from "@/components/Man.vue";

export default {
  name: "Person",
  components: { Man },
};
</script>

<style scoped></style>
