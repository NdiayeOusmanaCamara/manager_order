<template>
  <div class="container mt-5">
    <h2>List of Orders</h2>
    <div class="d-flex justify-content-end">
      <button @click="naviguerOrderAdd" class="btn btn-primary mb-3">Add New Order</button>
    </div>

    <table class="table table-striped">
      <thead>
        <tr>
          <th>Date</th>
          <th>Customer</th>
          <th>Delivery Address</th>
          <th>Track Number</th>
          <th>Status</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(order, index) in orders" :key="index">
          <td>{{ order.date }}</td>
          <td>{{ order.customer }}</td>
          <td>{{ order.delivery_address }}</td>
          <td>{{ order.track_number }}</td>
          <td>{{ order.status }}</td>
          <td>
            <i @click="voirDetails(index)" class="fas fa-eye text-info" style="cursor: pointer; margin-right: 8px;"></i>
            <i @click="editOrder(index)" class="fas fa-edit text-warning" style="cursor: pointer; margin-right: 8px;"></i>
            <i @click="deleteOrder(index)" class="fas fa-trash text-danger" style="cursor: pointer;"></i>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';


const orders = ref([
  {
    date: "25/07/2024",
    customer: "John Doe",
    delivery_address: "123 Main St, New York, NY",
    track_number: "TN001",
    status: "Shipped"
  },
  {
    date: "26/07/2024",
    customer: "Jane Smith",
    delivery_address: "456 Oak St, Los Angeles, CA",
    track_number: "TN002",
    status: "Delivered"
  },
  {
    date: "27/07/2024",
    customer: "Alice Martin",
    delivery_address: "789 Pine St, Chicago, IL",
    track_number: "TN003",
    status: "Processing"
  }
]);

const router = useRouter();


// const chargerOrders = () => {
//   const data = localStorage.getItem('orders');
//   orders.value = data ? JSON.parse(data) : orders.value;
// };


const deleteOrder = (index) => {
  if (orders.value.length <= 1) {
    alert("You cannot delete the last remaining order.");
    return;
  }

  const confirmation = confirm('Are you sure you want to delete this order?');
  if (confirmation) {
    orders.value.splice(index, 1);
    localStorage.setItem('orders', JSON.stringify(orders.value));
  }
};


const naviguerOrderAdd = () => {
  router.push('/orders/create');
};


const editOrder = (index) => {
  router.push({ path: `/EditOrder/${index}` });
};


const voirDetails = (index) => {
  router.push({ path: `/OrderDetail/${index}` });
};


// onMounted(chargerOrders);
</script>

<style scoped>

</style>
