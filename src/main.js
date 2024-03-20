import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'

import FontAwesomeIcon from './fontAwesome'
import vuetify from './vuetify'

const app = createApp(App)

app.component('FontAwesomeIcon', FontAwesomeIcon)

app.use(vuetify)

app.use(createPinia())

app.mount('#app')
