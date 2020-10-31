import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import * as VueGoogleMaps from 'vue2-google-maps'

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyCT-JOXW4wZDGE8rmbyeFJ3fNgozHqpzlQ',
    libraries: 'places',
  },
})

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
