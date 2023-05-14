<template>
  <div>
    <div>拿到的信息==1==>{{ this.$route.params.id }}</div>
    <div>拿到的信息==2==>{{ this.$route.params.name }}</div>
  </div>
</template>

<script>
export default {
  name: "Detail",
    mounted() {
        console.log(this)
    }
};
</script>

<style scoped></style>
