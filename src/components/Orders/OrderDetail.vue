<template>
  <div class="container mt-5">
    <div class="d-flex justify-content-between">
    <h2>Order Details</h2>
    <button @click="backToOrders" class="btn btn-secondary mt-3">Orders List</button>
  </div>
    <div v-if="order">
      <table class="table table-bordered mt-4">
        <thead>
          <tr>
            <th>Date</th>
            <th>Customer</th>
            <th>Delivery Address</th>
            <th>Track Number</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{{ order.date }}</td>
            <td>{{ order.customer }}</td>
            <td>{{ order.delivery_address }}</td>
            <td>{{ order.track_number }}</td>
            <td>{{ order.status }}</td>
          </tr>
        </tbody>
      </table>


      <table class="table table-bordered mt-4">
        <thead>
          <tr>
            <th>Product</th>
            <th>Quantity</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(detail, index) in order.details" :key="index">
            <td>{{ detail.product }}</td>
            <td>{{ detail.quantity }}</td>
            <td>{{ detail.price }}</td>
          </tr>
        </tbody>
      </table>

    </div>

    
    <div v-else>
      <p>Order not found.</p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const order = ref(null); 
const router = useRouter(); 
const route = useRoute(); 
const loadOrder = () => {
  const index = route.params.id; 
  const orders = JSON.parse(localStorage.getItem('orders')) || []; 
  order.value = orders[index] || null;
};


const backToOrders = () => {
  router.push('/Orders');
};

onMounted(loadOrder); 
</script>

<style scoped>
</style>
