<template>
     <button type="submit" class="btn btn-primary w-100" :disabled="props.SubmitData">
        <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true" v-show="props.SubmitData"></span> 
        <slot></slot>
    </button>
</template>
<script setup lang="ts">
const props = defineProps({
        SubmitData:{
            type:Boolean,
            default:false
        }
});

</script>