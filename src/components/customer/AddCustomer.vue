<template>
  <div class="modal fade show" tabindex="-1" style="display: block;">
    <div class="modal-dialog  modal-lg modal-position">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Add New Customer</h5>
          <button type="button" class="btn-close" @click="$emit('close')"></button>
        </div>
        <div class="modal-body">
          <form @submit.prevent="submit">
            <div class="form-group">
              <label for="name">Customer Name</label>
              <input v-model="newCustomer.name" type="text" class="form-control" required />
            </div>
            <div class="form-group">
              <label for="address">Address</label>
              <input v-model="newCustomer.address" type="text" class="form-control" required />
            </div>
            <div class="form-group">
              <label for="email">Email</label>
              <input v-model="newCustomer.email" type="email" class="form-control" required />
            </div>
            <div class="form-group">
              <label for="phone">Phone</label>
              <input v-model="newCustomer.phone" type="tel" class="form-control" required />
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" @click="$emit('close')">Close</button>
              <button type="submit" class="btn btn-primary">Confirm</button>
              
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, defineEmits } from 'vue';

const emit = defineEmits();
const newCustomer = ref({ name: '', address: '', email: '', phone: '' });

const submit = () => {
  emit('add', { ...newCustomer.value });
  newCustomer.value = { name: '', address: '', email: '', phone: '' }; // Reset
};
</script>
<style setup>
.modal-position {
  margin-top: 100px;
}
</style>