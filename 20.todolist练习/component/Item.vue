<template>
  <div
    @click="item.done = !item.done"
    @mouseleave="showBtn = false"
    @mouseover="showBtn = true"
  >
    <input :checked="item.done" type="checkbox" />{{ item.value }}
    <button v-show="showBtn" @click.stop="remove($event, index)">删除</button>
  </div>
</template>

<script>
export default {
  name: "Item",
  props: ["item", "index", "remove"],
  data() {
    return {
      showBtn: false,
    };
  }
};
</script>

<style scoped>
div {
  padding: 10px 0;
}

div:hover {
  background-color: #cccccc;
}

button {
  float: right;
  margin-right: 20px;
}
</style>
