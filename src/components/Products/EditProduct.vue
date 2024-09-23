<template>
  <div class="modal show" tabindex="-1">
    <div class="modal-dialog ">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Edit Product</h5>
          <button type="button" class="btn-close" @click="$emit('close')"></button>
        </div>
        <div class="modal-body">
          <form @submit.prevent="submit">
            <div class="row mb-3">
              <div class="col">
                <label for="name">Product Name</label>
                <input v-model="product.name" type="text" class="form-control " required />
              </div>
              <div class="col">
                <label for="status">Status</label>
                <select v-model="product.status" class="form-select" required>
                  <option value="" disabled>Select Status</option>
                  <option value="Active">Active</option>
                  <option value="Inactive">Inactive</option>
                </select>
              </div>
            </div>

            <div class="row mb-3">
              <div class="col">
                <label for="price">Price</label>
                <input v-model="product.price" type="number" class="form-control" required />
              </div>
              <div class="col">
                <label for="stock">Stock</label>
                <input v-model="product.stock" type="number" class="form-control" required />
              </div>
            </div>

            <div class="row mb-3">
              <div class="col">
                <label for="category">Category</label>
                <input v-model="product.category" type="text" class="form-control" required />
              </div>
              <div class="col">
                <label for="barcode">Barcode</label>
                <input v-model="product.barcode" type="text" class="form-control" required />
              </div>
            </div>

            <div class="mb-3">
              <label for="description">Description</label>
              <textarea v-model="product.description" class="form-control" required></textarea>
            </div>

            <div class="modal-footer">
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

.modal-content {
  margin-top: 150px;
  width: 650px;
  display: flex;
  justify-content: center;
}

</style>
