// 自定义插件
export default {
  install(vue) {
    console.log("插件被使用了", vue);

    // 给vue原型上添加一个hello的方法
    Vue.prototype.hello = function () {
        alert('你好啊')
    }
  },
};
