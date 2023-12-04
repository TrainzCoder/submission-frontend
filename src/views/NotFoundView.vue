<script setup>
import ButtonComponent from '../components/ButtonComponent.vue'
import { RouterLink } from 'vue-router'
</script>

<template>
    <div class="flex flex-col items-center justify-center min-h-screen">
        <div class="flex flex-col items-center justify-center">
        <h1 class="text-4xl font-semibold">404</h1>
        <p class="text-xl">Page not found</p>
        <RouterLink to="/" class="mt-4">
            <ButtonComponent type="primary">Back to Home</ButtonComponent>
        </RouterLink>
        </div>
    </div>
</template>