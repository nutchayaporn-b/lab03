import { createApp } from 'vue';
import App from './App.vue';
import * as VueRouter from 'vue-router'
import EventListView from './views/EventListView.vue'
import AboutView from './views/AboutView.vue'
import COView from './views/COView.vue'
import StudentView from './views/StudentView.vue'
import { getEvent } from './services/eventServices';
import { getStudents } from './services/studentServices';

async function main(){

  const events = await getEvent()
  const students = await getStudents()
  
  const routes = [
      {path:'/', name: 'EventList', component: EventListView, props: {events}},
      {path:'/about', name: 'About', component: AboutView},
      {path:'/co', name: 'Category and Organizer', component: COView, props: {events}},
      {path:'/student', name: 'Student', component: StudentView, props:{students}}
  ]
  
  const router = VueRouter.createRouter({
      history: VueRouter.createWebHashHistory(),
      routes
  })
  
  createApp(App).use(router).mount('#app');
}
main()
