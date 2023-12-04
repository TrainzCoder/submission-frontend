<template>
  <footer>
    <div class="bg-gray-800 text-white pt-10 w-full">
      <div class="px-4 md:px-[80px]">
        <div class="flex flex-col md:flex-row justify-between gap-[100px]">
          <div class="w-full md:w-[400px]">
            <h5 class="font-bold mb-5">E-Store</h5>
            <p class="mb-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum
              voluptates. Quisquam, voluptatum voluptates.
            </p>
            <div class="flex gap-5 text-xl">
              <a href="#" class="text-white hover:text-gray-400 transition-all duration-300">
                <i class="ph-bold ph-facebook-logo"></i>
              </a>
              <a href="#" class="text-white hover:text-gray-400 transition-all duration-300">
                <i class="ph-bold ph-instagram-logo"></i>
              </a>
              <a href="#" class="text-white hover:text-gray-400 transition-all duration-300">
                <i class="ph-bold ph-twitter-logo"></i>
              </a>
            </div>
          </div>
          <div class="w-full md:w-[400px]">
            <h5 class=" font-bold mb-5">Quick Link</h5>
            <ul class="flex flex-col gap-2 text-sm">
              <li>
                <a href="#" class="hover:text-gray-400 transition-all duration-300">About Us</a>
              </li>
              <li>
                <a href="#" class="hover:text-gray-400 transition-all duration-300">Contact Us</a>
              </li>
              <li>
                <a href="#" class="hover:text-gray-400 transition-all duration-300"
                  >Privacy Policy</a
                >
              </li>
              <li>
                <a href="#" class="hover:text-gray-400 transition-all duration-300"
                  >Terms & Condition</a
                >
              </li>
              <li>
                <a href="#" class="hover:text-gray-400 transition-all duration-300"
                  >Help & Support</a
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
      <aside class="py-6 mt-12 text-center text-xs text-gray-300 border-t border-gray-600 w-full">
        <p>Copyright © 2023 - All right reserved by E-Store</p>
      </aside>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'FooterComponent'
}
</script>
