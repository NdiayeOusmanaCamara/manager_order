import { createRouter, createWebHistory } from 'vue-router';
import ListCustomers from '@customer/ListCustomers.vue';
import CustomerAdd from "@customer/AddCustomer.vue";
import EditCustomer from "@customer/EditCustomer.vue";
import CustomerDetail from "@customer/CustomerDetail.vue";
import ListOrders from "@/components/Orders/ListOrders.vue";
import EditOrder from "@/components/Orders/EditOrder.vue";
import AddOrder from "@/components/Orders/AddOrder.vue";
import OrderDetail from "@/components/Orders/OrderDetail.vue";
import ListProduct from "@/components/Products/ListProduct.vue";
import EditProduct from "@/components/Products/EditProduct.vue";
import AddProduct from "@/components/Products/ProductAdd.vue";
import ProductDetail from "@/components/Products/ProductDetail.vue";

export const routes = [
  {
    path: '/',
    component: ListCustomers
  },
  {
    path: '/AddCustomer',
    component: CustomerAdd
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
    path: "/orders", 
    component: ListOrders 
  },
  { 
    path: "/orders/create", 
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
    path: "/products", 
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


