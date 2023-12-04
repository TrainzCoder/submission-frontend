<script setup>
import { RouterLink, useRouter } from 'vue-router'
import { ref, } from 'vue';
import { useUsersStore } from '../stores/users';
import DefaultLayout from '../container/DefaultLayout.vue'
import ButtonComponent from '../components/ButtonComponent.vue'
import FooterComponent from '../components/FooterComponent.vue';

const store = useUsersStore();
const router = useRouter();

const name = ref('');
const email = ref('');
const password = ref('');
const errorMessage = ref('');


const register = () => {
  if (!name.value || !email.value || !password.value) {
    return;
  }

  try {
    const user = {
      name: name.value,
      email: email.value,
      password: password.value,
      role: 'user',
    };

    store.registerUser(user);
    router.push({ name: 'login' });
    console.log("register sucess");
    errorMessage.value='';
  } catch (error) {
    console.error('Registration failed:', error.message);
    errorMessage.value = error.message;
  }
}

</script>

<template>
  <DefaultLayout class="mt-[100px]">
    <section class=" lg:flex justify-center lg:justify-between gap-0 lg:gap-[80px] items-center min-h-screen">
      <div data-aos="fade-right" class="hidden lg:block">
        <img src="/image/catalogue.gif" class="w-[450px]" alt="login" />
      </div>
      <div data-aos="fade-left">
        <section
          class="my-[40px] lg:my-[80px] shadow-md border border-neutral-300 rounded-[6px] w-full lg:w-[500px] p-[20px]"
        >
          <div class="flex justify-center w-full py-5 text-sm text-red-500 bg-red-100 rounded-[6px]" v-if="errorMessage">
           {{ errorMessage  }}
          </div>
          <div class="flex flex-col gap-1">
            <h3 class="text-center">Register Now</h3>
            <p class="text-center text-[14px]">
              Already have an account?
                <RouterLink to="/login" class="hover:underline text-brand font-medium">Sign in</RouterLink>
            </p>
          </div>

          <div class="flex flex-col items-center gap-4 mt-7 w-full">
            <div class="relative w-full">
              <button
                class="flex items-center rounded-[6px] border border-gray-400 justify-center w-full px-4 py-2 text-second focus:outline-none font-semibold hover:border-gray-800"
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
              <span class="mx-4 text-xs text-gray-500 block min-w-[90px]">Or register with</span>
              <div class="border-t border-gray-300 w-full"></div>
            </div>

            <div class="flex flex-col gap-1 w-full">
              <label class="form-control w-full">
                <div class="label">
                  <span class="label-text">Name</span>
                </div>
                <input
                  type="text"
                  placeholder="Type your name"
                  v-model="name"
                  required
                  class="input input-bordered w-full"
                />
              </label>
            </div>
            <div class="flex flex-col gap-1 w-full">
              <label class="form-control w-full">
                <div class="label">
                  <span class="label-text">Email</span>
                </div>
                <input
                  type="email"
                  placeholder="Type your email"
                  v-model="email"
                  required
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
                <ButtonComponent type="primary" :onClick="register">
                    <p>Register</p>
                </ButtonComponent>
            </div>
            <p class="text-xs text-center w-[300px] lg:w-[400px]">
                In registering, I agree to the Terms and Conditions as well as the Privacy Policy.
            </p>
          </div>
        </section>
      </div>
    </section>
  </DefaultLayout>

  <FooterComponent />
</template>
