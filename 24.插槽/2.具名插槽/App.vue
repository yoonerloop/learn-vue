<template>
  <div>
    <Header>
      <img alt="" src="./assets/logo.png" />
      <!--        写法1-->
      <div slot="first">我是插槽里面的内容1</div>
      <hr />
      <!--        写法2-->
      <div slot="second">我是插槽里面的内容2</div>
      <div slot="second">我是插槽里面的内容2</div>
      <hr />
      <!--        写法3-->
      <div slot="second">
        <div>我是插槽里面的内容3</div>
        <div>我是插槽里面的内容3</div>
      </div>
      <hr />
      <!--        写法4-->
      <template slot="second">
        <div>我是插槽里面的内容4</div>
        <div>我是插槽里面的内容4</div>
      </template>
      <hr />
      <!--        写法5-->
      <template v-slot:second>
        <div>我是插槽里面的内容5</div>
        <div>我是插槽里面的内容5</div>
      </template>
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
