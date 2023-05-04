<template>
  <!--    // 混合的方法-->
  <div @click="showAlert(name)">{{ name }}</div>
</template>

<script>
import { huihe } from "@/minxin";

export default {
  name: "School",
  data() {
    return {
      name: "高级中学",
    };
  },
  mixins: [huihe],
};
</script>

<style scoped></style>
