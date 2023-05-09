<template>
  <div>
    <Header>
      <img src="./assets/logo.png" alt="" />
      <span>我是插槽里面的内容</span>
    </Header>
  </div>
</template>

<script>
import Header from "@/components/Count.vue";
export default {
  name: "App",
  components: {
    Header,
  },
};
</script>
