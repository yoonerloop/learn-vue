import VueRouter from "vue-router";
import About from "@/components/About.vue";
import Home from "@/page/Home.vue";
import Message from "@/page/Message.vue";
import News from "@/page/News.vue";
import Detail from "@/page/Detail.vue";

const router = new VueRouter({
  routes: [
    { path: "/about", component: About, meta: { isAuth: false } }, // mate自定义数据用于权限校验，给全局路由守卫使用
    {
      path: "/home",
      component: Home,
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
        },
      ],
    },
  ],
});

export default router;
