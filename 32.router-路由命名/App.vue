<template>
  <div>
    <Banner />
    <div class="wrapper">
      <div class="left">
        <router-link :to="{ name: 'about-name' }">
          <button class="nav">About</button>
        </router-link>
<!--        <router-link to="/about">-->
<!--          <button class="nav">About</button>-->
<!--        </router-link>-->
        <router-link to="/home">
          <button class="nav">Home</button>
        </router-link>
      </div>
      <!--路由的视图-->
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Banner from "@/page/Banner.vue";

export default {
  name: "App",
  components: { Banner },
};
</script>

<style scoped>
.wrapper {
  display: flex;
}
.left {
  display: inline-flex;
  flex-direction: column;
}
.nav {
  padding: 10px;
  width: 70px;
  margin: 10px;
  display: block;
  cursor: pointer;
}
.content {
  background-color: #cccccc;
  flex: 1;
}
</style>
