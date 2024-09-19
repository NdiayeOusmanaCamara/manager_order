<template>
    <div class="container mt-5">
      <h2>List of Orders</h2>
      <div class="d-flex justify-content-end">
        <button @click="naviguerOrderAdd" class="btn btn-primary mb-3">
          Add New Order
        </button>
    
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
              <i @click="voirDetails(order)" class="fas fa-eye text-info" style="cursor: pointer; margin-right: 8px;"></i>
              <i @click="ouvrirModal(order, index)" class="fas fa-edit text-warning" style="cursor: pointer; margin-right: 8px;"></i>
              <i @click="deleteOrder(index)" class="fas fa-trash text-danger" style="cursor: pointer;"></i>
            </td>
          </tr>
        </tbody>
      </table>
      <OrderDetail v-if="modalOpen" :order="orderSelectionne" @close="modalOpen = false" />
  
      <EditOrderModal v-if="editModalOpen" :order="orderSelectionne" @save="editOrder" @close="editModalOpen = false" />
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import { useRouter } from 'vue-router';
  import OrderDetail from '@/components/Orders/OrderDetail.vue';
  import EditOrderModal from '@/components/Orders/EditOrder.vue';
  
  const orders = ref([]);
  const orderSelectionne = ref(null); 
  const modalOpen = ref(false); 
  const editModalOpen = ref(false); 
  const orderEditIndex = ref(null);
  const router = useRouter();
  
  const chargerOrders = () => {
    const data = localStorage.getItem('orders');
    if (data) orders.value = JSON.parse(data);
  };
  
  const voirDetails = (order) => {
    orderSelectionne.value = order;
    modalOpen.value = true;
  };
  
  const ouvrirModal = (order, index) => {
    orderSelectionne.value = { ...order }; 
    orderEditIndex.value = index;
    editModalOpen.value = true;
  };
  
  const editOrder = (orderModifie) => {
    orders.value[orderEditIndex.value] = orderModifie;
    localStorage.setItem('orders', JSON.stringify(orders.value));
    editModalOpen.value = false; 
  };
  
  
  const deleteOrder = (index) => {
    orders.value.splice(index, 1);
    localStorage.setItem('orders', JSON.stringify(orders.value));
    orderSelectionne.value = null;
  };
  
  const naviguerOrderAdd = () => {
    router.push('/AddOrder');
  };
  
  onMounted(chargerOrders);
  </script>
  