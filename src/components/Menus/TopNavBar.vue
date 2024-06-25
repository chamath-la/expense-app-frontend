<!-- src/components/Navbar.vue -->
<template>
    <nav class="navbar navbar-expand bg-light">
      <div class="container-fluid">
        <router-link class="navbar-brand" to="/">Expense App</router-link>
        <div class="navbar-nav ms-auto">
          <router-link class="nav-item nav-link" to="/" exact>
            <i class="bi bi-house d-lg-none me-2"></i>
            <span class="d-none d-lg-inline">Home</span>
          </router-link>
          <router-link class="nav-item nav-link" to="/dashboard">
            <i class="bi bi-bar-chart d-lg-none me-2"></i>
            <span class="d-none d-lg-inline">Dashboard</span>
          </router-link>
          <router-link class="nav-item nav-link" to="/expenses">
            <i class="bi bi-receipt d-lg-none me-2"></i>
            <span class="d-none d-lg-inline">Expenses</span>
          </router-link>
          <router-link class="nav-item nav-link" to="/settings">
            <i class="bi bi-gear d-lg-none me-2"></i>
            <span class="d-none d-lg-inline">Settings</span>
          </router-link>
        </div>
      </div>
    </nav>
  </template>
  