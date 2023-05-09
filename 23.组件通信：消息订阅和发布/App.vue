<template>
  <div>
    <Person />
  </div>
</template>

<script>
import Person from "@/components/Person.vue";
import pubsub from "pubsub-js";
export default {
  name: "App",
  components: {
    Person,
  },
  mounted() {
    // 订阅
    this.pubId = pubsub.subscribe("hello", async (key, value) => {
      console.log("hello触发了", key, value);
    });
  },
  beforeDestroy() {
    // 取消订阅
    pubsub.unsubscribe(this.pubId);
  },
};
</script>
