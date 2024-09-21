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
              <button type="submit" class="btn btn-primary">Save</button>
              <button type="button" class="btn btn-secondary" @click="$emit('close')">Cancel</button>
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
.modal-content{
  margin-top: 200px;
  width: 500px;
  display: flex;
  justify-content: center;
}
</style>
