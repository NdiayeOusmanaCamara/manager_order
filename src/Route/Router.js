import { createRouter, createWebHistory } from 'vue-router';
import ListCustomer from "@/components/Customer/ListCustomers.vue";
import CustomerAdd from "@/components/Customer/AddCustomer.vue";
import EditCustomer from "@/components/Customer/EditCustomer.vue";
import CustomerDetail from "@/components/Customer/CustomerDetail.vue";
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
    path: '/Customer',
    component: ListCustomer
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


