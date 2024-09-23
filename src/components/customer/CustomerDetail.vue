<template>
  <div class="modal" tabindex="-1">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">View customer</h5>
          <button type="button" class="btn-close" @click="$emit('close')"></button>
        </div>
        <div class="modal-body">
          
          <div class="mb-3">
            <label class="form-label">Customer Name</label>
            <input type="text" class="form-control read-only-input" :value="customer.name" readonly>
          </div>

          <div class="mb-3">
            <label class="form-label">Address</label>
            <textarea class="form-control read-only-input" rows="2" :value="customer.address" readonly></textarea>
          </div>

         
          <div class="mb-3">
            <label class="form-label">Email</label>
            <input type="email" class="form-control read-only-input" :value="customer.email" readonly>
          </div>

        
          <div class="mb-3">
            <label class="form-label">Phone</label>
            <input type="text" class="form-control read-only-input" :value="customer.phone" readonly>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" @click="$emit('close')">Close</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  customer: {
    type: Object,
    required: true
  }
});
</script>

<style scoped>
.modal {
  display: block;
  background-color: rgba(0, 0, 0, 0.5);
}

.modal-dialog {
  max-width: 650px;
  margin-top: -5%;
  
}

.modal-content {
  padding: 20px;
}

.modal-body {
  padding: 10px 0;
}


.read-only-input {
  background-color: #e9ecef; 
  border: 1px solid #ced4da; 
  color: #495057; 
  cursor: not-allowed;
}

.read-only-input:focus {
  box-shadow: none;
  border-color: #ced4da;
}
</style>
