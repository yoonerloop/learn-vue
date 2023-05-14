<template>
  <div>
    <div>Home的组件内容</div>
    <RouterLink to="/home/news"><button>News</button></RouterLink>
    <RouterLink to="/home/message"><button>Message</button></RouterLink>
    <!-- 缓存的组件名称 -->
    <keep-alive include="News">
      <!--    <keep-alive :include="['News', 'Message']"> // 缓存多个组件-->
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>

<style scoped></style>