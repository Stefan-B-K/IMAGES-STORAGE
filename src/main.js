
import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App'
import store from './store'           // reads by default the index.js
import AuthHandler from './components/AuthHandler'
import ImageList from './components/ImageList'
import UploadForm from './components/UploadForm'

export const router = createRouter ({
  history: createWebHistory(),
  routes: [
    { path: '/oauth2/callback', component: AuthHandler },
    { path: '/', component: ImageList},
    { path: '/upload', component: UploadForm}
  ]
})

createApp(App)
  .use(router)
  .use(store)
  .mount('#app')
