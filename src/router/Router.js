import { createRouter, createWebHistory } from 'vue-router'
import CustomerAdd from "@/components/Customer/AddCustomer.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/Customer',
      component: ListCustomer
    },
    {
      path: '/AddCustomer',
      component: CustomerAdd
    },    
  ]
})

export default router
