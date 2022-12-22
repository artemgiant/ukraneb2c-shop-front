import { createRouter, createWebHistory } from "vue-router";

import Index from "@/pages/Index.vue";

const routes = [
  {
    component: Index,
    path: "/",
    name: "index"
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
