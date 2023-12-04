<script setup>
import { RouterLink } from 'vue-router'
import {ref} from 'vue'
import ButtonComponent from '../components/ButtonComponent.vue'
import DefaultLayout from '../container/DefaultLayout.vue'
import FooterComponent from '../components/FooterComponent.vue'
import formatToRupiah from '../helper/formatRupiah'

const products = ref([
  {
    id: 1,
    name: 'Elegant Suit',
    price: 399999,
    stock: 1,
    imageUrl: '/image/product.png'
  },
  {
    id: 2,
    name: 'Tuxedo Suit',
    price: 899999,
    stock: 1,
    imageUrl: '/image/product.png'
  }
])

// Function to update stock and calculate total price
const updateStock = (productId, newStock) => {
  const productIndex = products.value.findIndex((p) => p.id === productId)
  if (productIndex !== -1) {
    products.value[productIndex].stock = newStock
  }
}

// Function to calculate total price
const calculateTotalPrice = () => {
  let totalPrice = 0
  products.value.forEach((product) => {
    totalPrice += product.price * product.stock
  })
  return totalPrice
}

// function remove product
const removeProduct = (productId) => {
  const productIndex = products.value.findIndex((p) => p.id === productId)
  if (productIndex !== -1) {
    products.value.splice(productIndex, 1)
  }
}

</script>

<template>
  <DefaultLayout class="mt-[100px] mb-[80px]">
    <section class="flex flex-col lg:flex-row gap-[20px] lg:gap-[60px]">
      <div class="min-w-full max-w-full lg:min-w-[725px] lg:max-w-[725px]">
        <h3 class="text-2xl font-semibold mb-4">Cart</h3>
        <!-- list -->
        <div class="flex flex-col gap-4 justify-between items-center py-2 w-full">
          <div v-for="product in products" :key="product.id" class="w-full">
            <!-- Product details -->
            <div class="flex border overflow-hidden border-neutral-400 w-full relative rounded-[6px]">
              <!-- Product image -->
              <div class="lg:w-[183px] w-[115px] h-[140px] lg:h-[183px]  bg-white mr-2">
                <img
                  :src="product.imageUrl"
                  :alt="product.name"
                  class="w-full h-full object-cover"
                />
              </div>
              <div class="p-[10px] lg:p-[20px]">
                <div class="absolute top-[10px] lg:top-[20px] right-[10px] lg:right-[20px]">
                  <button class="btn btn-ghost btn-sm text-lg text-red-500" @click="removeProduct(product.id)">
                    <i class="ph-bold ph-trash"></i>
                  </button>
                </div>
                <p class="font-semibold text-base lg:text-xl mb-2">{{ product.name }}</p>
                <p class="font-semibold text-brand mb-2">{{ formatToRupiah(product.price) }}</p>
                <div class="flex items-center gap-2 mt-4 text-xs lg:text-base">
                  <p>Stock</p>
                  <select
                    v-model="product.stock"
                    @change="updateStock(product.id, parseInt($event.target.value))"
                    name="stock"
                    class="border border-gray-400 rounded-md px-2 lg:px-3 py-1 cursor-pointer focus:outline-none text-[10px] lg:text-xs"
                  >
                    <option
                      v-for="stockOption in [1, 2, 3, 4, 5]"
                      :key="stockOption"
                      :value="stockOption"
                    >
                      {{ stockOption }}
                    </option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="w-full">
        <!--  Accordion Kupon Diskon-->
        <div
          class="collapse collapse-arrow rounded-[6px] bg-white border border-gray-400 mt-14 mb-8"
        >
          <input type="checkbox" />
          <div class="collapse-title text-sm font-medium">Discount Coupon</div>
          <div class="collapse-content flex flex-col gap-4">
            <input
              type="text"
              placeholder="Insert your coupon"
              class="input input-bordered input-md w-full max-w-xs"
            />
            <ButtonComponent type="secondary" class="">
              <p>Apply</p>
            </ButtonComponent>
          </div>
        </div>

        <!--  Summary Transaksi  -->
        <div class="border border-gray-400 rounded-[6px] p-4 mb-4 w-full">
          <div class="flex justify-between items-center">
            <h3 class="text-xl font-semibold">Summary</h3>
          </div>
          <div class="flex flex-col mt-4 gap-3">
            <div class="flex justify-between items-center">
              <p>Total Price</p>
              <p class="font-semibold">{{formatToRupiah(calculateTotalPrice())}}</p>
            </div>
            <div class="flex justify-between items-center">
              <p>Ongkos Kirim</p>
              <p class="font-semibold">Rp 0</p>
            </div>
            <div class="flex justify-between items-center">
              <p>Discount</p>
              <p class="font-semibold">Rp 0</p>
            </div>
            <div class="flex justify-between items-center border-t border-gray-400 pt-4">
              <p>Total Payment</p>
              <p class="font-semibold">{{formatToRupiah(calculateTotalPrice())}}</p>
            </div>

            <Link to="/payment" class="flex flex-col">
              
                <RouterLink to="/checkout" class="mt-4 "> 
                  <ButtonComponent type="primary" class="w-full">
                    <p>Checkout</p>
                  </ButtonComponent>  
                </RouterLink>
            </Link>
          </div>
        </div>
      </div>
    </section>
  </DefaultLayout>

  <FooterComponent />
</template>
