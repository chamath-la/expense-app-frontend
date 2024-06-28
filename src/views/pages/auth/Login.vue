<template>
    <div class="login-container d-flex justify-content-center align-items-center w-100 h-100">
      <div class="card login-card border-0">
        <div class="card-body">
          <h3 class="card-title text-center">Login</h3>
            <ErrorMessage :message = errorMessage />
          <form @submit.prevent="handleLogin">
            <div class="mb-3">
              <label for="username" class="form-label">UserName</label>
              <input type="text" class="form-control" id="email" v-model="loginParams.username" >
            </div>
            <div class="mb-3">
              <label for="password" class="form-label">Password</label>
              <input type="password" class="form-control" id="password" v-model="loginParams.password" >
            </div>
            <SubmitButton :SubmitData="SubmitData">Login</SubmitButton>
          </form>
          <p class="mt-3 text-center">
            Don't have an account?
            <router-link to="/register">Register</router-link>
          </p>
        </div>
      </div>
    </div>
  </template>
  <script setup lang="ts">
    import {ref , onMounted} from 'vue';
    import type { UserDetails } from '@/assets/types/UserDetails';
    import { UserModule} from '@/stores/UserModule';
    import getErrorMessage from '@/utils/errorHandler';
    import ErrorMessage from '@/components/Alerts/ErrorMessage.vue';
    import SubmitButton from '@/components/Buttons/SubmitButton.vue';
    import {useRouter} from 'vue-router'

    const UserStore = UserModule();
    const SubmitData = ref<boolean>(false);
    const errorMessage = ref();
    const loginParams = ref<UserDetails>({'username':'','password':''});
    const router = useRouter();
    

    const handleLogin = async() =>
    {
        try{
            SubmitData.value = true;
            UserStore.userDetails = loginParams.value;
            let result:any = await UserStore.login();
            localStorage.setItem('token',result.data);
            router.push({name:'basiclayout'});

        }catch(error){

            errorMessage.value = getErrorMessage(error);
            setTimeout(() => {
              errorMessage.value = ''
            }, 1000);
        }finally{
          SubmitData.value = false;
        }
       
    }
    onMounted(() => {(localStorage.getItem('token')) ? router.push({name:'basiclayout'}) : router.push({name:'login'});});

</script>