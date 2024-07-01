<template>
    <NavBar />
    <router-view ></router-view>
</template>
<script setup lang="ts">
import { RouterView } from 'vue-router'
import NavBar from '@/components/Menus/TopNavBar.vue';
import {useRouter} from 'vue-router'
import {onMounted} from 'vue';

const router = useRouter();

onMounted(() => {router.push({name:'dashboard'}) });
</script>