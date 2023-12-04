<script setup>
import DefaultLayout from '../container/DefaultLayout.vue'
import FooterComponent from '../components/FooterComponent.vue'
import ButtonComponent from '../components/ButtonComponent.vue'
import ProductReviewCard from '../components/ProductReviewCard.vue'
</script>

<script>
import "keen-slider/keen-slider.min.css"
import KeenSlider from "keen-slider"

function ThumbnailPlugin(main) {
  return (slider) => {
    function removeActive() {
      slider.slides.forEach((slide) => {
        slide.classList.remove("active")
      })
    }
    function addActive(idx) {
      slider.slides[idx].classList.add("active")
    }

    function addClickEvents() {
      slider.slides.forEach((slide, idx) => {
        slide.addEventListener("click", () => {
          main.moveToIdx(idx)
        })
      })
    }

    slider.on("created", () => {
      addActive(slider.track.details.rel)
      addClickEvents()
      main.on("animationStarted", (main) => {
        removeActive()
        const next = main.animator.targetIdx || 0
        addActive(main.track.absToRel(next))
        slider.moveToIdx(Math.min(slider.track.details.maxIdx, next))
      })
    })
  }
}

export default {
  name: "Slider",
  mounted() {
    this.slider = new KeenSlider(this.$refs.slider)
    this.thumbnail = new KeenSlider(
      this.$refs.thumbnail,
      {
        initial: 0,
        slides: {
          perView: 3,
          spacing: 10,
        },
      },
      [ThumbnailPlugin(this.slider)]
    )
  },
  beforeUnmount() {
    if (this.slider) this.slider.destroy()
    if (this.thumbnail) this.thumbnail.destroy()
  },
}
</script>

<template>
  <DefaultLayout class="mt-[100px] mb-[80px]">
    <section className="flex flex-col lg:flex-row gap-[40px] ">
      <div className="lg:min-w-[550px] lg:max-w-[500px]">
        <div ref="slider" class="keen-slider">
          <div class="keen-slider__slide flex justify-center items-center rounded-[6px] w-full border border-neutral-400">
            <img src="/image/product.png" class="object-contain w-full h-[291px]" alt="product" />
          </div>
          <div class="keen-slider__slide flex justify-center items-center rounded-[6px] w-full border border-neutral-400">
            <img src="/image/product2.png" class="object-contain w-full h-[291px]" alt="product" />
          </div>
          <div class="keen-slider__slide flex justify-center items-center rounded-[6px] w-full border border-neutral-400">
            <img src="/image/product3.png" class="object-contain w-full h-[291px]" alt="product" />
          </div>
        </div>
        <div ref="thumbnail" class="keen-slider  w-full mt-4">
          <div class="keen-slider__slide cursor-pointer flex justify-center items-center rounded-[6px] w-full border border-neutral-400">
            <img src="/image/product.png" class="object-cover w-full md:h-[120px] lg:h-[80px] h-[80px]" alt="product" />
          </div>
          <div class="keen-slider__slide cursor-pointer flex justify-center items-center rounded-[6px] w-full border border-neutral-400">
            <img src="/image/product2.png" class="object-cover w-full md:h-[120px] lg:h-[80px] h-[80px]" alt="product" />
          </div>
          <div class="keen-slider__slide cursor-pointer flex justify-center items-center rounded-[6px] w-full border border-neutral-400">
            <img src="/image/product3.png" class="object-cover w-full md:h-[120px] lg:h-[80px] h-[80px]" alt="product" />
          </div>
        </div>
      </div>
      <div className="w-full">
        <h3>
          Elegant Suits
        </h3>
        <div className="flex gap-2 items-center mb-4 mt-2">
          <div className="flex gap-1 items-center">
            <i class="ph-fill ph-star text-yellow-500"></i>
            <i class="ph-fill ph-star text-yellow-500"></i>
            <i class="ph-fill ph-star text-yellow-500"></i>
            <i class="ph-fill ph-star text-yellow-500"></i>
            <i class="ph-fill ph-star text-yellow-500"></i> 
          </div>
          <span className="text-sm text-gray-500">(10)</span>
          <p>| 10 Terjual</p>
        </div>
        <h3 className="text-2xl text-brand font-semibold mb-4">Rp 399.999</h3>
        <p className="mb-4 font-medium">Stock Tersisa : 5</p>
        <p className="mb-6 text-justify lg:text-left">
            Indulge in the sophistication of our Executive Suit Collection – a fusion of timeless style and unparalleled comfort. Crafted with precision, this exquisite suit is tailored for the modern gentleman who appreciates both luxury and functionality.
        </p>
        <div className="flex items-center w-full">
          <RouterLink to="/cart" class="w-full"> 
            <ButtonComponent type="primary" class="w-full"> 
            <p>
              Add to Cart
            </p>
          </ButtonComponent>
          </RouterLink>   
        </div>
      </div>

      <!--  Ulasan Produk -->
    </section>
    <section className=" mt-[80px] lg:mt-[100px]">
      <div className="flex flex-col lg:flex-row gap-[10px] lg:gap-[20px] items-start">
        <div className="w-full">
          <div className="mt-8 mb-6">
            <h3 className="text-2xl font-semibold">Product's Review</h3>
          </div>

          <div className="flex flex-col gap-5">
            <ProductReviewCard
              reviewerName="Sarah"
              :rating="4"
              reviewDate="10/08/2023"
              reviewContent="I absolutely adore this dress! The fabric feels luxurious and the fit is perfect."
            />
            <ProductReviewCard
              reviewerName="Thomas"
              :rating="4"
              reviewDate="10/09/2023"
              reviewContent="Surprisingly comfortable! Despite its sophisticated appearance, the dress allows for ease of movement. The fabric breathes well, making it a joy to wear for extended periods."
            />
            <ProductReviewCard
              reviewerName="Farah"
              :rating="4"
              reviewDate="15/08/2023"
              reviewContent="I stumbled upon this elegant red dress. The moment I slipped into it, I felt an instant boost of confidence. The rich, vibrant color and the luxurious fabric accentuated my curves flawlessly."
            />
            <ProductReviewCard
              reviewerName="James"
              :rating="4"
              reviewDate="12/08/2023"
              reviewContent="I absolutely adore this dress! The fabric feels luxurious and the fit is perfect."
            />
            <ProductReviewCard
              reviewerName="Anne"
              :rating="4"
              reviewDate="11/08/2023"
              reviewContent="Surprisingly comfortable! Despite its sophisticated appearance, the dress allows for ease of movement. The fabric breathes well, making it a joy to wear for extended periods."
            />
          </div>
        </div>
      </div>
    </section>
  </DefaultLayout>

  <FooterComponent />
</template>

<style scoped>
.active {
    @apply border border-neutral-800 border-2;
}
</style>