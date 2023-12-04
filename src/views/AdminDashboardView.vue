<script setup>
import DefaultLayout from '../container/DefaultLayout.vue'
import ButtonComponent from '../components/ButtonComponent.vue'
import { useUsersStore,  } from '../stores/users'
import {ref, onBeforeMount,watchEffect} from 'vue'
import { useProductsStore } from '../stores/products'
import formatToRupiah from '../helper/formatRupiah'

const { getCurrentUser, checkLocalStorage } = useUsersStore()
const {getProducts,products, deleteProduct} = useProductsStore();

const user = ref(null)
onBeforeMount(() => {
  checkLocalStorage()
  getProducts
  user.value = getCurrentUser
})

const productId = ref(null)

const openDelete = (id) => {
  console.log();
  productId.value = id
}

watchEffect(() => {
  checkLocalStorage()
  getProducts
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
  <!-- add modal -->
  <dialog id="add_modal" class="modal">
    <div class="modal-box">
      <form method="dialog">
        <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
      </form>
      <h3 class="font-bold text-lg mb-4">Add Product</h3>
      <div class="flex gap-1 items-end">
        <img src="/image/product.png" class="object-cover w-[80px] h-[80px]" alt="product" />
        <button class="btn btn-xs btn-neutral btn-outline rounded-[4px] mb-2">Upload Photo</button>
      </div>
      <div class="flex flex-col gap-4">
        <div class="flex flex-col gap-1 w-full mt-6">
          <label htmlFor="text" class="text-xs"> Name </label>
          <input
            type="text"
            placeholder="Type your name"
            class="input input-bordered rounded-[6px] w-full input-sm"
          />
        </div>
        <div class="flex flex-col gap-1 w-full">
          <label htmlFor="text" class="text-xs"> Price </label>
          <input
            type="text"
            placeholder="Type your price"
            class="input input-bordered rounded-[6px] w-full input-sm"
          />
        </div>
        <div class="flex flex-col gap-1 w-full">
          <label htmlFor="text" class="text-xs"> Stock </label>
          <input
            type="text"
            placeholder="Type your stock"
            class="input input-bordered rounded-[6px] w-full input-sm"
          />
        </div>
        <div class="flex flex-col gap-1 w-full">
          <label htmlFor="text" class="text-xs"> Description </label>
          <textarea
            type="text"
            placeholder="Type your description"
            class="input input-bordered rounded-[6px] w-full input-sm"
            rows="3"
          ></textarea>
        </div>
      </div>
      <form method="dialog">
        <div class="flex gap-4 mt-8">
          <ButtonComponent type="secondary" class="btn-sm">
            <p>Cancel</p>
          </ButtonComponent>
          <ButtonComponent type="primary" class="btn-sm btn-neutral text-white">
            <p>Save</p>
          </ButtonComponent>
        </div>
      </form>
    </div>
  </dialog>

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

  <!-- confirmation modal -->
  <dialog id="confirmation" class="modal">
    <div class="modal-box">
      <form method="dialog">
        <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
      </form>
      <h3 class="font-bold text-lg">Confirmation</h3>
      <p class="text-sm mt-2">Are you sure want to cancel this transaction?</p>
      <form method="dialog">
        <div class="flex gap-4 mt-8">
          <ButtonComponent type="secondary" class="btn-sm">
            <p>No</p>
          </ButtonComponent>
          <ButtonComponent type="primary" class="btn-sm btn-error text-white" @click="openDelete">
            <p>Cancel</p>
          </ButtonComponent>
        </div>
      </form>
    </div>
  </dialog>

  <!-- approve modal -->
  <dialog id="approve" class="modal">
    <div class="modal-box">
      <form method="dialog">
        <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
      </form>
      <h3 class="font-bold text-lg">Confirmation</h3>
      <p class="text-sm mt-2">Are you sure want to approve this transaction?</p>
      <form method="dialog">
        <div class="flex gap-4 mt-8">
          <ButtonComponent type="secondary" class="btn-sm">
            <p>Cancel</p>
          </ButtonComponent>
          <ButtonComponent type="primary" class="btn-sm btn-neutral text-white">
            <p>Approve</p>
          </ButtonComponent>
        </div>
      </form>
    </div>
  </dialog>

  <!-- edit modal -->
  <dialog id="edit_modal" class="modal">
    <div class="modal-box">
      <form method="dialog">
        <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
      </form>
      <h3 class="font-bold text-lg mb-4">Edit Product</h3>
      <div class="flex gap-1 items-end">
        <img src="/image/product.png" class="object-cover w-[80px] h-[80px]" alt="product" />
        <button class="btn btn-xs btn-neutral btn-outline rounded-[4px] mb-2">Change</button>
      </div>
      <div class="flex flex-col gap-4">
        <div class="flex flex-col gap-1 w-full mt-6">
          <label htmlFor="text" class="text-xs"> Name </label>
          <input
            type="text"
            value="Elegant Suit"
            placeholder="Type your name"
            class="input input-bordered rounded-[6px] w-full input-sm"
          />
        </div>
        <div class="flex flex-col gap-1 w-full">
          <label htmlFor="text" class="text-xs"> Price </label>
          <input
            type="text"
            value="Rp. 120.000"
            placeholder="Type your price"
            class="input input-bordered rounded-[6px] w-full input-sm"
          />
        </div>
        <div class="flex flex-col gap-1 w-full">
          <label htmlFor="text" class="text-xs"> Stock </label>
          <input
            type="text"
            value="10"
            placeholder="Type your stock"
            class="input input-bordered rounded-[6px] w-full input-sm"
          />
        </div>
        <div class="flex flex-col gap-1 w-full">
          <label htmlFor="text" class="text-xs"> Description </label>
          <textarea
            type="text"
            placeholder="Type your description"
            class="input input-bordered rounded-[6px] w-full input-sm"
            rows="3"
            value="lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum."
          ></textarea>
        </div>
      </div>
      <form method="dialog">
        <div class="flex gap-4 mt-8">
          <ButtonComponent type="secondary" class="btn-sm">
            <p>Cancel</p>
          </ButtonComponent>
          <ButtonComponent type="primary" class="btn-sm btn-neutral text-white">
            <p>Save</p>
          </ButtonComponent>
        </div>
      </form>
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
            <a to="#order">
              <i class="ph-bold ph-credit-card"></i>
              Transaction
            </a>
          </li>
          <div class="divider my-0"></div>
          <li>
            <a href="#products">
              <i class="ph-bold ph-package"></i>
              Products
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
                <img src="/image/user.png" class="object-cover w-full h-full" alt="user" />
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

          <!--  All Transaction -->
          <div class="w-full p-10 bg-white rounded-[16px] overflow-x-auto" id="order">
            <h4 class="font-semibold">All Transactions</h4>
            <div class="divider"></div>
            <div class="flex flex-col gap-4">
              <!-- header -->
              <div
                class="grid grid-cols-5 gap-3 w-full items-center font-semibold min-w-[500px] bg-neutral-300 p-5 rounded-[6px]"
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
                <div class="w-full">
                  <p class="text-sm">Action</p>
                </div>
              </div>

              <div class="grid grid-cols-5 gap-3 w-full items-center px-5 py-3 font-semibold min-w-[500px]">
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
                <div class="w-full">
                  <button
                    class="btn btn-ghost btn-sm text-lg text-red-500"
                    onclick="confirmation.showModal()"
                  >
                    <i class="ph-bold ph-x-circle"></i>
                  </button>
                  <button class="btn btn-ghost text-lg btn-sm" onclick="approve.showModal()">
                    <i class="ph-bold ph-check-circle"></i>
                  </button>
                </div>
              </div>
              <div class="grid grid-cols-5 gap-3 w-full items-center px-5 py-3 font-semibold min-w-[500px]">
                <div class="w-full">
                  <p class="text-sm">Rp. 200.000</p>
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
                <div class="w-full"></div>
              </div>
              <div class="grid grid-cols-5 gap-3 w-full items-center px-5 py-3 font-semibold min-w-[500px]">
                <div class="w-full">
                  <p class="text-sm">Rp. 200.000</p>
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
                <div class="w-full"></div>
              </div>
            </div>
          </div>

          <!--  Products -->
          <div class="w-full p-10 bg-white rounded-[16px] overflow-x-auto" id="products">
            <div class="flex justify-between items-end">
              <h4 class="font-semibold">All Products</h4>
              <ButtonComponent type="primary" class="btn-sm" onclick="add_modal.showModal()">
                <i class="ph-bold ph-plus"></i>
                <p>Product</p>
              </ButtonComponent>
            </div>
            <div class="divider"></div>
            <div class="flex flex-col gap-4">
              <!-- header -->
              <div
                class="grid grid-cols-4 gap-4 w-full items-center font-semibold bg-neutral-300 p-5 rounded-[6px] min-w-[500px]"
              >
                <div class="w-full">
                  <p class="text-sm">Photo</p>
                </div>
                <div class="w-full">
                  <p class="text-sm">Name</p>
                </div>
                <div class="w-full">
                  <p class="text-sm">Price</p>
                </div>
                <div class="w-full">
                  <p class="text-sm">Action</p>
                </div>
              </div>

              <div v-for="product in products" :key="product.id" class="grid grid-cols-4 gap-4 w-full items-center px-5 py-3 font-semibold min-w-[500px]">
                <div class="w-full">
                  <img
                    :src="product.image"
                    class="object-cover w-[60px] h-[60px]"
                    alt="product"
                  />
                </div>
                <div class="w-full">
                  <p class="text-sm">{{ product.name }}</p>
                </div>
                <div class="w-full">
                  <p class="text-sm font-medium">{{ formatToRupiah(product.price) }}</p>
                </div>
                <div class="w-full flex gap-1">
                  <!-- create button delete product and edit product -->
                  <button
                    class="btn btn-ghost text-red-500 text-lg btn-sm"
                    @click="deleteProduct(product.id)"
                  >
                    <i class="ph-bold ph-trash"></i>
                  </button>
                  <button class="btn btn-ghost text-lg btn-sm" onclick="edit_modal.showModal()">
                    <i class="ph-bold ph-note-pencil"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
    </DefaultLayout>
  </main>
</template>
