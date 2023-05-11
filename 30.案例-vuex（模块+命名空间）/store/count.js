export const countOptions = {
  namespaced: true, // 默认false，修改为TRUE之后可以在mapState中解构数据，直接使用，避免了a.mun等等写法
  actions: {
    jia(context, value) {
      console.log("actions-jia", context, value);
      context.commit("JIA", value);
    },
    jian(context, value) {
      console.log("actions-jian", context, value);
      context.commit("JIAN", value);
    },
    jiajishu(context, value) {
      // 注意这块，逻辑判断需要写在action里面，mutations是具体的执行
      if (context.state.mun % 2) {
        context.commit("JIAJISHU", value);
      }
    },
  },
  mutations: {
    JIA(state, value) {
      console.log("mutations-jia", state, value);
      state.mun += value;
    },
    JIAN(state, value) {
      console.log("mutations-jian", state, value);
      state.mun -= value;
    },
    JIAJISHU(state, value) {
      state.mun += value;
    },
  },
  state: {
    mun: 0,
    school: "光明小学",
    subject: "数学",
  },
  getters: {
    bigSum(state) {
      return state.mun * 10;
    },
  },
};
