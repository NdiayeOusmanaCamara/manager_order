<template>
  <div class="modal" tabindex="-1">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Edit Customer</h5>
          <button type="button" class="btn-close" @click="$emit('close')"></button>
        </div>
        <div class="modal-body">
          <form @submit.prevent="submit">
            <div class="mb-3">
              <label for="name" class="form-label">Customer Name</label>
              <input v-model="customer.name" type="text" id="name" class="form-control" required disabled />
            </div>
            <div class="mb-3">
              <label for="address" class="form-label">Address</label>
              <textarea v-model="customer.address" id="address" class="form-control" rows="2" required></textarea>
            </div>
            <div class="mb-3">
              <label for="email" class="form-label">Email</label>
              <input v-model="customer.email" type="email" id="email" class="form-control" required />
            </div>
            <div class="mb-3">
              <label for="phone" class="form-label">Phone</label>
              <input v-model="customer.phone" type="tel" id="phone" class="form-control" required />
            </div>
            <div class="modal-footer d-flex justify-content-end">
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
import { ref, defineEmits, defineProps, watch } from 'vue';

const emit = defineEmits();
const props = defineProps({
  customer: {
    type: Object,
    required: true
  }
});

const customer = ref({ ...props.customer });

const submit = () => {
  emit('edit', { ...customer.value });
};

watch(() => props.customer, (newValue) => {
  customer.value = { ...newValue };
});
</script>

<style scoped>
.modal {
  display: block;
  background-color: rgba(0, 0, 0, 0.5);
}

.modal-content {
  margin-top: 150px;
  width: 500px;
}
.form-group label{
  padding-bottom: 5px
  }
.modal-footer {
  justify-content: space-between;
}
</style>
