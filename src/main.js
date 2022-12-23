import { createApp } from "vue";
import { createPinia } from "pinia";
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

const app = createApp(App)
    .use(router)
    .use(createPinia())
;

// Config
app.config.productionTip = true;
app.config.globalProperties.$backendUrl = import.meta.env.VITE_APP_BACKEND_URL;
app.config.globalProperties.$storageUrl= import.meta.env.VITE_APP_STORAGE_URL;
app.config.globalProperties.$appName = import.meta.env.VITE_APP_NAME;

app.mount("#app");


