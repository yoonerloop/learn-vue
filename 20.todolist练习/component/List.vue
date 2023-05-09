<template>
  <div>
    <Header :receive="receive" />
    <hr />
    <ul v-if="list.length > 0">
      <li v-for="(item, index) in list">
        <Item :key="item.id" :index="index" :item="item" :remove="remove" />
      </li>
    </ul>
    <h2 v-else>暂无数据</h2>
    <Footer
      :currentCount="currentCount"
      :total="total"
      :checkedAll="checkedAll"
    />
  </div>
</template>

<script>
import Header from "@/component/Header.vue";
import Footer from "@/component/Footer.vue";
import Item from "@/component/Item.vue";

export default {
  name: "ToDoList",
  components: { Item, Footer, Header },
  data() {
    return {
      list: [],
    };
  },
  methods: {
    receive(data) {
      this.list.unshift(data);
    },
    remove(e, index) {
      this.list.splice(index, 1);
    },
    checkedAll(e) {
      this.list.forEach((item) => {
        item.done = e.target.checked;
      });
    },
  },
  computed: {
    total() {
      return this.list.length;
    },
    currentCount() {
      return this.list.reduce((pre, item) => {
        return pre + (item.done ? 1 : 0);
      }, 0);
    },
  },
};
</script>

<style scoped>
li,
ul {
  list-style: none;
  padding: 0;
  margin: 0;
  width: 600px;
}
</style>
