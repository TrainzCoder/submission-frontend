<template>
    <div class="rounded-[6px] p-[15px] border border-neutral-400 flex flex-col lg:flex-row gap-5 lg:gap-10 items-start">
      <div class="flex flex-col gap-3 lg:gap-4">
        <p class="text-xs lg:text-[14px] font-semibold">{{ reviewerName }}</p>
        <div class="flex gap-2 text-brand text-xs lg:text-base">
            <template v-for="star in rating"  :key="star">
            <i class="ph-fill ph-star text-yellow-500"></i>
          </template>
        </div>
        <p class="text-xs lg:text-[14px]">{{ reviewDate }}</p>
      </div>
      <div>
        <p>{{ reviewContent }}</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      reviewerName: {
        type: String,
        required: true
      },
      rating: {
        type: Number,
        required: true
      },
      reviewDate: {
        type: String,
        required: true
      },
      reviewContent: {
        type: String,
        required: true
      }
    }
  };
  </script>