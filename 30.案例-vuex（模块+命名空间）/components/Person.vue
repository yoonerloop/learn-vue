<template>
  <div>
    <h2>人员列表</h2>
    <input type="text" v-model="name" />
    <button @click="add">添加</button>
    <button @click="addWange">添加一个姓王的人</button>
    <ul>
      <li v-for="(person, index) in $store.state.a.personList" :key="index">
        {{ person.name }}
      </li>
    </ul>
    <h4 style="color: red">count组件的求和为：{{ this.$store.state.a.mun }}</h4>
    <h3>列表中第一个人的名字是：{{ firsPersonName }}</h3>
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
      //　特别注意：这里需要加上【命名空间／】否则找不到，需要斜杠分开
      this.$store.commit("b/ADD_PERSON", personList);
    },
    addWange() {
        const personList = { pid: nanoid(), name: this.name };
        this.name = "";
        //　特别注意：这里需要加上【命名空间／】否则找不到，需要斜杠分开
        this.$store.dispatch("b/addPersonWang", personList);
    },
  },
  computed: {
    firsPersonName() {
      // 特别注意：这需要加上斜杠取值
      console.log(this.$store.getters);
      return this.$store.getters["b/firstPersonName"];
    },
  },
};
</script>

<style scoped></style>
