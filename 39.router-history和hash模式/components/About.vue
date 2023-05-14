<template>
  <div>我是about</div>
</template>

<script>
export default {
  name: "About",
  // 通过路由规则，进入该组件的时候会调用，如果直接使用该组件展示，而不是路由跳转则不属于路由规则
  beforeRouteEnter: function (to, from, next) {
    console.log("组件内路由守卫：beforeRouteEnter");
    if (to.meta.isAuth) {
      next();
    } else {
      alert("不符合路由跳转规则");
    }
  },
  // 通过路由规则，离开该组件的时候会调用，如果直接使用该组件展示，而不是路由跳转则不属于路由规则
  beforeRouteLeave: function (to, from, next) {
    console.log("组件内路由守卫：beforeRouteLeave");
  },
  beforeRouteUpdate: function () {
    console.log("beforeRouteUpdate");
  },
};
</script>

<style scoped></style>
