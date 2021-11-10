import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/assets/style.css'


import appHeader from '@/components/Shared/appHeader'
import appBookmarkList from "@/components/Shared/appBookmarkList";
import {appAxios} from './utils/appAxios'


const app = createApp(App)
app.component("AppHeader", appHeader);
app.component("AppBookmarkList", appBookmarkList);
app.use(store);
app.use(router);
app.config.globalProperties.$appAxios = appAxios;
app.mount('#app');
