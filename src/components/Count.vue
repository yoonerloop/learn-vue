<template>
  <div>
    <h2>当前的求和为：{{ mun }}</h2>
    <select v-model.number="n">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="add">+</button>
    <button @click="reduce">-</button>
    <button @click="addJi">当前求和为奇数再加</button>
    <button @click="addWait">等一等再加</button>
  </div>
</template>

<script>
export default {
  name: "Count",
  data() {
    return {
      mun: 0,
      n: 1,
    };
  },
  methods: {
    add() {
      this.mun += this.n;
    },
    reduce() {
      this.mun -= this.n;
    },
    addJi() {
      if (this.mun % 2) {
        this.mun += this.n;
      }
    },
    addWait() {
      setTimeout(() => {
        this.mun += this.n;
      }, 500);
    },
  },
};
</script>

<style scoped>
button {
  margin-left: 10px;
}
</style>
