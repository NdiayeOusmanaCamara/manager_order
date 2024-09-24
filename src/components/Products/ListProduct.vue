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
        <tr v-if="products.length === 0">
          <td colspan="8" class="text-center">No products available</td>
        </tr>
        <tr v-for="(product) in products" :key="product.id">
          <td>{{ product.name }}</td>
          <td>{{ product.description }}</td>
          <td>{{ product.price }}</td>
          <td>{{ product.stock }}</td>
          <td>{{ product.category }}</td>
          <td>{{ product.barcode }}</td>
          <td>{{ product.status }}</td>
          <td>
            <i @click="openDetailModal(product)" class="fas fa-eye text-info" style="cursor: pointer; margin-right: 8px;"></i>
            <i @click="openEditModal(product)" class="fas fa-edit text-warning" style="cursor: pointer; margin-right: 8px;"></i>
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

// State management
const products = ref([]);
const showAddModal = ref(false);
const showEditModal = ref(false);
const showDetailModal = ref(false);
const selectedProduct = ref(null);

// Sample products to pre-fill the list
const sampleProducts = [
  {
    id: 1,
    name: "Wireless Mouse",
    description: "Ergonomic wireless mouse with 1600 DPI",
    price: 29.99,
    stock: 150,
    category: "Electronics",
    barcode: "1234567890123",
    status: "Available"
  },
  {
    id: 2,
    name: "Bluetooth Headphones",
    description: "Noise-canceling over-ear Bluetooth headphones",
    price: 99.99,
    stock: 50,
    category: "Electronics",
    barcode: "9876543210987",
    status: "Out of Stock"
  },
  {
    id: 3,
    name: "Standing Desk",
    description: "Adjustable height standing desk",
    price: 199.99,
    stock: 20,
    category: "Furniture",
    barcode: "1112131415161",
    status: "Available"
  },
  {
    id: 4,
    name: "LED Desk Lamp",
    description: "Energy-efficient LED lamp with touch control",
    price: 49.99,
    stock: 75,
    category: "Home Office",
    barcode: "2122232425262",
    status: "Available"
  },
  {
    id: 5,
    name: "Coffee Maker",
    description: "12-cup programmable coffee maker",
    price: 59.99,
    stock: 30,
    category: "Appliances",
    barcode: "3132333435363",
    status: "Available"
  }
];

// Load products by setting sample data initially
const loadProducts = () => {
  products.value = sampleProducts;
};

// Add a new product
const addProduct = (newProduct) => {
  const id = Date.now();
  products.value.push({ ...newProduct, id });
  showAddModal.value = false; // Close the modal after adding
};

// Delete a product
const deleteProduct = (id) => {
  const productToDelete = products.value.find(p => p.id === id);
  const confirmation = window.confirm(`Are you sure you want to delete the product "${productToDelete.name}"?`);

  if (confirmation) {
    products.value = products.value.filter(p => p.id !== id);
  }
};

// Open Edit Modal
const openEditModal = (productData) => {
  selectedProduct.value = { ...productData };
  showEditModal.value = true;
};

// Open Detail Modal
const openDetailModal = (productData) => {
  selectedProduct.value = { ...productData };
  showDetailModal.value = true;
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
    products.value[index] = { ...updatedProduct };
  }
  closeEditModal();
};

// Load products when the component is mounted
onMounted(loadProducts);
</script>

<style scoped>
.modal.show {
  display: block;
  background-color: rgba(0, 0, 0, 0.5);
}

.modal-content {
  margin-top: 100px;
  width: 600px;
}

.form-control {
  background-color: #f1f3f5;
  border: none;
}

textarea.form-control {
  resize: none;
}

.row {
  font-weight: 100;
}
</style>
