<script setup>
import { RouterLink } from 'vue-router'
import ButtonComponent from '../components/ButtonComponent.vue'
import DefaultLayout from '../container/defaultLayout.vue'
import FooterComponent from '../components/FooterComponent.vue'
import UserTestimoni from '../components/UserTestimoni.vue'
</script>

<script>
import 'keen-slider/keen-slider.min.css'
import KeenSlider from 'keen-slider'

export default {
  computed: {
    dotHelper() {
      return this.slider ? [...Array(this.slider.track.details.slides.length).keys()] : []
    }
  },
  data() {
    return {
      current: 1,
      slider: null
    }
  },
  mounted() {
    this.slider = new KeenSlider(this.$refs.slider, {
      initial: this.current,
      loop: true,
      breakpoints: {
        '(min-width: 516px)': {
          slides: { perView: 2, spacing: 15 }
        },
        '(min-width: 1360px)': {
          slides: { perView: 3, spacing: 15 }
        }
      },
      slides: { perView: 1 },
      Changed: (s) => {
        this.current = s.track.details.rel
      }
    })
  },
  beforeUnmount() {
    if (this.slider) this.slider.destroy()
  }
}
</script>

<template>
  <DefaultLayout class="mt-[120px]">
    <!-- hero section -->
    <div data-aos="fade">
      <div class="hero min-h-[500px] bg-[url('/image/hero.png')] rounded-[16px]">
        <div class="hero-content text-center text-neutral-content">
          <div class="max-w-md">
            <h1 class="mb-5 text-5xl font-bold" data-aos="fade-up" data-aos-delay="300">
              Collection is here
            </h1>
            <p class="mb-5" data-aos="fade-up" data-aos-delay="600">
              The time is now for it to be okay to be great. People in this world shun people for
              being great. For being a bright color. For standing out.
            </p>
            <div data-aos="fade-up" data-aos-delay="900">
              <RouterLink to="/products" class="mt-4">
                <ButtonComponent type="glassmorph">
                  <p>Get Collection</p>
                </ButtonComponent>
              </RouterLink>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- kategori -->
    <div data-aos="fade-up">
      <section class="text-center mt-[100px] mb-[80px]">
        <h3>Shop by Category</h3>
        <div class="grid grid-cols-1 lg:grid-cols-4 gap-[20px] mt-16">
          <div
            class="h-[240px] lg:h-[360px] bg-[url('/kategori/men.png')] bg-cover bg-center rounded-[16px] overflow-hidden"
          >
            <div
              class="w-full h-full flex justify-center items-end pb-8 bg-gradient-to-t from-[rgba(0,0,0,0.8)] to-[rgba(0,0,0,0.15)]"
            >
              <div class="text-white text-center">
                <h4 class="font-semibold mb-1">Suits</h4>
                <RouterLink to="/products">
                  <RouterLink to="/products">
                    <ButtonComponent
                      type="link"
                      class="text-sm flex items-center group hover:no-underline"
                    >
                      <p>See product</p>
                      <i
                        class="ph-bold ph-caret-right text-white transition-all group-hover:ml-2"
                      ></i>
                    </ButtonComponent>
                  </RouterLink>
                </RouterLink>
              </div>
            </div>
          </div>
          <div
            class="h-[240px] lg:h-[360px] bg-[url('/kategori/women.png')] bg-cover bg-center rounded-[16px] overflow-hidden"
          >
            <div
              class="w-full h-full flex justify-center items-end pb-8 bg-gradient-to-t from-[rgba(0,0,0,0.8)] to-[rgba(0,0,0,0.15)]"
            >
              <div class="text-white text-center">
                <h4 class="font-semibold mb-1">Silk Dresses</h4>
                <RouterLink to="/products">
                  <ButtonComponent
                    type="link"
                    class="text-sm flex items-center group hover:no-underline"
                  >
                    <p>See product</p>
                    <i
                      class="ph-bold ph-caret-right text-white transition-all group-hover:ml-2"
                    ></i>
                  </ButtonComponent>
                </RouterLink>
              </div>
            </div>
          </div>

          <div
            class="h-[240px] lg:h-[360px] bg-[url('/kategori/kids.png')] bg-cover bg-center rounded-[16px] overflow-hidden"
          >
            <div
              class="w-full h-full flex justify-center items-end pb-8 bg-gradient-to-t from-[rgba(0,0,0,0.8)] to-[rgba(0,0,0,0.15)]"
            >
              <div class="text-white text-center">
                <h4 class="font-semibold mb-1">Festival</h4>
                <RouterLink to="/products">
                  <ButtonComponent
                    type="link"
                    class="text-sm flex items-center group hover:no-underline"
                  >
                    <p>See product</p>
                    <i
                      class="ph-bold ph-caret-right text-white transition-all group-hover:ml-2"
                    ></i>
                  </ButtonComponent>
                </RouterLink>
              </div>
            </div>
          </div>

          <div
            class="h-[240px] lg:h-[360px] bg-[url('/kategori/accesories.png')] bg-cover bg-center rounded-[16px] overflow-hidden"
          >
            <div
              class="w-full h-full flex justify-center items-end pb-8 bg-gradient-to-t from-[rgba(0,0,0,0.8)] to-[rgba(0,0,0,0.15)]"
            >
              <div class="text-white text-center">
                <h4 class="font-semibold mb-1">Accesories</h4>
                <RouterLink to="/products">
                  <ButtonComponent
                    type="link"
                    class="text-sm flex items-center group hover:no-underline"
                  >
                    <p>See product</p>
                    <i
                      class="ph-bold ph-caret-right text-white transition-all group-hover:ml-2"
                    ></i>
                  </ButtonComponent>
                </RouterLink>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>

    <!-- Basic Staterpack -->
    <div data-aos="fade">
      <div class="hero min-h-[375px] bg-[url('/image/staterpack.png')] rounded-[16px]">
        <div class="hero-content text-center text-neutral-content">
          <div class="max-w-md">
            <h1 class="mb-5 text-5xl font-bold" data-aos="fade-up" data-aos-delay="300">
              Basic Starter Pack
            </h1>
            <p class="mb-5" data-aos="fade-up" data-aos-delay="600">
              The time is now for it to be okay to be great. People in this world shun people for
              being great. For being a bright color. For standing out.
            </p>
            <div data-aos="fade-up" data-aos-delay="900">
              <RouterLink to="/products" class="mt-4">
                <ButtonComponent type="glassmorph">
                  <p>Get Staterpack</p>
                </ButtonComponent>
              </RouterLink>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Product Feature -->
    <div data-aos="fade ">
      <section class="mt-[100px] text-center">
        <h3>Discover the Power of Our Product</h3>
        <p class="max-w-[600px] mx-auto mt-4">
          Step into the world of E-Store, where style meets sophistication. Explore an exquisite
          collection designed to redefine your fashion statement.
        </p>
        <div class="flex flex-col-reverse lg:flex-row lg:items-start gap-[40px] mt-[80px]">
          <div class="text-left md:min-w-[550px]">
            <h5 class="font-semibold mb-2">Your Style, Your Expression</h5>
            <p>
              At E-Store, fashion isn't just about clothing; it's an expression. Unleash your
              individuality with our diverse collection, blending innovation, comfort, and elegance
              seamlessly.
            </p>
            <div class="flex flex-col gap-8 mt-[40px]">
              <div class="flex gap-5 items-start">
                <div
                  class="w-5 h-5 max-w-5 max-h-5 mt-2 rounded-full bg-neutral flex items-center justify-center"
                >
                  <i class="ph-bold ph-check text-white text-xs"></i>
                </div>
                <p class="max-w-[290px] md:max-w-[450px]">
                  Trendsetting Designs: Stay ahead with our latest fashion-forward styles.
                </p>
              </div>

              <div class="flex gap-5 items-start">
                <div
                  class="w-5 h-5 max-w-5 max-h-5 mt-2 rounded-full bg-neutral flex items-center justify-center"
                >
                  <i class="ph-bold ph-check text-white text-xs"></i>
                </div>
                <p class="max-w-[290px] md:max-w-[450px]">
                  Quality Fabrics: Luxurious materials crafted for comfort and durability.
                </p>
              </div>

              <div class="flex gap-5 items-start">
                <div
                  class="w-5 h-5 max-w-5 max-h-5 mt-2 rounded-full bg-neutral flex items-center justify-center"
                >
                  <i class="ph-bold ph-check text-white text-xs"></i>
                </div>
                <p class="max-w-[290px] md:max-w-[450px]">
                  Versatile Wardrobe Staples: From casual chic to elegant evening wear.
                </p>
              </div>

              <div class="flex gap-5 items-start">
                <div
                  class="w-5 h-5 max-w-5 max-h-5 mt-2 rounded-full bg-neutral flex items-center justify-center"
                >
                  <i class="ph-bold ph-check text-white text-xs"></i>
                </div>
                <p class="max-w-[290px] md:max-w-[450px]">
                  Tailored Fits: Perfectly curated for every body type and preference.
                </p>
              </div>
            </div>
          </div>
          <div class="grid grid-cols-2 grid-rows-2 gap-[20px] overflow-hidden w-full">
            <div class="col-span-2">
              <div data-aos="fade-up">
                <img
                  class="rounded-[16px] object-cover h-[150px] md:h-[225px] w-full"
                  src="/feature/feature1.png"
                  alt="feature1"
                />
              </div>
            </div>
            <div data-aos="fade-right">
              <img
                class="rounded-[16px] object-cover h-[150px] md:h-[225px] w-full"
                src="/feature/feature2.png"
                alt="feature2"
              />
            </div>
            <div data-aos="fade-left">
              <img
                class="rounded-[16px] object-cover h-[150px] md:h-[225px] w-full"
                src="/feature/feature3.png"
                alt="feature3"
              />
            </div>
          </div>
        </div>
      </section>
    </div>

    <!-- discount -->
    <div data-aos="zoom-in">
      <div
        class="hero min-h-[500px] bg-[url('/image/discount.png')] rounded-[16px] mt-[100px] relative"
      >
        <div class="hero-content text-center text-neutral-content">
          <div class="max-w-[900px]">
            <h1
              class="mb-5 text-5xl text-neutral font-bold"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              Special Discounts for New Members
            </h1>
            <p
              class="mb-10 text-neutral max-w-[650px] mx-auto"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              The time is now for it to be okay to be great. People in this world shun people for
              being great. For being a bright color. For standing out.
            </p>
            <div data-aos="fade-up" data-aos-delay="800">
              <RouterLink to="/register" class="mt-4">
                <ButtonComponent type="primary">
                  <p>Register</p>
                </ButtonComponent>
              </RouterLink>
            </div>
          </div>
        </div>
        <!-- Separator with gradient -->
        <div class="absolute bottom-0 left-0 right-0 h-[120px] w-full">
          <div class="h-full w-full bg-gradient-to-t from-white to-transparent"></div>
        </div>
      </div>
    </div>

    <!-- testimoni -->
    <div data-aos="fade-up">
      <div class="my-[50px] mb-[100px]">
        <div class="navigation-wrapper">
          <div
            class="w-full flex flex-col md:flex-row gap-6 md:gap-0 justify-between items-end mb-8 md:mb-12"
          >
            <div class="max-w-[600px] text-center md:text-left">
              <h3>Our customer&lsquo;s opinion</h3>
              <p class="mt-1">
                Dive into a collection of authentic reviews that capture the essence of their
                encounters with our products and services.
              </p>
            </div>
            <div>
              <div class="flex items-center gap-2 justify-end text-xl">
                <button
                  @click="slider.prev()"
                  :class="{
                    arrow: true,
                    arrow: true
                  }"
                >
                  <i class="ph-bold ph-caret-left"></i>
                </button>
                <button
                  v-if="slider"
                  @click="slider.next()"
                  :class="{
                    arrow: true,
                    arrow: true
                  }"
                >
                  <i class="ph-bold ph-caret-right"></i>
                </button>
              </div>
            </div>
          </div>
          <div ref="slider" class="keen-slider">
            <div class="keen-slider__slide">
              <UserTestimoni
                :rating="4"
                comment="Highly impressed! Almost flawless, just a few tweaks away from perfection."
                name="John Doe"
              />
            </div>
            <div class="keen-slider__slide">
              <UserTestimoni
                :rating="5"
                comment="Absolutely thrilled with my purchase! The product exceeded my expectations in every way."
                name="Jane Doe"
              />
            </div>
            <div class="keen-slider__slide">
              <UserTestimoni
                :rating="5"
                comment="Outstanding experience! The team went above and beyond to ensure my satisfaction."
                name="Michael Theodore"
              />
            </div>
            <div class="keen-slider__slide">
              <UserTestimoni
                :rating="4"
                comment="Really pleased with my purchase! Just a slight adjustment would make it flawless."
                name="Michael Theodore"
              />
            </div>
            <div class="keen-slider__slide">
              <UserTestimoni
                :rating="5"
                comment="Love, love, love this product! It's a game-changer in every sense."
                name="Ana Roosevelt"
              />
            </div>
            <div class="keen-slider__slide">
              <UserTestimoni
                :rating="5"
                comment="I'm so glad I found this product! It's exactly what I've been looking for."
                name="Rei Nakamura"
              />
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- footer -->
  </DefaultLayout>
  <FooterComponent />
</template>
