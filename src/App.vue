<script setup>
import { RouterLink, RouterView, useRoute, useRouter } from 'vue-router'
import ButtonComponent from './components/ButtonComponent.vue'
import { useProductsStore } from './stores/products'
import { useUsersStore } from './stores/users'
import { ref, watchEffect, onMounted, onBeforeMount } from 'vue'

const { fetchProducts, searchProducts } = useProductsStore()

const route = useRoute()
const router = useRouter()

const { getUsers, logoutUser, checkLocalStorage } = useUsersStore()


const isProductsView = () => {
  if (route.name === 'products') {
    return true
  }
  return false
}


const handleLogout = () => {
  logoutUser()
  router.push({ name: 'login' })
}

const searchQuery = ref('')

const performSearch = () => {
  searchProducts(searchQuery.value)
}

onBeforeMount(() => {
  checkLocalStorage()
  getUsers
})

watchEffect(() => {
  checkLocalStorage()
  getUsers
  fetchProducts()
  performSearch()
})

onMounted(() => {
  checkLocalStorage()
  getUsers
  isProductsView()
  fetchProducts()
  performSearch()
})
</script>

<script>
export default {
  data() {
    return {
      isScrolled: false
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll() {
      if (window.scrollY > 5) {
        this.isScrolled = true
      } else {
        this.isScrolled = false
      }
    }
  }
}
</script>

<template>
  <div
    class="navbar bg-white z-[99] h-max px-4 lg:px-[80px] flex flex-col gap-4 w-full fixed top-0 left-0 py-[15px] transition-all"
    :class="{ 'shadow-xl': isScrolled }"
  >
    <div class="flex justify-between w-full">
      <div class="flex-1">
        <RouterLink to="/" class="text-2xl font-bold"> E-Store </RouterLink>
      </div>
      <div class="flex gap-1">
        <div data-aos="zoom-in" v-if="isProductsView()" class="hidden lg:block">
          <div class="form-control">
            <div class="relative">
              <i
                class="ph-bold ph-magnifying-glass absolute top-1/2 transform -translate-y-1/2 left-3 text-neutral"
              ></i>
              <input
                v-model="searchQuery"
                type="text"
                class="input input-bordered w-[500px] pl-[40px] placeholder:text-gray-500 text-neutral"
                placeholder="Search product..."
                @keyup.enter="performSearch"
              />
            </div>
          </div>
        </div>
        <div data-aos="zoom-in" v-else>
          <RouterLink to="/products" class="btn btn-ghost text-xl">
            <i class="ph-bold ph-magnifying-glass text-neutral"></i>
          </RouterLink>
        </div>
        <div data-aos="zoom-in" v-if="checkLocalStorage() == true">
          <button class="btn btn-ghost text-xl">
            <RouterLink to="/cart">
              <i class="ph-bold ph-shopping-cart-simple text-neutral"></i>
            </RouterLink>
          </button>
        </div>
        <div class="dropdown dropdown-end ml-1" v-if="checkLocalStorage() == true">
          <div tabindex="0" role="button" class="btn btn-ghost btn-circle avatar">
            <div class="w-10 rounded-full">
              <img alt="profile picture" src="/image/user.png" />
            </div>
          </div>
          <ul
            tabindex="0"
            class="mt-3 z-[1] p-2 shadow menu menu-md dropdown-content bg-white border border-neutral-400 rounded-[6px] w-52"
          >
            <li>
              <RouterLink to="/dashboard"> Dashboard </RouterLink>
            </li>
            <li>
              <a @click="handleLogout">Logout</a>
            </li>
          </ul>
        </div>
        <RouterLink to="/login" v-if="checkLocalStorage() == false">
          <ButtonComponent type="primary">Sign in</ButtonComponent>
        </RouterLink>
      </div>
    </div>
    <div v-if="isProductsView()" class="block lg:hidden w-full transition-all"
    :class="{'hidden' : isScrolled}">
      <div class="form-control w-full">
        <div class="relative">
          <i
            class="ph-bold ph-magnifying-glass absolute top-1/2 transform -translate-y-1/2 left-3 text-neutral"
          ></i>
          <input
            v-model="searchQuery"
            type="text"
            class="input input-bordered w-full md:w-[500px] pl-[40px] placeholder:text-gray-500 text-neutral"
            placeholder="Search product..."
            @keyup.enter="performSearch"
          />
        </div>
      </div>
    </div>
  </div>

  <RouterView />
</template>
