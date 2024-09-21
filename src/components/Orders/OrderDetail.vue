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
      <div v-for="(detail, index) in order.details" :key="index">
        <div class="mb-3">
          <strong>Product:</strong> {{ detail.product }}
        </div> 
        <div class="mb-3">
          <strong>Quantity:</strong> {{ detail.quantity}}
        </div> 
        <div class="mb-3">
          <strong>Price:</strong> {{ detail.price }}
        </div> 
      </div>
      
      <button @click="backToOrders" class="btn btn-secondary mt-3">Orders List</button>
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
