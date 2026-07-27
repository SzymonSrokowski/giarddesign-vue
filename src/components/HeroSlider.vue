<script setup lang="ts">
import { computed, ref } from "vue";
import { slides } from "../data/slides";

const activeIndex = ref(0);
const activeSlide = computed(() => slides[activeIndex.value]);

function changeSlide(direction: -1 | 1) {
  activeIndex.value =
    (activeIndex.value + direction + slides.length) % slides.length;
}
</script>

<template>
  <section class="grid min-h-[calc(100svh-72px)] bg-[#dcc1ab] lg:grid-cols-2">
    <div class="flex items-center px-6 py-16 sm:px-10 lg:px-[calc((100vw-1260px)/2)] lg:pr-16">
      <Transition name="slide-copy" mode="out-in">
        <div :key="activeIndex" class="w-full max-w-[600px]">
          <h1
            class="text-[42px] font-medium leading-[1.08] tracking-[-0.025em] sm:text-[52px] lg:text-[60px] lg:leading-[70px]"
          >
            {{ activeSlide.title }}
          </h1>
          <p class="mt-8 max-w-[490px] text-sm leading-6">
            {{ activeSlide.description }}
          </p>
          <div class="mt-12 flex flex-wrap gap-4">
            <a
              href="#kontakt"
              class="rounded-full bg-[#1b5b31] px-6 py-3 text-sm text-white transition hover:-translate-y-0.5 hover:bg-[#144725]"
            >
              Skontaktuj się z nami
            </a>
            <a
              href="#realizacje"
              class="flex items-center gap-2 rounded-full border border-[#1b5b31] px-6 py-3 text-sm text-[#1b5b31] transition hover:bg-[#1b5b31] hover:text-white"
            >
              Zobacz nasze realizacje
              <span aria-hidden="true">↓</span>
            </a>
          </div>
        </div>
      </Transition>
    </div>

    <div class="relative min-h-[480px] overflow-hidden lg:min-h-[737px]">
      <Transition name="hero-image" mode="out-in">
        <img
          :key="activeIndex"
          :src="activeSlide.image"
          :alt="activeSlide.imageAlt"
          class="absolute inset-0 h-full w-full object-cover"
        />
      </Transition>

      <div class="absolute bottom-0 right-0 flex bg-white">
        <button
          type="button"
          class="grid h-24 w-24 place-items-center text-4xl transition hover:bg-[#f5f0ec]"
          aria-label="Poprzedni slajd"
          @click="changeSlide(-1)"
        >
          ←
        </button>
        <button
          type="button"
          class="grid h-24 w-24 place-items-center text-4xl transition hover:bg-[#f5f0ec]"
          aria-label="Następny slajd"
          @click="changeSlide(1)"
        >
          →
        </button>
      </div>
    </div>
  </section>
</template>

<style scoped>
.slide-copy-enter-active,
.slide-copy-leave-active,
.hero-image-enter-active,
.hero-image-leave-active {
  transition:
    opacity 280ms ease,
    transform 320ms ease;
}

.slide-copy-enter-from {
  opacity: 0;
  transform: translateX(24px);
}

.slide-copy-leave-to {
  opacity: 0;
  transform: translateX(-24px);
}

.hero-image-enter-from,
.hero-image-leave-to {
  opacity: 0;
  transform: scale(1.02);
}

@media (prefers-reduced-motion: reduce) {
  .slide-copy-enter-active,
  .slide-copy-leave-active,
  .hero-image-enter-active,
  .hero-image-leave-active {
    transition: none;
  }
}
</style>
