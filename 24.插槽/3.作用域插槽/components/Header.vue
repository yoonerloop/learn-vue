<template>
  <div>
    <div>{{ name }}</div>
    <slot :title="title" :msg="msg">默认显示的数据</slot>
  </div>
</template>

<script>
export default {
  name: "Header",
  props: ["name"],
  data() {
    return {
      title: ["吃饭", "游戏", "打豆豆"],
      msg: "hello",
    };
  },
};
</script>

<style scoped></style>
