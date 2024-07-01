import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const RouterModule = defineStore('RouterModule', () => {

    const routeStatus = ref<string>('');
    const history = computed(()=> routeStatus.value);
    const addRoute = (route:string) => routeStatus.value =route;

    return { routeStatus, addRoute, history}
});