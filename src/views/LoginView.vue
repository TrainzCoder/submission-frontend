<script setup>
import { RouterLink, useRouter } from 'vue-router'
import { ref,onMounted, watchEffect } from 'vue'
import DefaultLayout from '../container/DefaultLayout.vue'
import ButtonComponent from '../components/ButtonComponent.vue'
import FooterComponent from '../components/FooterComponent.vue'
import { useUsersStore } from '../stores/users'

const router = useRouter()
const {getUsers, loginUser, isLoggedIn} = useUsersStore()


const email = ref('')
const password = ref('')
const errorMessage = ref('')


onMounted(() => {
  getUsers
})

watchEffect(() => {
  isLoggedIn
  getUsers
  console.log("login" , getUsers)
})  


const login = () => {
  try {
    const credentials = {
      email: email.value,
      password: password.value
    }

    loginUser(credentials)
    router.push({ name: 'home' })
    console.log('login sucess')
    errorMessage.value = ''
  } catch (error) {
    console.error('Login failed:', error.message)
    errorMessage.value = error.message
  }
}
</script>

<template>
  <DefaultLayout class="mt-[100px]">
    <section class="flex justify-center w-full min-h-screen" data-aos="zoom-in">
      <div
        class="my-[40px] lg:my-[80px] mx-auto shadow-md border border-neutral-300 rounded-[6px] w-full lg:w-[500px] p-[20px]"
      >
        <div
          class="flex justify-center w-full py-5 mb-5 text-sm text-red-500 bg-red-100 rounded-[6px]"
          v-if="errorMessage"
        >
          {{ errorMessage }}
        </div>
        <div class="flex flex-col gap-1">
          <h3 class="text-center">Welcome Back</h3>
          <p class="text-center text-[14px]">
            Don't have an account?
            <RouterLink to="/register" class="hover:underline text-brand font-medium"
              >Register</RouterLink
            >
          </p>
        </div>

        <div class="flex flex-col items-center gap-4 mt-7 w-full">
          <div class="relative w-full">
            <button
              class="flex items-center border rounded-[6px] border-gray-400 justify-center w-full px-4 py-2 text-second focus:outline-none font-semibold hover:border-gray-800"
            >
              <img
                src="../assets/google.svg"
                class="w-[20px] h-[20px] absolute bottom-3 left-4"
                alt="google"
              />
              Google
            </button>
          </div>

          <div class="flex items-center justify-center my-4 w-full">
            <div class="border-t border-gray-300 w-full"></div>
            <span class="mx-4 text-xs text-gray-500 block min-w-[90px]">Or sign in with</span>
            <div class="border-t border-gray-300 w-full"></div>
          </div>

          <div class="flex flex-col gap-1 w-full">
            <label class="form-control w-full">
              <div class="label">
                <span class="label-text">Email</span>
              </div>
              <input
                type="email"
                placeholder="Type your email"
                required
                v-model="email"
                class="input input-bordered w-full"
              />
            </label>
          </div>
          <div class="flex flex-col gap-1 w-full">
            <label class="form-control w-full">
              <div class="label">
                <span class="label-text">Password</span>
              </div>
              <input
                type="password"
                placeholder="Type your password"
                required
                v-model="password"
                class="input input-bordered w-full"
              />
            </label>
          </div>
          <div class="flex flex-col gap-4 w-full mt-5">
            <ButtonComponent type="primary" :onClick="login">
              <p>Sign in</p>
            </ButtonComponent>
          </div>
        </div>
      </div>
    </section>
  </DefaultLayout>

  <FooterComponent />
</template>
