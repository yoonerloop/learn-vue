<template>
  <div>
    <button @click="handleClick">点击教室</button>
    <button @click="unbind">解绑点击教室事件</button>
    <button @click="death">销毁自身组件</button>
  </div>
</template>

<script>
export default {
  name: "Room",
  methods: {
    handleClick() {
      this.$emit("myEvent");
    },
    unbind() {
      // 解绑一个事件
      this.$off("myEvent");
      // 解绑多个事件
      this.$off(["myEvent1", "myEvent2", "myEvent3"]);
    },
    death() {
      // 手动销毁当前组件
      this.$destroy();
    },
  },
};
</script>

<style scoped></style>
