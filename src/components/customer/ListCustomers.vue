<template>
  <div class="container mt-5">
    <h2>List of Customers</h2>
    <div class="d-flex justify-content-end">
      <button type="button" class="btn btn-primary mb-3" @click="showAddModal = true">
        Add New Customer
      </button>
    </div>
    <table class="table table-striped">
      <thead>
        <tr>
          <th>Name</th>
          <th>Address</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(customer) in customers" :key="customer.id">
          <td>{{ customer.name }}</td>
          <td>{{ customer.address }}</td>
          <td>{{ customer.email }}</td>
          <td>{{ customer.phone }}</td>
          <td>
            <i @click="openDetailModal(customer)" class="fas fa-eye text-info" style="cursor: pointer; margin-right: 8px;"></i>
            <i @click="openEditModal(customer)" class="fas fa-edit text-warning" style="cursor: pointer; margin-right: 8px;"></i>
            <i @click="deleteCustomer(customer.id)" class="fas fa-trash text-danger" style="cursor: pointer;"></i>
          </td>
        </tr>
      </tbody>
    </table>

    <!-- Modals -->
    <CustomerModal v-if="showAddModal" @close="showAddModal = false" @add="addCustomer" />
    
    <EditCustomerModal 
      v-if="showEditModal" 
      :customer="selectedCustomer" 
      @close="closeEditModal" 
      @edit="editCustomer" 
    />
    
    <!-- Customer Detail Modal -->
    <CustomerDetail 
      v-if="showDetailModal" 
      :customer="selectedCustomer" 
      @close="closeDetailModal" 
    />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import CustomerModal from "@customer/AddCustomer.vue";
import EditCustomerModal from "@customer/EditCustomer.vue";
import CustomerDetail from "@customer/CustomerDetail.vue";

// State management
const customers = ref([]);
const showAddModal = ref(false);
const showEditModal = ref(false);
const showDetailModal = ref(false);
const selectedCustomer = ref(null);

// Function to generate fake data
const sampleCustomers = [
    { id: 1, name: 'John', address: '123 Main St, New York', email: 'john.doe@example.com', phone: '555-1234' },
    { id: 2, name: 'Jane Smith', address: '456 Elm St, San Francisco', email: 'jane.smith@example.com', phone: '555-5678' },
    { id: 3, name: 'Alice Johnson', address: '789 Oak St, Chicago', email: 'alice.johnson@example.com', phone: '555-9876' },
    { id: 4, name: 'Bob Brown', address: '321 Maple St, Los Angeles', email: 'bob.brown@example.com', phone: '555-4321' },
];

// Load customers (using sample data for now)
const loadCustomers = () => {
  customers.value = sampleCustomers;
};

// Add a new customer
const addCustomer = (newCustomer) => {
  const id = Date.now();
  customers.value.push({ ...newCustomer, id });
  showAddModal.value = false;
};

// Delete a customer
const deleteCustomer = (id) => {
  const customerToDelete = customers.value.find(p => p.id === id);
  const confirmation = window.confirm(`Are you sure you want to delete the customer "${customerToDelete.name}"?`);

  if (confirmation) {
    customers.value = customers.value.filter(p => p.id !== id);
  }
};

// Open Edit Modal
const openEditModal = (customerData) => {
  selectedCustomer.value = { ...customerData };
  showEditModal.value = true;
};

// Open Detail Modal
const openDetailModal = (customerData) => {
  selectedCustomer.value = { ...customerData };
  showDetailModal.value = true;
};

// Close Detail Modal
const closeDetailModal = () => {
  showDetailModal.value = false;
};

// Close Edit Modal
const closeEditModal = () => {
  showEditModal.value = false;
};

// Edit the customer
const editCustomer = (updatedCustomer) => {
  const index = customers.value.findIndex(c => c.id === updatedCustomer.id);
  if (index !== -1) {
    customers.value[index] = { ...updatedCustomer };
  }
  closeEditModal();
};

// Load customers when the component is mounted
onMounted(loadCustomers);
</script>
