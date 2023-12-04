<template>
    <button
      :class="[
        {
          'btn btn-neutral hover:bg-gray-600 hover:border-gray-600 ': type === 'primary',
          'btn btn-outline btn-neutral': type === 'secondary',
          'btn hover:tracking-[3px] bg-gray-300 bg-opacity-30 text-white border border-white hover:bg-gray-300 hover:bg-opacity-50': type === 'glassmorph',
          'hover:underline text-white': type === 'link',
        }
      ]"
      class="py-2 px-4 rounded-[6px] focus:outline-none font-semibold transition-all duration-300 tracking-[1px]"
      @click="$emit('click')"
    >
      <slot></slot>
    </button>
  </template>

  <style>
</style>

  
  <script>
  export default {
    emits: ['click'],
    props: {
      type: {
        type: String,
        default: 'primary',
        validator: (value) => ['primary', 'glassmorph', 'secondary', 'link'].includes(value),
      },
    },
  };
  </script>
  