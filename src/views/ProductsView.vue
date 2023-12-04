<script setup>
import DefaultLayout from '../container/DefaultLayout.vue'
import ButtonComponent from '../components/ButtonComponent.vue'
import FooterComponent from '../components/FooterComponent.vue'

import { useProductsStore } from '../stores/products'
import { ref, watchEffect, onBeforeMount } from 'vue'
import { storeToRefs } from 'pinia'
import formatToRupiah from '../helper/formatRupiah'


const { products } = storeToRefs(useProductsStore())
const { fetchProducts, filterProducts } = useProductsStore()

fetchProducts()

const updateCategories = (event, category) => {
  if (event.target.checked) {
    selectedCategories.value.push(category)
  } else {
    const index = selectedCategories.value.indexOf(category)
    if (index !== -1) {
      selectedCategories.value.splice(index, 1)
    }
  }

  applyFilter()
}

const selectedCategories = ref([])
const minPrice = ref(null)
const maxPrice = ref(null)

const applyFilter = () => {
  const filter = {
    categories: selectedCategories.value,
    minPrice: minPrice.value,
    maxPrice: maxPrice.value
  }
  // console.log(filter);
  filterProducts(filter)
}

const clearFilter = () => {
  selectedCategories.value = []
  minPrice.value = null
  maxPrice.value = null

  applyFilter()
}

const filterVisible = ref(false)

const toggleFilter = () => {
  filterVisible.value = !filterVisible.value
}

onBeforeMount(() => {
})

watchEffect(() => {
})
</script>

