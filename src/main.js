import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import './assets/main.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import bootstrap from 'bootstrap/dist/js/bootstrap.bundle'

const app = createApp(App)

app.use(router)
    .use(bootstrap)

app.mount('#app')
