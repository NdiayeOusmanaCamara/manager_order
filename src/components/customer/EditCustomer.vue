<template>
  <div class="modal fade show" tabindex="-1" style="display: block;">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Edit Customer</h5>
          <button type="button" class="btn-close" @click="$emit('close')"></button>
        </div>
        <div class="modal-body">
          <form @submit.prevent="submit">
            <div class="form-group">
              <label for="name">Customer Name</label>
              <input v-model="customer.name" type="text" class="form-control" required />
            </div>
            <div class="form-group">
              <label for="address">Address</label>
              <input v-model="customer.address" type="text" class="form-control" required />
            </div>
            <div class="form-group">
              <label for="email">Email</label>
              <input v-model="customer.email" type="email" class="form-control" required />
            </div>
            <div class="form-group">
              <label for="phone">Phone</label>
              <input v-model="customer.phone" type="tel" class="form-control" required />
            </div>
            <div class="modal-footer">
              <button type="submit" class="btn btn-warning">Edit Customer</button>
              <button type="button" class="btn btn-secondary" @click="$emit('close')">Cancel</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, defineProps, defineEmits } from 'vue';

const props = defineProps({
  customer: {
    type: Object,
    required: true
  }
});

const emit = defineEmits();

const submit = () => {
  emit('edit', { ...props.customer }); // Utilisez props.customer pour accéder à l'objet client
};
</script>
