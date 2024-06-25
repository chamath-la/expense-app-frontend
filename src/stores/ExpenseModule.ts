import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import type { ExpensesParams } from '@/assets/types/ExpensesParams';
import instance from '@/assets/axios';

export const ExpenseModule = defineStore('ExpenseModule', () => {
    const expensesParams = ref<ExpensesParams>()
  
    function submitExpense() {
  
          return new Promise((resolve,reject)=>{
              
              instance.post('/api/expenses',expensesParams.value).then((response)=>{
                  
                  if(response.data.status == 500)
                  {
                      throw new Error(response.data.message)
                  }
  
                  resolve(response.data);
  
              }).catch((response)=>{
  
                  reject(response)
                 
              });
  
          })
    }

    function getExpenses(){

        return new Promise((resolve,reject)=>{
              
            instance.get('/api/expenses').then((response)=>{
                console.log('ok');
                
                if(response.data.status == 500)
                {
                    throw new Error(response.data.message)
                }

                resolve(response.data);

            }).catch((response)=>{

                reject(response)
               
            });

        })
    }
  
    return { expensesParams, submitExpense, getExpenses }
  });