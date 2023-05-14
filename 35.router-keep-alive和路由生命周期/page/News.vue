<template>
  <div>
    <div>新闻</div>
    <!--等切换回来的时候input的内容没有了-->
    <ul>
      <li><input type="text" /></li>
      <li><input type="text" /></li>
      <li><input type="text" /></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "News",
  activated() {
    console.log("activated");
  },
  deactivated() {
    console.log("deactivated");
  },
};
</script>

<style scoped></style>
