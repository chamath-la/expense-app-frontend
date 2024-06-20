<template>
    <div class="text-center text-danger alert alert-danger alert-dismissible fade show" v-show="props.message">{{ props.message }}</div>
</template>
<script setup lang="ts">

const props = defineProps({
        message:{
            'type':String,
            default:''
        }
    
});
</script>