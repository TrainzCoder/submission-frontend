<script setup>
import ButtonComponent from '../components/ButtonComponent.vue'
import { RouterLink } from 'vue-router'
</script>

<template>
  <!-- create success page that hve title that your detail transaction has been sent to your email -->
<div data-aos="zoom-in">
    <div class="flex flex-col items-center justify-center min-h-screen">
    <div class="flex flex-col items-center justify-center">
        <i class="ph-bold ph-seal-check text-green-500 text-9xl mb-1"></i>
      <h4 class=" font-semibold">Success</h4>
      <p >Your detail transaction has been sent to your email</p>
      <RouterLink to="/" class="mt-8">
        <ButtonComponent type="primary">Back to Home</ButtonComponent>
      </RouterLink>
    </div>
  </div>
</div>
</template>
