<template>
  <div>
    <h2>当前的求和为：{{ he }}</h2>
    <!--这里可以使用计算属性，如果多个组件需要共享，则需要写成store里面配置-->
    <h4>当前放大10倍后的数据：{{ bigSum }}</h4>
    <h4>我在{{ xuexiao }}学习{{ subject }}</h4>
    <select v-model.number="n">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <!--    <button @click="add">+</button>-->
    <!--    <button @click="reduce">-</button>-->
    <!--    <button @click="addJi">当前求和为奇数再加</button>-->
    <!--    <button @click="addWait">等一等再加</button>-->

    <!--      注意使用mapMutations的时候参数写在这里   -->
    <button @click="add(n)">+</button>
    <button @click="reduce(n)">-</button>
    <button @click="addJi(n)">当前求和为奇数再加</button>
    <button @click="addWait">等一等再加</button>
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
    // add() {
    //   this.$store.dispatch("jia", this.n);
    // },
    // reduce() {
    //   // this.$store.dispatch("jian", this.n);
    //   //这里为简写，当store中的action没有实际的其他运算逻辑的时候，这里直接省略dispatch，使用commit
    //   this.$store.commit("JIAN", this.n);
    // },
    // addJi() {
    //   this.$store.dispatch("jiajishu", this.n);
    // },

    // 借助mapMutations方法生成Mutations，自动调用commit
    ...mapMutations({ reduce: "JIAN" }),
    // 也可也简写下，这样的话需要注意将@click的方法名称也该成一样的大写
    // ...mapMutations(["JIA","JIAN", "JIAJISHU" ]),

      // 借助mapActions方法生成action
    ...mapActions({ add: "jia", addJi: "jiajishu" }),
    addWait() {
      setTimeout(() => {}, 500);
    },
  },
  computed: {
    // 可以简写为
    ...mapState({ he: "mun", xuexiao: "school", subject: "subject" }),
    // 如果key和value一样，还可以简写，需要注意用的时候要保持一致
    // ...mapState(["mun", "school", "subject"]),
    // 避免使用以下方式
    // jia() {
    //   return this.$store.state.mun;
    // },
    // school() {
    //   return this.$store.state.school;
    // },
    // subject() {
    //   return this.$store.state.subject;
    // },

    // bigSum() {
    //   return this.$store.getters.bigSum();
    // },
    // 上面的简写
    ...mapGetters(["bigSum"]),
  },
};
</script>

<style scoped>
button {
  margin-left: 10px;
}
</style>
