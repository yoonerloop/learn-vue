import Vuex from "vuex";
import Vue from "vue";

Vue.use(Vuex);

// action用于响应组件的动作：相当于服务员，发布命令
const actions = {
  jia(context, value) {
    console.log("actions-jia", context, value);
    context.commit("JIA", value);
  },
  //  由于这里透传没实际的逻辑，所以可以省略，在组件中直接commit
  // jian(context, value) {
  //   console.log("actions-jian", context, value);
  //   context.commit("JIAN", value);
  // },
  jiajishu(context, value) {
    // 注意这块，逻辑判断需要写在action里面，mutations是具体的执行
    if (context.state.mun % 2) {
      context.commit("JIAJISHU", value);
    }
  },
};
// 用于操作数据：相当于后厨，加工数据
const mutations = {
  JIA(state, value) {
    console.log("mutations-jia", state, value);
    state.mun += value;
  },
  JIAN(context, value) {
    console.log("mutations-jian", context, value);
    state.mun -= value;
  },
  JIAJISHU(context, value) {
    context.mun += value;
  },
};
// 用于存储数据
const state = { mun: 0, school: "光明小学", subject: "数学" };

//  可选：用于将state中的数据进行加工
const getters = {
  bigSum(state) {
    return state.mun * 10;
  },
};

// 创建store
const store = new Vuex.Store({
  actions,
  mutations,
  state,
  getters,
});

export default store;
