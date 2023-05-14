import VueRouter from "vue-router";
import About from "@/components/About.vue";
import Home from "@/page/Home.vue";
import Message from "@/page/Message.vue";
import News from "@/page/News.vue";
import Detail from "@/page/Detail.vue";

const router = new VueRouter({
  routes: [
    { path: "/about", component: About, meta: { isAuth: true, title: "关于" } }, // mate自定义数据用于权限校验，给全局路由守卫使用
    {
      path: "/home",
      component: Home,
      meta: { isAuth: true },
      children: [
        // 子路由不需要加斜杠
        {
          path: "message",
          component: Message,
          children: [
            {
              path: "detail/:id/:name",
              component: Detail,
              name: "xxxxx",
              // props的第一种写法，值为对象，该对象中所有的key-value都以props的形式传递给Detail
              // props: {
              //   a: 1,
              //   b: "hellow",
              // },
              // props的第二种写法，值为布尔值，如果布尔值为真，就会把该路由组件收到的所有的params参
              // 数，以props的形式传递给detail组件
              // props: true,
              // 第三种方式值为函数
              props: function () {
                return {
                  id: 666,
                  name: "张三三",
                };
              },
            },
          ],
        },
        {
          path: "news",
          component: News,
          meta: { isAuth: true, title: "新闻" },
        },
      ],
    },
  ],
});

// 全局路由守卫--路由切换的之前回调；初始化之前会调用
router.beforeEach((to, from, next) => {
  console.log("前置路由守卫");
  //在这里可以做逻辑判断，if(xxx){next()}满足条件（已经登录，有权限的人）才执行路由跳转
  // if (to.name === "zhangsan" || from.path === "/a/b") {
  //   next();
  // }

  // 这样判断如果判断条件非常大达到几十条，判断就不太好判断，需要用到自定义mate
  console.log(to.meta);
  if (to.meta.isAuth) {
    next();
  } else {
    alert("没有权限");
  }
});

// 全局路由守卫--路由切换的之后回调；初始化完成时候会调用
router.afterEach((to, from) => {
  console.log("后置路由守卫");
  document.title = to.meta.title || 'learn vue';
});

export default router;
