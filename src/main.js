import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import {useToast} from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-default.css';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import bootstrap from 'bootstrap/dist/js/bootstrap.bundle'
import './assets/main.css'

const app = createApp(App)

app.use(router)
app.use(bootstrap)

app.mount('#app')
