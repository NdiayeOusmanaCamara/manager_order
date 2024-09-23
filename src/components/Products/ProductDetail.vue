<template>
  <div class="modal show" tabindex="-1">
    <div class="modal-dialog  w-70">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">View Product</h5>
          <button type="button" class="btn-close" @click="$emit('close')"></button>
        </div>
        <div class="modal-body">
          <div class="row mb-3">
            <div class="col">
              <label><strong>Product Name</strong></label>
              <input type="text" class="form-control" :value="product.name" readonly>
            </div>
            <div class="col">
              <label><strong>Category</strong></label>
              <input type="text" class="form-control" :value="product.category" readonly>
            </div>
          </div>
          <div class="row mb-3">
            <div class="col">
              <label><strong>Price</strong></label>
              <input type="text" class="form-control" :value="product.price" readonly>
            </div>
            <div class="col">
              <label><strong>Stock Quantity</strong></label>
              <input type="text" class="form-control" :value="product.stock" readonly>
            </div>
          </div>
          <div class="row mb-3">
            <div class="col">
              <label><strong>Barcode</strong></label>
              <input type="text" class="form-control" :value="product.barcode" readonly>
            </div>
            <div class="col">
              <label><strong>Status</strong></label>
              <input type="text" class="form-control" :value="product.status" readonly>
            </div>
          </div>
          <div class="row">
            <div class="col">
              <label><strong>Description</strong></label>
              <textarea class="form-control" :value="product.description" readonly></textarea>
            </div>
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
.modal.show {
  display: block;
  background-color: rgba(0, 0, 0, 0.5);
}

.modal-content {
  margin-top: 150px;
  width: 650px;
  display: flex;
  justify-content: center;
}

.form-control {
  background-color: #f1f3f5;
  border: none;
}


textarea.form-control {
  resize: none;
}
.row{
  font-weight: 100;
}
</style>
