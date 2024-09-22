<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
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
            <RouterLink class="nav-link" to="/">
              <i class="bi bi-people"></i> Customers
            </RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" to="/products">
              <i class="bi bi-box-seam"></i> Products
            </RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" to="/orders">
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
  color: #ffffff;
  font-size: large;
  transition: color 0.3s ease-in-out;
}

.nav-link:hover {
  color: #c1d1e9;
}

.nav-link i {
  margin-right: 8px;
  font-size: 24px; /* Adjust icon size */
}

.navbar {
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.navbar-toggler {
  border-color: #ffffff;
}

.navbar-toggler-icon {
  background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3E%3Cpath stroke='rgba(255, 255, 255, 1)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E");
}
</style>
