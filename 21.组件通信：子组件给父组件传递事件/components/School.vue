<template>
  <button @click="handleClick">点击触发</button>
</template>

<script>
export default {
  name: "School",
  methods: {
    handleClick() {
      this.$emit("myEvent");
    },
  },
};
</script>

<style scoped></style>
