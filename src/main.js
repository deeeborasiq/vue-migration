import { createApp } from 'vue'
import App from './App.vue'
import router from './router' 
import "@picocss/pico/css/pico.min.css";

const formatDate = (value) => {
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
};
const app = createApp(App);
app.use(router);
app.config.globalProperties.$filters = {
  formatDate,
};
app.mount('#app');