<template>
  <DefaultLayout class="mt-[140px] mb-[80px]">
    <!-- Filter Section -->
    <section
    class="lg:hidden fixed bottom-0 left-0 w-full shadow-xl h-[300px] border-t border-gray-200 overflow-y-scroll bg-white z-[8]  px-4 py-4 transition-all duration-300"
    :style="{ maxHeight: filterVisible ? '300px' : '0', opacity: filterVisible ? '1' : '0' }"
  >
      <div class="w-full flex lg:hidden flex-col gap-2">
        <ButtonComponent
          type="secondary"
          class="btn-sm w-max ml-auto mb-4 lg:hidden"
          @click="toggleFilter"
        >
        <i class="ph-bold ph-x"></i>
        </ButtonComponent>
        <ButtonComponent type="secondary" class="btn-sm" @click="clearFilter">
          <p>Clear</p>
        </ButtonComponent>
        <div class="collapse collapse-arrow rounded-[6px] bg-white border border-gray-400">
          <input type="checkbox" />
          <div class="collapse-title text-sm font-medium">Category</div>
          <div class="collapse-content flex flex-col gap-4">
            <div class="form-control">
              <label class="flex items-center gap-3">
                <input
                  type="checkbox"
                  class="checkbox"
                  value="Men"
                  :checked="selectedCategories.includes('Men')"
                  @change="updateCategories($event, 'Men')"
                />
                <span class="cursor-pointer">Men</span>
              </label>
            </div>
            <div class="form-control">
              <label class="flex items-center gap-3">
                <input
                  type="checkbox"
                  class="checkbox"
                  value="Women"
                  :checked="selectedCategories.includes('Women')"
                  @change="updateCategories($event, 'Women')"
                />
                <span class="cursor-pointer">Women</span>
              </label>
            </div>
            <div class="form-control">
              <label class="flex items-center gap-3">
                <input
                  type="checkbox"
                  class="checkbox"
                  value="Kids"
                  :checked="selectedCategories.includes('Kids')"
                  @change="updateCategories($event, 'Kids')"
                />
                <span class="cursor-pointer">Kids</span>
              </label>
            </div>
            <div class="form-control">
              <label class="flex items-center gap-3">
                <input
                  type="checkbox"
                  class="checkbox"
                  value="Accessories"
                  :checked="selectedCategories.includes('Accessories')"
                  @change="updateCategories($event, 'Accessories')"
                />
                <span class="cursor-pointer">Accessories</span>
              </label>
            </div>
          </div>
        </div>
        <div class="collapse collapse-arrow rounded-[6px] bg-white border border-gray-400">
          <input type="checkbox" />
          <div class="collapse-title text-sm font-medium">Price</div>
          <div class="collapse-content flex flex-col gap-4">
            <div class="join">
              <div class="indicator h-full">
                <button class="btn btn-sm join-item text-xs px-2 h-full">Rp</button>
              </div>
              <div>
                <div>
                  <input
                    type="text"
                    v-model="minPrice"
                    @input="applyFilter"
                    class="input input-bordered join-item w-full input-sm"
                    placeholder="Min. Price"
                  />
                </div>
              </div>
            </div>
            <div class="join">
              <div class="indicator h-full">
                <button class="btn btn-sm join-item text-xs px-2 h-full">Rp</button>
              </div>
              <div>
                <div>
                  <input
                    type="text"
                    v-model="maxPrice"
                    @input="applyFilter"
                    class="input input-bordered join-item w-full input-sm"
                    placeholder="Max. Price"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <main>
      <section>
        <div class="flex flex-col lg:flex-row gap-[10px] md:gap-[20px] lg:gap-[60px] items-start">
          <div class="w-full lg:w-[240px] pt-[20px] lg:pt-0 flex flex-col gap-2">
            <div class="flex lg:hidden justify-between items-end">
              <h3>Our Products</h3>
            </div>

            <ButtonComponent
              type="secondary"
              class="btn-sm w-max lg:hidden"
              @click="toggleFilter"
              >
              <i class="ph-bold ph-faders-horizontal"></i>
              Filter
            </ButtonComponent>

            <h4 class="mb-12 hidden md:block">Filter</h4>

            <div class="w-full hidden lg:flex flex-col gap-2">
              <ButtonComponent type="secondary" class="btn-sm" @click="clearFilter">
                <p>Clear</p>
              </ButtonComponent>
              <div class="collapse collapse-arrow rounded-[6px] bg-white border border-gray-400">
                <input type="checkbox" />
                <div class="collapse-title text-sm font-medium">Category</div>
                <div class="collapse-content flex flex-col gap-4">
                  <div class="form-control">
                    <label class="flex items-center gap-3">
                      <input
                        type="checkbox"
                        class="checkbox"
                        value="Men"
                        :checked="selectedCategories.includes('Men')"
                        @change="updateCategories($event, 'Men')"
                      />
                      <span class="cursor-pointer">Men</span>
                    </label>
                  </div>
                  <div class="form-control">
                    <label class="flex items-center gap-3">
                      <input
                        type="checkbox"
                        class="checkbox"
                        value="Women"
                        :checked="selectedCategories.includes('Women')"
                        @change="updateCategories($event, 'Women')"
                      />
                      <span class="cursor-pointer">Women</span>
                    </label>
                  </div>
                  <div class="form-control">
                    <label class="flex items-center gap-3">
                      <input
                        type="checkbox"
                        class="checkbox"
                        value="Kids"
                        :checked="selectedCategories.includes('Kids')"
                        @change="updateCategories($event, 'Kids')"
                      />
                      <span class="cursor-pointer">Kids</span>
                    </label>
                  </div>
                  <div class="form-control">
                    <label class="flex items-center gap-3">
                      <input
                        type="checkbox"
                        class="checkbox"
                        value="Accessories"
                        :checked="selectedCategories.includes('Accessories')"
                        @change="updateCategories($event, 'Accessories')"
                      />
                      <span class="cursor-pointer">Accessories</span>
                    </label>
                  </div>
                </div>
              </div>
              <div class="collapse collapse-arrow rounded-[6px] bg-white border border-gray-400">
                <input type="checkbox" />
                <div class="collapse-title text-sm font-medium">Price</div>
                <div class="collapse-content flex flex-col gap-4">
                  <div class="join">
                    <div class="indicator h-full">
                      <button class="btn btn-sm join-item text-xs px-2 h-full">Rp</button>
                    </div>
                    <div>
                      <div>
                        <input
                          type="text"
                          v-model="minPrice"
                          @input="applyFilter"
                          class="input input-bordered join-item w-full input-sm"
                          placeholder="Min. Price"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="join">
                    <div class="indicator h-full">
                      <button class="btn btn-sm join-item text-xs px-2 h-full">Rp</button>
                    </div>
                    <div>
                      <div>
                        <input
                          type="text"
                          v-model="maxPrice"
                          @input="applyFilter"
                          class="input input-bordered join-item w-full input-sm"
                          placeholder="Max. Price"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="w-full">
            <div class="mb-8">
              <div class="hidden lg:flex">
                <h4 class="font-semibold">Our Products</h4>
              </div>
            </div>

            <!-- create list product -->
            <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[10px] w-full">
              <div v-for="product in products" :key="product.id">
                <div class="w-full h-full border border-gray-200 rounded-[sm]">
                  <div class="overflow-hidden relative">
                    <div class="absolute top-0 left-0 p-3 w-full flex items-start justify-between">
                      <div class="flex flex-col gap-3 items-end">
                        <span
                          class="bg-white bg-opacity-80 cursor-pointer p-2 flex items-center w-max rounded-full"
                        >
                          <i class="fa-regular fa-heart"></i>
                        </span>
                        <span
                          class="bg-white bg-opacity-80 cursor-pointer p-2 flex justify-center items-center w-max rounded-full"
                        >
                          <i class="fas fa-shopping-cart"></i>
                        </span>
                      </div>
                    </div>
                    <img
                      :src="product.image"
                      alt="product"
                      class="h-[180px] lg:h-[240px] object-contain   w-full"
                    />
                  </div>
                  <div class="p-[10px] flex flex-col gap-[5px]">
                    <RouterLink :to="`/product/${product.id}`" class="hover:underline truncate">
                      {{ product.name }}
                    </RouterLink>
                    <div>
                      <p class="font-bold text-lg">{{formatToRupiah( product.price) }}</p>
                    </div>
                  </div>
                </div>
              </div>

              <!-- set no data when products zero -->
              <div v-if="products.length === 0" class="col-span-full w-full">
                <div class="flex justify-start w-full items-center h-[150px]">
                  <p class="text-xl text-left">Product not found</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  </DefaultLayout>

  <FooterComponent />
</template>
