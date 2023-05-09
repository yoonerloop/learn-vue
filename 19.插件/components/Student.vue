<template>
  <div>
    <h4>姓名：{{ name }}</h4>
    <h4>年龄：{{ age - 10 }}</h4>
    <h4>性别：{{ sex }}</h4>
  </div>
</template>

<script>
export default {
  name: "Student",
  data() {
    return {
      age: 30,
      name: "张三",
      sex: "男",
    };
  },
};
</script>

<!--scoped可以实现样式的隔离，避免代码执行的时候命名冲突-->
<style scoped></style>
