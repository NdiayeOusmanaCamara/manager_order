<template>
  <div class="container mt-5">
    <h2>Edit Order</h2>
    <form @submit.prevent="updateOrder">
      <div class="d-flex justify-content-end gap-3">
        <button @click="cancelEdit" type="button" class="btn btn-secondary mt-2">Orders List</button>
        <button type="submit" class="btn btn-success mt-2">Update Order</button>
      </div>
      <div class="row mb-3">
        <div class="col-md-6">
          <label for="date" class="form-label">Date</label>
          <input type="date" v-model="order.date" class="form-control" id="date">
        </div>
        <div class="col-md-6">
          <label for="address" class="form-label">Delivery Address</label>
          <input type="text" v-model="order.delivery_address" class="form-control" id="address">
        </div>
      </div>

      <div class="row mb-3">
        <div class="col-md-6">
          <label for="customerName" class="form-label">Customer Name</label>
          <input type="text" v-model="order.customer" class="form-control" id="customerName">
        </div>
        <div class="col-md-6">
          <label for="trackNumber" class="form-label">Track Number</label>
          <input type="text" v-model="order.track_number" class="form-control" id="trackNumber">
        </div>
      </div>

      <div class="row mb-3">
        <div class="col-md-6">
          <label for="orderStatus" class="form-label">Order Status</label>
          <select v-model="order.status" class="form-select" id="orderStatus">
            <option value="processing">Processing</option>
            <option value="shipped">Shipped</option>
            <option value="delivered">Delivered</option>
            <option value="cancelled">Cancelled</option>
          </select>
        </div>
      </div>

    
    </form>

    <h3 class="mt-4">Order Details</h3>
    <table class="table table-bordered mt-3">
      <thead>
        <tr>
          <th>Product</th>
          <th>Quantity</th>
          <th>Price</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(detail, index) in order.details" :key="index">
          <td>
            <select v-model="detail.product" class="form-select">
              <option value="1">Product 1</option>
              <option value="2">Product 2</option>
            </select>
          </td>
          <td><input type="number" v-model="detail.quantity" class="form-control" min="1"></td>
          <td><input type="number" v-model="detail.price" class="form-control" min="0"></td>
          <td>
            <button type="button" @click="removeDetail(index)" class="btn btn-danger">Remove</button>
          </td>
        </tr>
      </tbody>
    </table>
    <button type="button" @click="addDetail" class="btn btn-success">Add New Detail</button>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const order = ref({
  date: '',
  customer: '',
  delivery_address: '',
  track_number: '',
  status: '',
  details: []
});

const orderId = ref(null);

// Load order data from localStorage when component is mounted
const loadOrder = () => {
  const orders = JSON.parse(localStorage.getItem('orders')) || [];
  const foundOrder = orders[orderId.value];
  if (foundOrder) {
    order.value = foundOrder;  // Load the found order into the order object
  }
};

// Add a new detail row to the order details
const addDetail = () => {
  order.value.details.push({ product: '', quantity: 1, price: 0 });
};

// Remove a detail from the order details list
const removeDetail = (index) => {
  order.value.details.splice(index, 1);
};

// Update the order in localStorage and navigate to the Orders list
const updateOrder = () => {
  const orders = JSON.parse(localStorage.getItem('orders')) || [];
  orders[orderId.value] = order.value;  // Update the specific order
  localStorage.setItem('orders', JSON.stringify(orders));
  router.push('/Orders');  // Redirect to orders list
};

// Cancel editing and return to the orders list page
const cancelEdit = () => {
  router.push('/Orders');
};

// Load the order data when the component is mounted
onMounted(() => {
  orderId.value = parseInt(router.currentRoute.value.params.id);  // Get the order ID from route params
  loadOrder();
});
</script>

<style scoped>
/* Add any custom styles here if needed */
</style>
