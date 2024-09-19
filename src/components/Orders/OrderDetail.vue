<template>
    <div class="modal fade show d-block" tabindex="-1" aria-labelledby="detailsOrderModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="detailsOrderModalLabel">Order Details</h5>
            <button @click="closeModal" type="button" class="btn-close" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <table class="table table-bordered">
              <thead>
                <tr>
                  <th>Date</th>
                  <td>{{ order.date }}</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>Customer</th>
                  <td>{{ order.customer }}</td>
                </tr>
                <tr>
                  <th>Delivery Address</th>
                  <td>{{ order.delivery_address }}</td>
                </tr>
                <tr>
                  <th>Track Number</th>
                  <td>{{ order.track_number }}</td>
                </tr>
                <tr>
                  <th>Status</th>
                  <td>{{ order.status }}</td>
                </tr>
              </tbody>
            </table>
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
  /* Pour s'assurer que la modal est visible */
  .modal {
    display: block;
    background-color: rgba(0, 0, 0, 0.5);
  }
  </style>
  