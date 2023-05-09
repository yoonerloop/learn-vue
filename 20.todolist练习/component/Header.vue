<template>
  <div>
    <input placeholder="请输入项目" type="text" v-model="value" />
    <button @click="add">添加</button>
  </div>
</template>

<script>
import { nanoid } from "nanoid";

export default {
  name: "Header",
  data() {
    return { value: "" };
  },
  props: ["receive"],
  methods: {
    add() {
      const todoObj = { id: nanoid(), value: this.value, done: false };
      this.receive(todoObj);
      this.value = '';
    },
  },
};
</script>

<style scoped></style>
