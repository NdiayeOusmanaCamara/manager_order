<template>
  <div class="modal fade show" tabindex="-1" style="display: block;">
    <div class="modal-dialog modal-position">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Customer Details</h5>
          <button type="button" class="btn-close" @click="$emit('close')"></button>
        </div>
        <div class="modal-body">
          <p><strong>Name:</strong> {{ customer.name }}</p>
          <p><strong>Address:</strong> {{ customer.address }}</p>
          <p><strong>Email:</strong> {{ customer.email }}</p>
          <p><strong>Phone:</strong> {{ customer.phone }}</p>
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
<style setup>
.modal-position {
  margin-top: 100px;
}
</style>