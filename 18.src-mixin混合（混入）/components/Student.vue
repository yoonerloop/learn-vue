<template>
  <div>
    <h4 @click="showAlert(name)">姓名：{{ name }}</h4>
    <h4 @click="showAlert(age)">年龄：{{ age - 10 }}</h4>
    <h4 @click="showAlert(sex)">性别：{{ sex }}</h4>
  </div>
</template>

<script>
import { huihe } from "@/minxin";

export default {
  name: "Student",
  mixins: [huihe],
  data() {
    return {
      age: 30,
      name: "张三",
      sex: "男",
    };
  },
};
</script>

<style scoped></style>
