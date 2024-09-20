<template>
  <div class="modal fade show" tabindex="-1" style="display: block;">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
            <h5 class="modal-title">Product Details</h5>
            <button type="button" class="btn-close" @click="$emit('close')"></button>
          </div>
          <div class="modal-body">
            <div class="mb-3">
              <strong>Product Name:</strong>
              <p>{{ product.name }}</p>
            </div>
            <div class="mb-3">
              <strong>Description:</strong>
              <p>{{ product.description }}</p>
            </div>
            <div class="mb-3">
              <strong>Price:</strong>
              <p>{{ product.price }}</p>
            </div>
            <div class="mb-3">
              <strong>Stock:</strong>
              <p>{{ product.stock }}</p>
            </div>
            <div class="mb-3">
              <strong>Category:</strong>
              <p>{{ product.category }}</p>
            </div>
            <div class="mb-3">
              <strong>Barcode:</strong>
              <p>{{ product.barcode }}</p>
            </div>
            <div class="mb-3">
              <strong>Status:</strong>
              <p>{{ product.status }}</p>
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
    product: {
      type: Object,
      required: true
    }
  });
  </script>
  
  <style scoped>
  
  </style>
  