<script setup>
import DefaultLayout from '../container/DefaultLayout.vue'
import ButtonComponent from '../components/ButtonComponent.vue'
import FooterComponent from '../components/FooterComponent.vue'
import { RouterLink } from 'vue-router'
</script>

<template>
  <!-- confirmation modal -->
  <dialog id="confirmation" class="modal">
    <div class="modal-box">
      <form method="dialog">
        <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
      </form>
      <h3 class="font-bold text-lg">Confirmation</h3>
      <p class="text-sm mt-2">Are you sure want to confirm this transaction?</p>
      <form method="dialog">
        <div class="flex gap-4 mt-8">
          <ButtonComponent type="secondary" class="btn-sm">
            <p>Cancel</p>
          </ButtonComponent>
          <RouterLink to="/success">
            <ButtonComponent type="primary" class="btn-sm btn-neutral">
              <p>Confirm</p>
            </ButtonComponent>
          </RouterLink>
        </div>
      </form>
    </div>
  </dialog>

  <DefaultLayout class="mt-[100px] mb-[80px]">
    <section class="mt-[100px]">
      <h3 class="text-2xl font-semibold">Checkout Your Cart</h3>
      <div class="flex flex-col lg:flex-row gap-[80px] lg:gap-[40px] justify-between mt-6">
        <div class="flex flex-col gap-5 w-full lg:w-[600px]">
          <div class="flex flex-col gap-1 w-full">
            <label htmlFor="text" class="text-[14px]"> Name </label>
            <input type="text" placeholder="Type your name" class="input input-bordered w-full" />
          </div>
          <div class="flex flex-col gap-1 w-full">
            <label htmlFor="text" class="text-[14px]"> Address </label>
            <input
              type="text"
              placeholder="Type your address"
              class="input input-bordered w-full"
            />
          </div>
          <div class="flex gap-[10px]">
            <div class="flex flex-col gap-1 w-full">
              <label htmlFor="text" class="text-[14px]"> City </label>
              <input type="text" placeholder="Type your city" class="input input-bordered w-full" />
            </div>
            <div class="flex flex-col gap-1 w-full">
              <label htmlFor="text" class="text-[14px]"> Province </label>
              <input
                type="text"
                placeholder="Type your province"
                class="input input-bordered w-full"
              />
            </div>
            <div class="flex flex-col gap-1 w-full">
              <label htmlFor="text" class="text-[14px]"> Postal Code </label>
              <input
                type="text"
                placeholder="Type your postal code"
                class="input input-bordered w-full"
              />
            </div>
          </div>
          <div class="flex flex-col gap-1 w-full">
            <label htmlFor="text" class="text-[14px]"> Phone Number </label>
            <input
              type="text"
              placeholder="Type your phone number"
              class="input input-bordered w-full"
            />
          </div>
          <div class="flex flex-col gap-1 w-full">
            <label htmlFor="email" class="text-[14px]"> Email </label>
            <input type="email" placeholder="Type your email" class="input input-bordered w-full" />
          </div>
          <div class="form-control">
            <label class="flex items-center gap-3">
              <input type="checkbox" class="checkbox" />
              <span class="cursor-pointer">Save data for next transactions</span>
            </label>
          </div>
        </div>
        <div class="w-full lg:w-[500px]">
          <div
            class="lg:border border-neutral-400 rounded-[6px] lg:p-[20px] w-full flex flex-col gap-5"
          >
            <p class="text-xl font-semibold mb-1">Summary</p>

            <div class="flex flex-col gap-3 w-full">
              <div class="flex items-start gap-3">
                <div class="overflow-hidden w-[95px] h-[95px]">
                  <img
                    src="/image/product.png"
                    class="bg-brand bg-opacity-10 object-cover w-full h-full"
                    alt="smartwatch"
                  />
                </div>
                <div>
                  <p>Smartwatch X1</p>
                  <p class="font-semibold">Rp 399.999</p>
                  <p class="text-[14px]">Jumlah: 1</p>
                </div>
              </div>
              <div class="flex items-start gap-3">
                <div class="overflow-hidden w-[95px] h-[95px]">
                  <img
                    src="/image/product.png"
                    class="bg-brand bg-opacity-10 object-cover w-full h-full"
                    alt="smartwatch"
                  />
                </div>
                <div>
                  <p>Smartwatch X2</p>
                  <p class="font-semibold">Rp 899.999</p>
                  <p class="text-[14px]">Jumlah: 1</p>
                </div>
              </div>
            </div>

            <div class="flex justify-between pb-5 border-b border-gray-200">
              <p class="font-semibold">Subtotal</p>
              <p class="font-semibold">Rp 1.299.998</p>
            </div>
            <div class="flex justify-between pb-5 border-b border-gray-200">
              <p class="font-semibold">Delivery</p>
              <p class="font-semibold">Rp 0</p>
            </div>
            <div class="flex justify-between pb-5 border-b border-gray-200">
              <p class="font-semibold">Total</p>
              <p class="font-semibold">Rp 1.299.998</p>
            </div>
            <div class="flex w-full flex-col" onclick="confirmation.showModal()">
              <ButtonComponent type="primary">
                <p>Confirmation</p>
              </ButtonComponent>
            </div>
          </div>
        </div>
      </div>
    </section>
  </DefaultLayout>

  <FooterComponent />
</template>
