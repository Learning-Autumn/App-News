import Vue from 'vue'
import App from './App.vue'
import TheHeader from './TheHeader.vue'
import './theme.css'



Vue.config.productionTip = false

Vue.component('the-header', TheHeader)

new Vue({
  render: h => h(App),
}).$mount('#app')
