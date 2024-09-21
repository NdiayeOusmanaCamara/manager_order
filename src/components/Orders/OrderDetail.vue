<template>
  <div class="container mt-5">
    <h2>Order Details</h2>
    <div v-if="order">
      <div class="mb-3">
        <strong>Date:</strong> {{ order.date }}
      </div>
      <div class="mb-3">
        <strong>Customer:</strong> {{ order.customer }}
      </div>
      <div class="mb-3">
        <strong>Delivery Address:</strong> {{ order.delivery_address }}
      </div>
      <div class="mb-3">
        <strong>Track Number:</strong> {{ order.track_number }}
      </div>
      <div class="mb-3">
        <strong>Status:</strong> {{ order.status }}
      </div>
      
      
      <table class="table table-bordered">
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
      <button @click="backToOrders" class="btn btn-secondary mt-3">Back to Orders</button>
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
