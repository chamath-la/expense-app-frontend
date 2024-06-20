import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import type { UserDetails } from '@/assets/types/UserDetails'
import instance from '@/assets/axios'

export const UserModule = defineStore('UserModule', () => {
  const userDetails = ref<UserDetails>()

  function login() {

        return new Promise((resolve,reject)=>{
            
            instance.post('/api/auth',userDetails.value).then((response)=>{
                
                if(response.data.status == 500)
                {
                    throw new Error('credentials not correct')
                }

                resolve(response.data);

            }).catch((response)=>{

                reject(response)
               
            });

        })
  }

  return { userDetails, login }
});

