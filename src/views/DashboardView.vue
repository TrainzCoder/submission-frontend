<script setup>
import DefaultLayout from '../container/DefaultLayout.vue'
import ButtonComponent from '../components/ButtonComponent.vue'
import { useUsersStore,  } from '../stores/users'
import {ref, onBeforeMount} from 'vue'

const { getCurrentUser, checkLocalStorage } = useUsersStore()

const user = ref(null)
onBeforeMount(() => {
  checkLocalStorage()
  user.value = getCurrentUser
})
</script>

<script>
export default {
  data() {
    return {
      showPassword: false
    }
  },
  methods: {
    togglePasswordVisibility() {
      this.showPassword = !this.showPassword
    }
  }
}
</script>

<template>
  <!-- detail modal -->
  <dialog id="detail" class="modal">
    <div class="modal-box">
      <form method="dialog">
        <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
      </form>
      <h3 class="font-bold text-lg">Detail Transaction</h3>
      <!-- create list product we buy show image, name, stock, price -->
      <div class="flex gap-4 items-center mt-4">
        <div class="w-[100px] h-[100px] rounded-[6px]">
          <img src="/image/product.png" class="object-cover w-full h-full" alt="" />
        </div>
        <div class="flex flex-col gap-2">
          <h5 class="font-semibold">Suit</h5>
          <p class="text-sm">Rp. 100.000</p>
          <p class="text-sm">Quatity : 1</p>
        </div>
      </div>
    </div>
  </dialog>

  <main class="w-full min-h-screen bg-neutral-200">
    <DefaultLayout class="mt-[70px] py-8">
      <section class="flex gap-8 items-start">
        <ul class="menu menu-lg bg-white w-56 rounded-[16px] hidden md:block">
          <li>
            <a href="#profile">
              <i class="ph-bold ph-user-circle"></i>
              Profile
            </a>
          </li>
          <div class="divider my-0"></div>
          <li>
            <a href="#order">
              <i class="ph-bold ph-credit-card"></i>
              Order
            </a>
          </li>
        </ul>
        <section class="w-full grid grid-cols-1 gap-6">
          <!-- personal information -->
          <div class="w-full p-10 bg-white rounded-[16px]" id="profile">
            <h4 class="font-semibold">Personal Information</h4>
            <div class="divider"></div>
            <div class="flex gap-6 items-start">
              <div class="w-[150px] h-[150px] rounded-[6px] overflow-hidden">
                <img src="/image/user.png" class="object-cover w-full h-full" alt="" />
              </div>
              <div class="flex flex-col gap-2">
                <h5 class="font-semibold">{{ user.name }}</h5>
                <p class="">{{ user.email }}</p>
                <div class="flex gap-2 items-center">
                  <p class="text-sm">{{ showPassword ? user.password : '********' }}</p>
                  <i
                    class="ph-bold"
                    :class="[
                      showPassword ? 'ph-eye' : 'ph-eye-slash',
                      'text-neutral-500',
                      'cursor-pointer'
                    ]"
                    @click="togglePasswordVisibility"
                  ></i>
                </div>
              </div>
            </div>
          </div>

          <!--  order -->
          <div class="w-full p-10 bg-white rounded-[16px] overflow-x-auto" id="order">
            <h4 class="font-semibold">Order History</h4>
            <div class="divider"></div>
            <div class="flex flex-col gap-4">
              <!-- create header of list order history contain amount price, date, status, detail(button) -->
              <div
                class="grid grid-cols-4 gap-4 w-full items-center font-semibold bg-neutral-300 p-5 rounded-[6px] min-w-[500px]"
              >
                <div class="w-full">
                  <p class="text-sm">Amount Price</p>
                </div>
                <div class="w-full">
                  <p class="text-sm">Date</p>
                </div>
                <div class="w-full">
                  <p class="text-sm">Status</p>
                </div>
                <div class="w-full">
                  <p class="text-sm">Detail</p>
                </div>
              </div>
              <!-- create list order history -->
              <div class="grid grid-cols-4 gap-4 w-full items-center px-5 py-3 font-semibold min-w-[500px]">
                <div class="w-full">
                  <p class="text-sm">Rp. 200.000</p>
                </div>
                <div class="w-full">
                  <p class="text-sm">12-12-2021</p>
                </div>
                <div class="w-full">
                  <p class="text-sm font-medium text-yellow-500">Pending</p>
                </div>
                <div class="w-full">
                  <ButtonComponent type="secondary" class="btn-sm" onclick="detail.showModal()">
                    <p>Detail</p>
                  </ButtonComponent>
                </div>
              </div>
              <div class="grid grid-cols-4 gap-4 w-full items-center px-5 py-3 font-semibold min-w-[500px]">
                <div class="w-full">
                  <p class="text-sm">Rp. 80.000</p>
                </div>
                <div class="w-full">
                  <p class="text-sm">12-12-2021</p>
                </div>
                <div class="w-full">
                  <p class="text-sm font-medium text-red-500">Canceled</p>
                </div>
                <div class="w-full">
                  <ButtonComponent type="secondary" class="btn-sm" onclick="detail.showModal()">
                    <p>Detail</p>
                  </ButtonComponent>
                </div>
              </div>
              <div class="grid grid-cols-4 gap-4 w-full items-center px-5 py-3 font-semibold min-w-[500px]">
                <div class="w-full">
                  <p class="text-sm">Rp. 100.000</p>
                </div>
                <div class="w-full">
                  <p class="text-sm">12-12-2021</p>
                </div>
                <div class="w-full">
                  <p class="text-sm font-medium text-green-500">Success</p>
                </div>
                <div class="w-full">
                  <ButtonComponent type="secondary" class="btn-sm" onclick="detail.showModal()">
                    <p>Detail</p>
                  </ButtonComponent>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
    </DefaultLayout>
  </main>
</template>
