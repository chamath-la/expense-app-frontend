<template>
    <input class="form-check-input" type="checkbox" :id="String(props.id)" @click="checkStatus" :checked="props.checked">
  <label class="form-check-label" for="flexCheckDefault">
    {{ props.Label }}
  </label>
</template>
<script setup lang="ts">

import {ref, computed} from 'vue';
// const emits = defineEmits(['checkStatus']);


   const props = defineProps({
        Label:{
            type:String,
            default:''
        },
        id:{
            type:String,
            default:0
        },
        checked:{
            type:Boolean,
            default:false
        }
    });
    const checked =ref<boolean>(true);

    const checkStatus = () => console.log(props.checked);

</script>