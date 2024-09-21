<template>
  <div class="modal" tabindex="-1">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
            <h5 class="modal-title">Product Details</h5>
            <button type="button" class="btn-close" @click="$emit('close')"></button>
          </div>
          <div class="modal-body">        
              <p><strong>Product Name:</strong> {{ product.name }}</p>
              <p><strong>Description:</strong> {{ product.description }}</p>
              <p><strong>Price:</strong> {{ product.price }}</p>
              <p><strong>Stock:</strong> {{ product.stock }}</p>
              <p><strong>Category:</strong> {{ product.category }}</p>
              <p><strong>Barcode:</strong> {{ product.barcode }}</p>
              <p><strong>Status:</strong> {{ product.status }}</p>
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
    product: {
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
  .modal-content{
    margin-top: 100px;
    width: 500px;
    display: flex;
    justify-content: center;
  }
  </style>