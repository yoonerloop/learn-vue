// 引入vue
import Vue from "vue";
import App from "./App.vue";
// 引入插件
import vueResource from "vue-resource";

// 引入store
import store from "@/store";

Vue.use(vueResource);


Vue.config.productionTip = false;

const vm = new Vue({
  render: (h) => h(App),
  store: store,
}).$mount("#app");

console.log("vm", vm);
