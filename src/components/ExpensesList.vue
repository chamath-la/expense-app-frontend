<template>
    <div class="accordion-item">
      <h2 class="accordion-header" :id="'heading' + expense.id">
        <button
          class="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          :data-bs-target="'#collapse' + expense.id"
          aria-expanded="false"
          :aria-controls="'collapse' + expense.id"
        >
          <div class="d-flex justify-content-between w-100">
            <div>{{ expense.name }}</div>
            <div>{{ convert(expense.status)+" "+"("+ expense.amount+")" }}</div>
          </div>
        </button>
      </h2>
      <div
        :id="'collapse' + expense.id"
        class="accordion-collapse collapse"
        :aria-labelledby="'heading' + expense.id"
        data-bs-parent="#expenseAccordion"
      >
        <div class="accordion-body m-0 p-0">
          <!-- Add more details about the expense here if needed -->
            <ul class="list-group rounded-0">
                <li class="list-group-item d-flex justify-content-between"><div>Date</div> <div>{{ expense.date }}</div> </li>
                <li class="list-group-item d-flex justify-content-between"><div>Description</div> <div>{{ expense.description }}</div></li>
                
            </ul>
        </div>
      </div>
    </div>
  </template>
  <script setup lang="ts">
 import type {ExpensesParams} from '@/assets/types/ExpensesParams';
 import type { PropType } from 'vue';
 import convert from '@/composables/ConvertMethod';

    const props = defineProps({
        expense:{
            'type': Object as PropType<ExpensesParams>,
            'default':{}
        }
    
    });
</script>