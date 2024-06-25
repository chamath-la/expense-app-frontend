<template>
    <table class="table table-striped">
          <thead>
            <tr>
              <th scope="col">Item</th>
              <th scope="col">Amount</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in props.tableValues" :key="item.id">
              <td>{{ item.name }}</td>
              <td>{{ item.amount }}</td>
            </tr>
          </tbody>
        </table>
</template>
<script setup lang="ts">
const props = defineProps({
        tableValues:{
            'type':Object,
            default:{}
        },
    
});

</script>