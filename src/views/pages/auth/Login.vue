<template>
    <div class="login-container d-flex justify-content-center align-items-center">
      <div class="card login-card">
        <div class="card-body">
          <h3 class="card-title text-center">Login</h3>
          <div class="text-center text-danger">{{ errorMessage }}</div>
          <form @submit.prevent="handleLogin">
            <div class="mb-3">
              <label for="username" class="form-label">UserName</label>
              <input type="text" class="form-control" id="email" v-model="loginParams.username" >
            </div>
            <div class="mb-3">
              <label for="password" class="form-label">Password</label>
              <input type="password" class="form-control" id="password" v-model="loginParams.password" >
            </div>
            <button type="submit" class="btn btn-primary w-100">Login</button>
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
    import {ref} from 'vue';
    import type { UserDetails } from '@/assets/types/UserDetails';
    import { UserModule} from '@/stores/UserModule';

    const UserStore = UserModule();
    const errorMessage = ref();
    const loginParams = ref<UserDetails>({'username':'','password':''});
   
    

    const handleLogin = async() =>
    {
        try{
            UserStore.userDetails = loginParams.value
            let result:any = await UserStore.login();
            localStorage.setItem('token',result.data);

        }catch(error){

            errorMessage.value = error;
        }
       
    }


</script>