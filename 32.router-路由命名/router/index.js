import VueRouter from "vue-router";
import About from "@/components/About.vue";
import Home from "@/page/Home.vue";
import Message from "@/page/Message.vue";
import News from "@/page/News.vue";
import Detail from "@/page/Detail.vue";

const router = new VueRouter({
  routes: [
    { path: "/about", component: About, name: "about-name" },
    {
      path: "/home",
      component: Home,
      children: [
        // 子路由不需要加斜杠
        {
          path: "message",
          component: Message,
          children: [
            { path: "detail", component: Detail, name: "ddeettaaiill" },
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
