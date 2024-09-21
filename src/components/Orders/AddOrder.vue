<template>
  <div class="container mt-5">
    <h2>Add New Order</h2>
    <form @submit.prevent="OrderAdd" class="mb-4">
      <div class="d-flex justify-content-end gap-3">
        <button @click="annuler" type="button" class="btn btn-secondary mt-2">Orders List</button>
        <button type="submit" class="btn btn-success mt-2">Submit</button>
      </div>

      <div class="row mb-3">
        <div class="col-md-6">
          <label for="date" class="form-label">Date</label>
          <input type="date" v-model="newOrder.date" class="form-control" id="date" placeholder="jj/mm/aaaa">
        </div>
        <div class="col-md-6">
          <label for="address" class="form-label">Delivery Address</label>
          <input type="text" v-model="newOrder.delivery_address" class="form-control" id="address" placeholder="Enter delivery address">
        </div>
      </div>

      <div class="row mb-3">
        <div class="col-md-6">
          <label for="customerName" class="form-label">Customer Name</label>
          <input type="text" v-model="newOrder.customer" class="form-control" id="customerName" placeholder="Enter customer name">
        </div>
        <div class="col-md-6">
          <label for="trackNumber" class="form-label">Track Number</label>
          <input type="text" v-model="newOrder.track_number" class="form-control" id="trackNumber" placeholder="Enter track number">
        </div>
      </div>

      <div class="row mb-3">
        <div class="col-md-6">
          <label for="orderStatus" class="form-label">Order Status</label>
          <select v-model="newOrder.status" class="form-select" id="orderStatus">
            <option value="processing">Processing</option>
            <option value="shipped">Shipped</option>
            <option value="delivered">Delivered</option>
            <option value="cancelled">Cancelled</option>
          </select>
        </div>
      </div>
    </form>

    <div class="container mt-5">
      <h3>Order Details</h3>
      <form>
        <table class="table table-bordered">
          <thead>
            <tr>
              <th>Product</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(detail, index) in orderDetails" :key="index">
              <td>
                <select v-model="detail.product" class="form-select">
                  <option value="" disabled>Select Product</option>
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
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const newOrder = ref({
  date: '',
  customer: '',
  delivery_address: '',
  track_number: '',
  status: ''
});

const orderDetails = ref([
  { product: '', quantity: 1, price: 0 }
]);

const addDetail = () => {
  orderDetails.value.push({ product: '', quantity: 1, price: 0 });
};

const removeDetail = (index) => {
  if (orderDetails.value.length <= 1) {
    alert("At least one order detail is required.");
    return;
  }
  orderDetails.value.splice(index, 1);
};


const OrderAdd = () => {
  if (!newOrder.value.date || !newOrder.value.customer || !newOrder.value.delivery_address || !newOrder.value.track_number || !newOrder.value.status) {
    alert('Please fill in all fields');
    return;
  }

  const orders = JSON.parse(localStorage.getItem('orders')) || [];
  orders.push({
    ...newOrder.value,
    details: orderDetails.value 
  });
  localStorage.setItem('orders', JSON.stringify(orders));
  
  // Reset the form
  newOrder.value = { date: '', customer: '', delivery_address: '', track_number: '', status: '' };
  orderDetails.value = [{ product: '', quantity: 1, price: 0 }];
  
  // Redirect to the orders list page
  router.push('/Orders');
};

</script>

<style scoped>
</style>
