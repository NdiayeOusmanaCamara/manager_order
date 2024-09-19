<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-body-tertiary">
    <div class="container">
      <!-- Toggle button for mobile view -->
      <button
        class="navbar-toggler"
        type="button"
        @click="toggleNavbar"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <!-- Collapsible content -->
      <div :class="['collapse', 'navbar-collapse', { show: isNavbarVisible }]" id="navbarSupportedContent">
        <!-- Left links -->
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <RouterLink class="nav-link" to="/Customer">
              <i class="bi bi-people"></i> Customers
            </RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" to="/Products">
              <i class="bi bi-box-seam"></i> Products
            </RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" to="/Orders">
              <i class="bi bi-cart"></i> Orders
            </RouterLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>

  <RouterView />
</template>

<script setup>
import { ref } from 'vue';
import { RouterLink, RouterView } from 'vue-router';

const isNavbarVisible = ref(false);

function toggleNavbar() {
  isNavbarVisible.value = !isNavbarVisible.value;
}
</script>

<style scoped>
body {
  background-color: #f8f9fa;
  color: #212529;
}

.nav-link {
  color: #38405d;
  font-size: large;
}

.nav-link:hover {
  color: #2348b4;
}

.nav-link i {
  margin-right: 8px;
  font-size: 24px; /* Adjust icon size */
}

.carousel-item {
  height: 40vh;
}
</style>
