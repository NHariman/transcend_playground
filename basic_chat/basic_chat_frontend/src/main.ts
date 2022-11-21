import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

createApp(App).use(router).mount('#app') // this enables routing in the app.
// routes can be found in src/router/index.ts
// the main body of the website can be found in App.vue
