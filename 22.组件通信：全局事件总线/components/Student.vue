<template>
  <div>
    <h1>我是子组件的子组件</h1>
    <button @click="handleClick">点击我触发Person的事件</button>
  </div>
</template>

<script>
export default {
  name: "Student",
  methods: {
    handleClick() {
      this.$bus.$emit("app", { name: "张三", age: 90 });
    },
  },
};
</script>

<style scoped></style>
