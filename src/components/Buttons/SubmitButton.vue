<template>
     <button type="submit" class="btn btn-primary w-100" :disabled="props.SubmitData">
        <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true" v-show="props.SubmitData"></span> 
        {{props.text}}
    </button>
</template>
<script setup lang="ts">
const props = defineProps({
        text:{
            'type':String,
            default:'Submit'
        },
        SubmitData:{
            type:Boolean,
            default:false
        }
});

</script>