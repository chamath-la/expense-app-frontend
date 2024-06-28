<template>
    <div class="register-container d-flex justify-content-center align-items-center w-100 h-100">
      <div class="card register-card border-0">
        <div class="card-body">
          <h3 class="card-title text-center">Register</h3>
            <ErrorMessage :message = errorMessage />
          <form @submit.prevent="handleRegister">
            <div class="mb-3">
              <label for="name" class="form-label">Name</label>
              <input type="text" class="form-control" id="name" v-model="UserParams.name">
            </div>
            <div class="mb-3">
              <label for="username" class="form-label">User Name</label>
              <input type="text" class="form-control" id="username" v-model="UserParams.username">
            </div>
            <div class="mb-3">
              <label for="email" class="form-label">Email address</label>
              <input type="email" class="form-control" id="email" v-model="UserParams.email">
            </div>
            <div class="mb-3">
              <label for="password" class="form-label">Password</label>
              <input type="password" class="form-control" id="password" v-model="UserParams.password">
            </div>
            <SubmitButton :SubmitData="SubmitData"> Register </SubmitButton>
          </form>
          <p class="mt-3 text-center">
            Already have an account?
            <router-link to="/login">Login</router-link>
          </p>
        </div>
      </div>
    </div>
  </template>
  <script setup lang="ts">
    import { ref } from 'vue';
    import type { UserDetails } from '@/assets/types/UserDetails';
    import { UserModule} from '@/stores/UserModule';
    import router from '@/router';
    import getErrorMessage from '@/utils/errorHandler';
    import ErrorMessage from '@/components/Alerts/ErrorMessage.vue';
    import SubmitButton from '@/components/Buttons/SubmitButton.vue';

    const UserStore = UserModule();
    const errorMessage = ref();
    const UserParams = ref<UserDetails>({
        'name':'',
        'email':'',
        'password':'',
        'username':'',
    });
    const SubmitData = ref<boolean>(false);

    const handleRegister = async () =>
    {
        try{
            SubmitData.value = true;
            UserStore.userDetails = UserParams.value
            let result:any = await UserStore.register();
            router.push({'name':'login'});

        }catch(error){
            errorMessage.value= getErrorMessage(error);
            console.error(error);
        }finally{
            SubmitData.value = false;
        }
       
    }


</script>