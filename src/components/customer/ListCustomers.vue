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
            <i @click="viewDetails(customer)" class="fas fa-eye text-info" style="cursor: pointer; margin-right: 8px;"></i>
            <i @click="openEditModal(customer)" class="fas fa-edit text-warning" style="cursor: pointer; margin-right: 8px;"></i>
            <i @click="confirmDelete(customer.id)" class="fas fa-trash text-danger" style="cursor: pointer;"></i>
          </td>
        </tr>
      </tbody>
    </table>

    <!-- Modals -->
    <CustomerModal v-if="showAddModal" @close="showAddModal = false" @add="addCustomer" />
    <EditCustomerModal 
      v-if="showEditModal" 
      :customer="customer" 
      @close="closeEditModal" 
      @edit="editCustomer" 
    />
    <CustomerDetailsModal 
      v-if="showDetailsModal" 
      :customer="selectedCustomer" 
      @close="showDetailsModal = false" 
    />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import CustomerModal from "@customer/AddCustomer.vue";
import EditCustomerModal from "@customer/EditCustomer.vue";
import CustomerDetailsModal from "@customer/CustomerDetail.vue";

// State management
const customers = ref([]);
const showAddModal = ref(false);
const showEditModal = ref(false);
const showDetailsModal = ref(false);
const selectedCustomer = ref(null);
const customer = ref({ name: '', address: '', email: '', phone: '' });

// Function to generate fake data
const generateFakeData = () => {
  return [
    { id: 1, name: 'John', address: '123 Main St, New York', email: 'john.doe@example.com', phone: '555-1234' },
    { id: 2, name: 'Jane Smith', address: '456 Elm St, San Francisco', email: 'jane.smith@example.com', phone: '555-5678' },
    { id: 3, name: 'Alice Johnson', address: '789 Oak St, Chicago', email: 'alice.johnson@example.com', phone: '555-9876' },
    { id: 4, name: 'Bob Brown', address: '321 Maple St, Los Angeles', email: 'bob.brown@example.com', phone: '555-4321' },
  ];
};

// Load customers from localStorage or generate data
const loadCustomers = () => {
  const data = localStorage.getItem('customers');
  if (data) {
    customers.value = JSON.parse(data);
  } else {
    customers.value = generateFakeData();
    localStorage.setItem('customers', JSON.stringify(customers.value));
  }
};

// Delete customer with confirmation
const confirmDelete = (id) => {
  const customer = customers.value.find(c => c.id === id);
  const confirmation = window.confirm(`Are you sure you want to delete ${customer.name}?`);
  if (confirmation) {
    deleteCustomer(id);
  }
};

// Delete customer
const deleteCustomer = (id) => {
  customers.value = customers.value.filter(customer => customer.id !== id);
  localStorage.setItem('customers', JSON.stringify(customers.value));
};

// View customer details
const viewDetails = (customerData) => {
  selectedCustomer.value = customerData;
  showDetailsModal.value = true;
};

// Open edit modal
const openEditModal = (customerData) => {
  customer.value = { ...customerData };
  showEditModal.value = true;
};

// Close edit modal
const closeEditModal = () => {
  showEditModal.value = false;
};

// Edit customer
const editCustomer = () => {
  const index = customers.value.findIndex(c => c.id === customer.value.id);
  if (index !== -1) {
    customers.value[index] = { ...customer.value };
    localStorage.setItem('customers', JSON.stringify(customers.value));
  }
  closeEditModal();
};

// Add new customer
const addCustomer = (newCustomer) => {
  if (!newCustomer.name || !newCustomer.address || !newCustomer.email || !newCustomer.phone) {
    alert('Please fill in all fields');
    return;
  }

  const id = Date.now();
  customers.value.push({ ...newCustomer, id });
  localStorage.setItem('customers', JSON.stringify(customers.value));
};

// Load customers on component mount
onMounted(loadCustomers);
</script>
