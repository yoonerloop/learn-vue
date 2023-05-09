<template>
  <div>
    <Person />
  </div>
</template>

<script>
import Person from "@/components/Person.vue";

export default {
  name: "App",
  components: {
    Person,
  },
  mounted() {
    this.$bus.$on("app", (data) => {
      console.log("接收到person的事件了：", data);
    });
  },
};
</script>
