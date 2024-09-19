<template>
    <div class="modal fade show" style="display: block; background: rgba(0, 0, 0, 0.5);" tabindex="-1" aria-labelledby="createProductModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-lg modal-position">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Create New Product</h5>
            <button type="button" class="btn-close" @click="$emit('close')"></button>
          </div>
          <div class="modal-body">
            <form @submit.prevent="submit">
              <div class="row mb-3">
                <div class="col">
                  <label for="name">Product Name</label>
                  <input v-model="newProduct.name" type="text" class="form-control" required />
                </div>
                <div class="col">
                  <label for="category">Category</label>
                  <input v-model="newProduct.category" type="text" class="form-control" required />
                </div>
              </div>
  
              <div class="row mb-3">
                <div class="col">
                  <label for="price">Price</label>
                  <input v-model="newProduct.price" type="number" class="form-control" required />
                </div>
                <div class="col">
                  <label for="stock">Stock Quantity</label>
                  <input v-model="newProduct.stock" type="number" class="form-control" required />
                </div>
              </div>
  
              <div class="row mb-3">
                <div class="col">
                  <label for="barcode">Barcode</label>
                  <input v-model="newProduct.barcode" type="text" class="form-control" required />
                </div>
                <div class="col">
                  <label for="status">Status</label>
                  <select v-model="newProduct.status" class="form-select" required>
                    <option value="Active">Active</option>
                    <option value="Inactive">Inactive</option>
                  </select>
                </div>
              </div>
  
              <div class="mb-3">
                <label for="description">Description</label>
                <textarea v-model="newProduct.description" class="form-control" rows="3" required></textarea>
              </div>
  
              <div class="modal-footer">
                <button type="submit" class="btn btn-primary">Confirm</button>
                <button type="button" class="btn btn-secondary" @click="$emit('close')">Close</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, defineEmits } from 'vue';
  
  const emit = defineEmits();
  const newProduct = ref({ name: '', description: '', price: 0, stock: 0, category: '', barcode: '', status: 'Active' });
  
  const submit = () => {
    emit('add', { ...newProduct.value });
    newProduct.value = { name: '', description: '', price: 0, stock: 0, category: '', barcode: '', status: 'Active' }; // Reset form
  };
  </script>
  
  <style scoped>
  .modal-lg {
    max-width: 800px;
  }
  
  .modal-position {
    margin-top: 100px;
  }
  
  .form-control, .form-select {
    margin-bottom: 10px;
  }
  
  button {
    min-width: 100px;
  }
  
  .modal-title {
    font-size: 1.5rem;
  }
  
  .modal-footer {
    justify-content: flex-end;
  }
  </style>
  