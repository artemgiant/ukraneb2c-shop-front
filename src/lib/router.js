import { createRouter, createWebHistory } from "vue-router";

import Index from "@/pages/Index.vue";
import Example from "@/pages/Example.vue";
import Store from "@/pages/Store/StorePage.vue"
const routes = [
  {
    component: Index,
    path: "/",
    name: "index"
  },
  {
    component: Example,
    path: "/example",
    name: "example"
  },
  {
    component: Store,
    path: '/store',
    name: 'Store'
  }

];

const router = createRouter({
  history: createWebHistory(),
  routes
});

router.afterEach((to) => {
  const baseTitle = "Vue + TypeScript + Vite";

  if (to.name === "index") {
    document.title = baseTitle;
  } else {
    document.title = `${to.meta.title} | ${baseTitle}`;
  }
});

export default router;
