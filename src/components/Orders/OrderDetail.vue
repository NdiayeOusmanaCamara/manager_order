<template>
    <div class="modal" tabindex="-1">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
            <h5 class="modal-title" id="detailsOrderModalLabel">Order Details</h5>
            <button @click="closeModal" type="button" class="btn-close" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <div class="modal-body">
                <p><strong>Date:</strong> {{ order.date }}</p>
                <p><strong>Customer:</strong> {{ order.customer  }}</p>
                <p><strong>Delivery Address:</strong> {{ order.delivery_address }}</p>
                <p><strong>Track Number:</strong> {{ order.track_number  }}</p>
                <p><strong>Track Number:</strong> {{ order.track_number  }}</p>
                <p><strong>Status:</strong> {{ order.status  }}</p>
              </div>
            </div>
          <div class="modal-footer">
            <button @click="closeModal" type="button" class="btn btn-secondary">Close</button>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  const props = defineProps({
    order: Object
  });
  
  const emit = defineEmits(['close']);
  
  // Fermer la modal
  const closeModal = () => {
    emit('close');
  };
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