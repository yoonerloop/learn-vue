<template>
  <div>
    <div>Home的组件内容</div>
    <RouterLink to="/home/news"><button>News</button></RouterLink>
    <RouterLink to="/home/message"><button>Message</button></RouterLink>
    <RouterView></RouterView>
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>

<style scoped></style>
