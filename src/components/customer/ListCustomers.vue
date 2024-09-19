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
            <i @click="deleteCustomer(customer.id)" class="fas fa-trash text-danger" style="cursor: pointer;"></i>
          </td>
        </tr>
      </tbody>
    </table>

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
import CustomerModal from "@/components/Customer/AddCustomer.vue";
import EditCustomerModal from "@/components/Customer/EditCustomer.vue";
import CustomerDetailsModal from "@/components/Customer/CustomerDetail.vue";

const customers = ref([]);
const showAddModal = ref(false);
const showEditModal = ref(false);
const showDetailsModal = ref(false);
const selectedCustomer = ref(null);
const customer = ref({ name: '', address: '', email: '', phone: '' });

const loadCustomers = () => {
  const data = localStorage.getItem('customers');
  if (data) {
    customers.value = JSON.parse(data);
  } else {
    customers.value = []; // Initialize to an empty array
    localStorage.setItem('customers', JSON.stringify(customers.value));
  }
};

const deleteCustomer = (id) => {
  customers.value = customers.value.filter(customer => customer.id !== id);
  localStorage.setItem('customers', JSON.stringify(customers.value));
};

const viewDetails = (customerData) => {
  selectedCustomer.value = customerData;
  showDetailsModal.value = true; // Show the details modal
};

const openEditModal = (customerData) => {
  customer.value = { ...customerData }; // Copy the customer data
  showEditModal.value = true; // Show the edit modal
};

const closeEditModal = () => {
  showEditModal.value = false; // Close the edit modal
};

const editCustomer = () => {
  const index = customers.value.findIndex(c => c.id === customer.value.id);
  if (index !== -1) {
    customers.value[index] = { ...customer.value }; // Update the customer
    localStorage.setItem('customers', JSON.stringify(customers.value));
  }
  closeEditModal(); // Close the modal after editing
};

const addCustomer = (newCustomer) => {
  if (!newCustomer.name || !newCustomer.address || !newCustomer.email || !newCustomer.phone) {
    alert('Please fill in all fields');
    return;
  }

  const id = Date.now(); // Generate a unique ID
  customers.value.push({ ...newCustomer, id });
  localStorage.setItem('customers', JSON.stringify(customers.value));
};

onMounted(loadCustomers);
</script>
