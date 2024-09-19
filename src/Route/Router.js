
import { createRouter, createWebHistory } from 'vue-router';
import ListCustomer from "@/components/Customer/ListCustomers.vue";
import AddCustomer from "@/components/Customer/AddCustomer.vue";
import EditCustomer from "@/components/Customer/EditCustomer.vue";
import CustomerDetail from "@/components/Customer/CustomerDetail.vue";
import ListOrders from "@/components/Orders/ListOrders.vue";
import AddOrder from "@/components/Orders/AddOrder.vue";
import EditOrder from "@/components/Orders/EditOrder.vue";
import OrderDetail from "@/components/Orders/OrderDetail.vue";
import ListProduct from "@/components/Products/ListProduct.vue";
import AddProduct from "@/components/Products/ProductAdd.vue";
import EditProduct from "@/components/Products/EditProduct.vue";
import ProductDetail from "@/components/Products/ProductDetail.vue";
export const routes = [
  {
    path: '/',
    component: ListCustomer
  },
  {
    path: '/AddCustomer',
    component: AddCustomer
  },
  {
    path: '/EditCustomer/:id',
    component: EditCustomer
  },
  {
    path: '/CustomerDetail/:id',
    component: CustomerDetail
  },
  { 
    path: "/Orders", 
    component: ListOrders 
  },
  { 
    path: "/AddOrder", 
    component: AddOrder 
  },
  { 
    path: "/EditOrder/:id", 
    component: EditOrder 
  },
  {
    path: '/OrderDetail/:id',
    component: OrderDetail
  },
  { 
    path: "/Products", 
    component: ListProduct 
  },
  {
    path: '/AddProduct',
    component: AddProduct
  },
  {
    path: '/EditProduct/:id',
    component: EditProduct
  },
  {
    path: '/ProductDetail/:id',
    component: ProductDetail
  },
];


const router = createRouter({
  history: createWebHistory(),
  routes,
});

