<template>
  <div>
    <div>我的下面的是一个插槽</div>
      <slot name="first"></slot>
      <slot name="second"></slot>
  </div>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style scoped></style>
