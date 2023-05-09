<template>
  <div>
    <!-- 1、子给父传递数据：通过函数传递 -->
    <Student :handleStudent="handleStudent" />
    <hr />
    <!-- 2、子给父传递数据：父组件给子组件绑定一个自定义事件 -->
    <School @myEvent="handleSchool" />
    <hr />
    <!--  3、子给父传递数据：ref挂载方式 -->
    <Room ref="roomRef" />
  </div>
</template>

<script>
import Student from "./components/Student.vue";
import School from "@/components/School.vue";
import Room from "@/components/Room.vue";

export default {
  name: "App",
  components: {
    Room,
    Student,
    School,
  },
  methods: {
    handleStudent() {
      console.log("handleStudent被调用了：函数传递方式");
    },
    handleSchool() {
      console.log("handleSchool被调用了：自定义事件方式");
    },
  },
  mounted() {
    this.$refs.roomRef.$on("myEvent", () => {
      console.log(".$refs.roomRef.$on：ref挂载方式");
    });
  },
};
</script>
