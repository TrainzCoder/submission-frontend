<template>
    <blockquote class="flex h-full flex-col justify-between bg-neutral-50 p-6 rounded-[6px] shadow-xl sm:p-8 lg:p-12">
      <div>
        <div class="flex gap-0.5 text-yellow-500">
          <template v-for="star in rating"  :key="star">
            <i class="ph-fill ph-star"></i>
          </template>
        </div>
  
        <div class="mt-4">  
          <p class="mt-4 leading-relaxed">{{ comment }}</p>
        </div>
      </div>
  
      <footer class="mt-4 text-sm font-medium text-gray-700 sm:mt-6">
        &mdash; {{ name }}
      </footer>
    </blockquote>
  </template>
  
  <script>
  export default {
    props: {
      rating: {
        type: Number,
        required: true,
      },
      comment: {
        type: String,
        required: true,
      },
      name: {
        type: String,
        required: true,
      },
    },
  };
  </script>
  