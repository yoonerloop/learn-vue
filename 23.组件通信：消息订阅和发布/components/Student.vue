<template>
  <div>
    <h1>我是子组件的子组件</h1>
    <button @click="handleClick">点击我触发Person的事件</button>
  </div>
</template>

<script>
import pubsub from "pubsub-js";
export default {
  name: "Student",
  methods: {
    handleClick() {
      // 发布
      pubsub.publish("hello", 888);
    },
  },
};
</script>

<style scoped></style>
