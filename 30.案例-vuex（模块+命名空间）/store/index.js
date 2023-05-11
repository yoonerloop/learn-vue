import Vuex from "vuex";
import Vue from "vue";
import { countOptions } from "@/store/count";
import { personOptions } from "@/store/person";

Vue.use(Vuex);

// 创建store
const store = new Vuex.Store({
  modules: {
    a: countOptions,
    b: personOptions,
  },
});

export default store;
