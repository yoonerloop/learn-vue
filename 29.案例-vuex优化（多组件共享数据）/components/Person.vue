<template>
  <div>
    <h2>人员列表</h2>
    <input type="text" v-model="name" />
    <button @click="add">添加</button>
    <ul>
      <li v-for="(person, index) in $store.state.personList" :key="index">
        {{ person.name }}
      </li>
    </ul>
    <h4 style="color: red">count组件的求和为：{{ this.$store.state.mun }}</h4>
  </div>
</template>

<script>
import { nanoid } from "nanoid";

export default {
  name: "Person",
  data() {
    return {
      name: "",
    };
  },
  methods: {
    add() {
      const personList = { pid: nanoid(), name: this.name };
      this.name = "";
      this.$store.commit("ADD_PERSON", personList);
    },
  },
};
</script>

<style scoped></style>
