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
        <div class="d-flex justify-content-between">
          <h3>Groceries to Buy</h3>        
          <button @click="navigateToAddExpense" class="btn btn-primary mb-3 btn-sm"> <i class="bi bi-plus"></i></button>
        </div>
        <Table :tableValues=tableValues />
      </div>
    </div>
  </template>
  <script setup lang="ts">
  import {ref, onMounted} from 'vue';
  import Card from '@/components/Card.vue';
  import Table from '@/components/Tables/GroceriesBuyTable.vue'
  import type {GroceriesDetails } from '@/assets/types/GroceriesDetails'
  import { ExpenseModule} from '@/stores/ExpenseModule';
  import totalAmount from '@/composables/TotalAmount';
  import router from '@/router';

  const totalExpenses = ref(0);
  const totalIncome = ref(0);
  const totalGrocery = ref(0);
  const tableValues = ref<Array<GroceriesDetails>>([{
    'id':1,
    'name':'food city',
    'amount':400,
    'checked':false
  }]);
  const ExpenseStore = ExpenseModule();

  const totalAmounts = async() =>
  {
    let result:any = await ExpenseStore.getExpenses();
    totalExpenses.value = totalAmount(result.data).totalExpenses;
    totalIncome.value = totalAmount(result.data).totalIncome;
    console.log(totalAmount(result.data));
  }

  const navigateToAddExpense = () =>
  {
    router.push({'name':'addExpense'});
  }

  onMounted(async() => {
    await totalAmounts();
  })
</script>