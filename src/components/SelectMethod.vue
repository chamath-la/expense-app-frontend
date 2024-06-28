<template>
    <select class="form-select" id="amount" v-model="expensesParams.status">
        <!-- <option value="0">Select Method</option> -->
        <option value={{method.value}}>{{method.name}}</option>
        <!-- <option value="2">Expense</option> -->
    </select>
</template>
<script setup lang="ts">

const pros=defineProps({
    method:{
        type:Object,
        default:{}
    }
})
</script>