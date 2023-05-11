export const personOptions = {
  namespaced: true, // 默认false，修改为TRUE之后可以在mapState中解构数据，直接使用，避免了a.mun等等写法
  actions: {
    addPersonWang(context, value) {
      if (value.name.indexOf("王") === 0) {
        context.commit("ADD_PERSON", value);
      } else {
        alert("不姓王，无法添加");
      }
    },
  },
  mutations: {
    ADD_PERSON(state, value) {
      console.log(value);
      state.personList.unshift(value);
    },
  },
  state: { personList: [{ pid: "lisi", name: "李四" }] },
  getters: {
    firstPersonName(state, value) {
      return state.personList[0].name;
    },
  },
};
