
  <template>
    <div>
      <div class="accordion mt-5 mx-2" id="expenseAccordion">
        <button @click="navigateToAddExpense" class="btn btn-primary mb-3 btn-sm"> <i class="bi bi-plus"></i></button>
        <ExpensesList v-for="expense in expenses" key="expense.id" :expense="expense" />
      </div>
    </div>
  </template>
  
 
  <script setup lang="ts">
  
import router from '@/router';
import {ref, onMounted } from 'vue';
import { ExpenseModule} from '@/stores/ExpenseModule';
import type { ExpensesParams } from '@/assets/types/ExpensesParams';

import getErrorMessage from '@/utils/errorHandler';
import ExpensesList from '@/components/ExpensesList.vue';

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