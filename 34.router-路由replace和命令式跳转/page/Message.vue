<template>
  <div>
    <ul>
      <li v-for="(item, index) in list" :key="index">
        <router-link
          :to="{
            name: 'xxxxx', // 注意：使用query的时候必须使用name，不能使用path，否则的话就无法加载
            params: {
              id: index,
              name: item,
            },
          }"
          >{{ item }}</router-link
        >
        <button @click="pushShow(item, index)">PUSH查看</button>
        <button @click="replaceShow(item, index)">REPLACE查看</button>
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
import index from "vuex";

export default {
  name: "Message",
  data() {
    return {
      list: [111, 222, 333, 444, 555, 666],
    };
  },
  methods: {
    pushShow(item, index) {
      this.$router.push({
        name: "xxxxx", // 注意：使用query的时候必须使用name，不能使用path，否则的话就无法加载
        params: {
          id: index,
          name: item,
        },
      });
    },
    replaceShow(item, index) {
      this.$router.replace({
        name: "xxxxx", // 注意：使用query的时候必须使用name，不能使用path，否则的话就无法加载
        params: {
          id: index,
          name: item,
        },
      });
    },
  },
};
</script>

<style scoped></style>
