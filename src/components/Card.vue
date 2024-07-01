<template>
     <div class="col-md-4">
          <div class="card text-white  mb-3 bg-primary">
            <div class="card-header d-flex justify-content-between">
                  <div>
                    {{ props.title }} 
                  </div>
                  <div>
                    {{ props.total }}
                  </div>
            </div>
            <!-- <div class="card-body">
              <h5 class="card-title">{{ props.total }}</h5>
            </div> -->
          </div>
        </div>
</template>
<script setup lang="ts">
const props = defineProps({
        total:{
            'type':Number,
            default:0
        },
        title:{
            'type':String,
            default:''
        },
        style:{
            'type':String,
            default:'bg-primary'
        }
    
});
</script>