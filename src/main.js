import Vue from 'vue'
import App from './App.vue'
import router from './router' 
import "@picocss/pico/css/pico.min.css";

Vue.config.productionTip = false

Vue.filter('formatDate', function (value) {
  const options = {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  };
  if (value) {
    const date = new Date(value);
    return new Intl.DateTimeFormat('pt-BR', options).format(date);
  }
  return '';
});

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
