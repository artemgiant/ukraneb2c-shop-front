import { createApp } from "vue";
import App from "./App.vue";
import router from "@/lib/router";
import "@/style/normalize.css";

import "@/style/global.scss";

import "@/style/lib/bootstrap.min.css";
import "@/style/lib/nouislider.min.css";
import "@/style/lib/slick.css";
import "@/style/lib/slick-theme.css";
import "@/style/lib/font-awesome.min.css";
import "@/style/style.css";


const app = createApp(App).use(router);

// Config
app.config.productionTip = false;
app.config.globalProperties.$backendUrl = import.meta.env.VITE_APP_BACKEND_URL;
app.config.globalProperties.$appName = import.meta.env.VITE_APP_NAME;

console.log(app)
app.mount("#app");


