<template>
    <div class="modal fade show" style="display: block; background: rgba(0, 0, 0, 0.5);" tabindex="-1" aria-labelledby="editProductModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Edit Product</h5>
            <button type="button" class="btn-close" @click="$emit('close')"></button>
          </div>
          <div class="modal-body">
            <form @submit.prevent="submit">
              <div class="mb-3">
                <label for="name">Product Name</label>
                <input v-model="product.name" type="text" class="form-control" required />
              </div>
              <div class="mb-3">
                <label for="description">Description</label>
                <textarea v-model="product.description" class="form-control" required></textarea>
              </div>
              <div class="mb-3">
                <label for="price">Price</label>
                <input v-model="product.price" type="number" class="form-control" required />
              </div>
              <div class="mb-3">
                <label for="stock">Stock</label>
                <input v-model="product.stock" type="number" class="form-control" required />
              </div>
              <div class="mb-3">
                <label for="category">Category</label>
                <input v-model="product.category" type="text" class="form-control" required />
              </div>
              <div class="mb-3">
                <label for="barcode">Barcode</label>
                <input v-model="product.barcode" type="text" class="form-control" required />
              </div>
              <div class="mb-3">
                <label for="status">Status</label>
                <select v-model="product.status" class="form-select" required>
                  <option value="" disabled>Select Status</option>
                  <option value="Active">Active</option>
                  <option value="Inactive">Inactive</option>
                </select>
              </div>
              <div class="modal-footer">
                <button type="submit" class="btn btn-success">Save</button>
                <button type="button" class="btn btn-secondary" @click="$emit('close')">Cancel</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, defineEmits, watch } from 'vue';
  
  const emit = defineEmits();
  const props = defineProps({
    product: {
      type: Object,
      required: true
    }
  });
  
  const product = ref({ ...props.product });
  
  // Emit the updated product when the form is submitted
  const submit = () => {
    emit('edit', { ...product.value });
  };
  
  // Watch for prop changes to update local product variable
  watch(() => props.product, (newValue) => {
    product.value = { ...newValue };
  });
  </script>
  
  <style scoped>
  
  </style>
  