// import { createApp } from 'vue'
import Vue from 'vue'
import App from './App'


// createApp(App).mount('#app')
new Vue ({
  render: h => h(App)
}).$mount('#app')