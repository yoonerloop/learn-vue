<template>
  <div>
    <div>拿到的信息==1==>{{ this.$route.params.id }}</div>
    <div>拿到的信息==2==>{{ this.$route.params.name }}</div>
    <div>a:{{ id }}</div>
    <div>b:{{ name }}</div>
  </div>
</template>

<script>
export default {
  //props: ["a", "b"],
  props: ["id", "name"],
  name: "Detail",
  mounted() {
    console.log(this);
  },
};
</script>

<style scoped></style>
