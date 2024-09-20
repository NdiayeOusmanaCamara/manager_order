<template>
  <div class="container mt-5">
    <h2>List of Products</h2>
    <div class="d-flex justify-content-end">
      <button type="button" class="btn btn-primary mb-3" @click="showAddModal = true">
        Add New Product
      </button>
    </div>
    <table class="table table-striped">
      <thead>
        <tr>
          <th>Product Name</th>
          <th>Description</th>
          <th>Price</th>
          <th>Stock</th>
          <th>Category</th>
          <th>Barcode</th>
          <th>Status</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(product) in products" :key="product.id">
          <td>{{ product.name }}</td>
          <td>{{ product.description }}</td>
          <td>{{ product.price }}</td>
          <td>{{ product.stock }}</td>
          <td>{{ product.category }}</td>
          <td>{{ product.barcode }}</td>
          <td>{{ product.status }}</td>
          <td>
            <i @click="openEditModal(product)" class="fas fa-edit text-warning" style="cursor: pointer; margin-right: 8px;"></i>
            <i @click="openDetailModal(product)" class="fas fa-eye text-info" style="cursor: pointer; margin-right: 8px;"></i>
            <i @click="deleteProduct(product.id)" class="fas fa-trash text-danger" style="cursor: pointer;"></i>
          </td>
        </tr>
      </tbody>
    </table>

    <!-- Add Product Modal -->
    <ProductModal v-if="showAddModal" @close="showAddModal = false" @add="addProduct" />
    
    <!-- Edit Product Modal -->
    <EditProductModal 
      v-if="showEditModal" 
      :product="selectedProduct" 
      @close="closeEditModal" 
      @edit="editProduct" 
    />
    
    <!-- Product Detail Modal -->
    <ProductDetail 
      v-if="showDetailModal" 
      :product="selectedProduct" 
      @close="closeDetailModal" 
    />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import ProductModal from "@/components/Products/ProductAdd.vue";
import EditProductModal from "@/components/Products/EditProduct.vue";
import ProductDetail from "@/components/Products/ProductDetail.vue";

const products = ref([]);
const showAddModal = ref(false);
const showEditModal = ref(false);
const showDetailModal = ref(false);
const selectedProduct = ref(null);

// Load products from localStorage
const loadProducts = () => {
  const data = localStorage.getItem('products');
  products.value = data ? JSON.parse(data) : [];
};

// Add a new product
const addProduct = (newProduct) => {
  const id = Date.now();
  products.value.push({ ...newProduct, id });
  localStorage.setItem('products', JSON.stringify(products.value));
  showAddModal.value = false; // Close the modal after adding
};

// Delete a product
const deleteProduct = (id) => {
  products.value = products.value.filter(p => p.id !== id);
  localStorage.setItem('products', JSON.stringify(products.value));
};

// Open Edit Modal
const openEditModal = (productData) => {
  selectedProduct.value = { ...productData }; // Copy product data
  showEditModal.value = true; // Open edit modal
};

// Open Detail Modal
const openDetailModal = (productData) => {
  selectedProduct.value = { ...productData }; // Copy product data
  showDetailModal.value = true; // Open detail modal
};

// Close Detail Modal
const closeDetailModal = () => {
  showDetailModal.value = false;
};

// Close Edit Modal
const closeEditModal = () => {
  showEditModal.value = false;
};

// Edit the product
const editProduct = (updatedProduct) => {
  const index = products.value.findIndex(p => p.id === updatedProduct.id);
  if (index !== -1) {
    products.value[index] = { ...updatedProduct }; // Update the product in the list
    localStorage.setItem('products', JSON.stringify(products.value)); // Update local storage
  }
  closeEditModal();
};

onMounted(loadProducts);
</script>

<style scoped>
/* Add your styles here */
</style>
