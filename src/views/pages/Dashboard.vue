<!-- src/components/Dashboard.vue -->
<template>
    <div class="container mt-5">
      <h2>Dashboard</h2>
      <div class="row">
        <Card title="Expenses" :total=totalExpenses />
        <Card title="Income" :total=totalIncome />
        <Card title="Groceries Expenses" :total=totalGrocery />
      </div>
  
      <div class="mt-5 col-md-4">
        <h3>Groceries to Buy</h3>
        <Table :tableValues=tableValues />
      </div>
    </div>
  </template>
  <script setup lang="ts">
  import {ref} from 'vue';
  import Card from '@/components/Card.vue';
  import Table from '@/components/Tables/GroceriesBuyTable.vue'
  import type {GroceriesDetails } from '@/assets/types/GroceriesDetails'

  const totalExpenses = ref(0);
  const totalIncome = ref(0);
  const totalGrocery = ref(0);
  const tableValues = ref<Array<GroceriesDetails>>([]);
</script>