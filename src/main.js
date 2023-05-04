import Vue from "vue";
import App from "./App.vue";
import plugin from "./plugin";

Vue.config.productionTip = false;

// 使用插件：后面可以跟上一系列的参数，在对应的函数处可以使用
Vue.use(plugin);

new Vue({
  render: (h) => h(App),
}).$mount("#app");
