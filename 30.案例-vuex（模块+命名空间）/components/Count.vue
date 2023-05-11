<template>
  <div>
    <h2>当前的求和为：{{ mun }}</h2>
    <!--这里可以使用计算属性，如果多个组件需要共享，则需要写成store里面配置-->
    <h4>当前放大10倍后的数据：{{ bigSum }}</h4>
    <h4>我在{{ school }}学习{{ subject }}</h4>
    <select v-model.number="n">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>

    <!--      注意使用mapMutations的时候参数写在这里   -->
    <button @click="add(n)">+</button>
    <button @click="reduce(n)">-</button>
    <button @click="addJi(n)">当前求和为奇数再加</button>
    <button @click="addWait">等一等再加</button>
    <h2 />
    <h4 style="color: red">共享的PersonList：{{ personList }}</h4>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";

export default {
  name: "Count",
  data() {
    return {
      n: 1,
    };
  },
  methods: {
    // 借助mapMutations方法生成Mutations，自动调用commit
    //  ...mapMutations({ reduce: "JIAN" }),
    ...mapMutations("a", { reduce: "JIAN" }),

    // 借助mapActions方法生成action
    // ...mapActions({ add: "jia", addJi: "jiajishu" }),
    ...mapActions("a", { add: "jia", addJi: "jiajishu" }),

    addWait() {
      setTimeout(() => {}, 500);
    },
  },
  mounted() {
    console.log("=========", this.$store.state);
  },
  computed: {
    // 简写
    // ...mapState(["a", "b"]), //方式1：store不加namespaced，使用时候直接a.school等等
    ...mapState("a", ["mun", "school", "subject"]),
    ...mapState("b", ["personList"]),
    // 简写
    ...mapGetters("a", ["bigSum"]),
  },
};
</script>

<style scoped>
button {
  margin-left: 10px;
}
</style>
