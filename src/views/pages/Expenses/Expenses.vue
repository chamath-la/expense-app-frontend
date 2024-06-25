<template>
    <div class="container mt-4">

      <button @click="navigateToAddExpense" class="btn btn-primary mb-3 btn-sm"> <i class="bi bi-plus"></i></button>
      <ErrorMessage :message = errorMessage />
      <table class="table table-striped">
        <thead>
          <tr>
            <th scope="col">Date</th>
            <th scope="col">Description</th>
            <th scope="col">Amount</th>
            <th scope="col">I/E</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="expense in expenses" key="expense.id">
            <td>{{ expense.date }}</td>
            <td>{{ expense.description }}</td>
            <td>{{ expense.amount.toFixed(2)}}</td>
            <td>
              {{ convert(parseInt(expense.status)) }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  <script setup lang="ts">
  
import router from '@/router';
import {ref, onMounted } from 'vue';
import { ExpenseModule} from '@/stores/ExpenseModule';
import type { ExpensesParams } from '@/assets/types/ExpensesParams';
import convert from '@/composables/ConvertMethod';
import getErrorMessage from '@/utils/errorHandler';
import ErrorMessage from '@/components/Alerts/ErrorMessage.vue';

const ExpenseStore = ExpenseModule();
const expenses = ref<Array<ExpensesParams>>([]);
const errorMessage = ref();

const getExpenses = async() =>
{
  try{
    let result:any = await ExpenseStore.getExpenses();
    expenses.value = result.data;
  }catch(error){
    errorMessage.value = getErrorMessage(error);
            setTimeout(() => {
              errorMessage.value = ''
            }, 1000);
  }finally{

  }
  
}

const navigateToAddExpense = () =>
  {
    router.push({'name':'addExpense'});
  }

  onMounted(() => {
     getExpenses()
  });
</script>