<template>
  <div>
    <h1>我是子组件Man</h1>
    <Student />
  </div>
</template>

<script>
import Student from "@/components/Student.vue";

export default {
  name: "Man",
  components: { Student },
};
</script>

<style scoped></style>
