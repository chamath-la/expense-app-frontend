<template>
    <table class="table table-striped">
          <thead>
            <tr>
              <th><CheckBox /></th>
              <th scope="col" class="text-center">Item</th>
              <th scope="col" class="text-center">Amount</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in props.tableValues" :key="String(item.id)">
              <td><CheckBox  :id="String(item.id)" :checked="item.checked"/></td>
              <td class="text-center">{{ item.name }}</td>
              <td class="text-end">{{ item.amount }}</td>
            </tr>
          </tbody>
        </table>
</template>
<script setup lang="ts">
import CheckBox from '@/components/Buttons/CheckBox.vue';
import type {GroceriesDetails } from '@/assets/types/GroceriesDetails';
import type { PropType } from 'vue';

const props = defineProps({
        tableValues:{
            type:Array as PropType<GroceriesDetails[]>,
            default:() => []
        },
    
});

</script>