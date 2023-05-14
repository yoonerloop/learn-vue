<template>
  <div>
    <h1>banner</h1>
    <button @click="forward">前进</button>
    <button @click="back">后退 </button>
  </div>
</template>
<script>
export default {
  name: "Banner",
  methods: {
    forward() {
      this.$router.forward();
    },
    back() {
      this.$router.back();
    },
  },
};
</script>

<style scoped>
button {
  padding: 10px;
  background-color: skyblue;
  margin: 10px;
}
</style>
