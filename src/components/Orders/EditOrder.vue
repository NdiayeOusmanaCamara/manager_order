<template>
  <div class="modal" tabindex="-1">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Edit Order</h5>
          <button type="button" class="btn-close" @click="$emit('close')"></button>
        </div>
        <div class="modal-body">
          <form @submit.prevent="saveOrder">
            <div class="form-group">
              <label>Date</label>
              <input v-model="orderEdit.date" type="date" class="form-control" required />
            </div>
            <div class="form-group">
              <label>Customer</label>
              <input v-model="orderEdit.customer" type="text" class="form-control" required />
            </div>
            <div class="form-group">
              <label>Delivery Address</label>
              <input v-model="orderEdit.delivery_address" type="text" class="form-control" required />
            </div>
            <div class="form-group">
              <label>Track Number</label>
              <input v-model="orderEdit.track_number" type="text" class="form-control" required />
            </div>
            <div class="form-group">
              <label>Status</label>
              <input v-model="orderEdit.status" type="text" class="form-control" required />
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
import { ref, watch, defineEmits } from 'vue';

const props = defineProps({
  order: Object,
});

const emit = defineEmits(); 
const orderEdit = ref({ ...props.order });

const saveOrder = () => {
 
  emit('save', orderEdit.value);
};


watch(() => props.order, (newOrder) => {
  orderEdit.value = { ...newOrder };
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