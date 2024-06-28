<template>
    <div class="container mt-4">
       
       <div class="d-flex justify-content-between">
        <h1><i class="bi bi-bookmark-star"></i></h1>   
        <router-link to="/expenses"> <button class="btn btn-sm btn-primary text-center"><i class="bi bi-arrow-bar-left" style="height:2rem"></i></button> </router-link>
       </div> 
       <ErrorMessage :message = errorMessage />
       <SucessMessage :message="successMessage" />
      <form @submit.prevent="submitExpense">
        <div class="mb-3">
          <label for="date" class="form-label">Date</label>
          <input type="date" id="date" v-model="expensesParams.date" class="form-control" required>
        </div>
        <div class="mb-3">
          <label for="name" class="form-label">Name</label>
          <input type="text" id="name" v-model="expensesParams.name" class="form-control" required>
        </div>
        <div class="mb-3">
          <label for="description" class="form-label">Description</label>
          <input type="text" id="description" v-model="expensesParams.description" class="form-control" required>
        </div>
        <div class="mb-3">
          <label for="amount" class="form-label">Amount</label>
          <input type="number" id="amount" v-model="expensesParams.amount" class="form-control" required>
        </div>
        <div class="mb-3">
          <label for="amount" class="form-label">Status</label>
          <select class="form-select" aria-label="Default select example" id="amount" v-model="expensesParams.status" required>
            <option selected value="0">Select Method</option>
            <option value="1">Income</option>
            <option value="2">Expense</option>
          </select>
        </div>
        <div class="d-flex justify-content-center justify-content-lg-end">
            <SubmitButton :SubmitData="SubmitData"><i class="bi bi-plus"></i><span class="d-none d-lg-inline">Add Expense</span></SubmitButton>
        </div>
      </form>
    </div>
  </template>
  <script setup lang="ts">
  import {ref} from 'vue';
import type { ExpensesParams } from '@/assets/types/ExpensesParams';
import { ExpenseModule} from '@/stores/ExpenseModule';
import getErrorMessage from '@/utils/errorHandler';
import ErrorMessage from '@/components/Alerts/ErrorMessage.vue';
import SucessMessage from '@/components/Alerts/SuccessMessage.vue';
import SubmitButton from '@/components/Buttons/SubmitButton.vue';

const ExpenseStore = ExpenseModule();
const expensesParams = ref<ExpensesParams>({
        'date':'',
        'name':'',
        'description':'',
        'amount':0,
        'status':0
    });
const errorMessage = ref();
const successMessage =ref();
const SubmitData = ref<boolean>(false);

const submitExpense = async() =>
{
    try{
        SubmitData.value = true;
        ExpenseStore.expensesParams = expensesParams.value
        let result:any = await ExpenseStore.submitExpense();

        successMessage.value = result.message;
            setTimeout(() => {
              successMessage.value = ''
            }, 1000);

    }catch(error)
    {
        errorMessage.value = getErrorMessage(error);
            setTimeout(() => {
              errorMessage.value = ''
            }, 1000);
    }finally{
      SubmitData.value = false;
    }
}
</script>