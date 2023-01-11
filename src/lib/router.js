import { createRouter, createWebHistory } from "vue-router";

import Index from "@/pages/Index.vue";
import Example from "@/pages/Example.vue";
import Store from "@/pages/Store/StorePage.vue"
import Basket from "@/pages/Basket/BasketPage.vue"
import Product from "@/pages/Product/ProductPage.vue"
import DeliveryInfo from "@/pages/Info/Delivery/DeliveryInfo.vue"

const routes = [
  {
    component: Store,
    path: "/",
    name: "index"
  },
  {
    component: DeliveryInfo,
    path: "/info/delivery",
    name: "delivery-info"
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
  },
  {
    component: Basket,
    path: '/basket',

  },
  {
    component: Product,
    path: '/product/:id',
    name: 'Product'
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
