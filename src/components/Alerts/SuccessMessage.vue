<template>
    <div class="text-center text-success alert alert-success alert-dismissible fade show" v-show="props.message">{{ props.message }}</div>
</template>
<script setup lang="ts">

const props = defineProps({
        message:{
            'type':String,
            default:''
        }
    
});
</script>