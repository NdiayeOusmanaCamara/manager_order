<template>
  <div class="container mt-5">
    <h2>Edit Order</h2>
    <form @submit.prevent="updateOrder">
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

      <div class="d-flex justify-content-end">
        <button type="submit" class="btn btn-success">Update Order</button>
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

const loadOrder = () => {
  const orders = JSON.parse(localStorage.getItem('orders')) || [];
  const foundOrder = orders[orderId.value];
  if (foundOrder) {
    order.value = foundOrder;
  }
};

const addDetail = () => {
  order.value.details.push({ product: '', quantity: 1, price: 0 });
};

const removeDetail = (index) => {
  order.value.details.splice(index, 1);
};

const updateOrder = () => {
  const orders = JSON.parse(localStorage.getItem('orders')) || [];
  orders[orderId.value] = order.value; // Update the order with the new values
  localStorage.setItem('orders', JSON.stringify(orders));
  router.push('/Orders'); // Redirect to the list of orders
};

onMounted(() => {
  orderId.value = parseInt(router.currentRoute.value.params.id);
  loadOrder();
});
</script>

<style scoped>
</style>
