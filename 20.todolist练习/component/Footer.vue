<template>
  <div>
    <input type="checkbox" @change="checkedAll" />
    <span>已完成{{ currentCount }}/全部{{ total }}</span>
  </div>
</template>

<script>
export default {
  props: ["total", "currentCount", "checkedAll"],
  name: "Footer",
};
</script>

<style scoped></style>
