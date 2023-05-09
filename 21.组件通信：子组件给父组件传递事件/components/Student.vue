<template>
  <div>
    <button @click="handleClick">点击触发事件</button>
  </div>
</template>

<script>
export default {
  name: "Student",
  props: ["handleStudent"],
  methods: {
    handleClick() {
      this.handleStudent();
    },
  },
};
</script>

<!--scoped可以实现样式的隔离，避免代码执行的时候命名冲突-->
<style scoped></style>
