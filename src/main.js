import { createApp } from 'vue';
import App from './App.vue';
import * as VueRouter from 'vue-router'
import EventListView from './views/EventListView.vue'
import AboutView from './views/AboutView.vue'
import COView from './views/COView.vue'


const events = [
    {
      id: 5928101,
      category: 'animal walfare',
      title: 'Cat Adoption Day',
      description: 'Find your new feline friend at this event',
      location: 'Meow town',
      date: 'Januanry 28, 2022',
      time: '12:00',
      petsAllowed: true,
      organizer: 'Kat Laydee'
    }
  ]

const routes = [
    {path: '/', name: 'EventList', component: EventListView, props: {events}},
    {path: '/about', name: 'About', component: AboutView},
    {path:'/co', name: 'Category and Organizer', component: COView, props: {events}}
]

const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes
})

createApp(App).use(router).mount('#app');
