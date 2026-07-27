<script setup lang="ts">
import { onMounted, onUnmounted } from "vue";
import AppHeader from "./components/AppHeader.vue";
import AboutSection from "./components/AboutSection.vue";
import AppFooter from "./components/AppFooter.vue";
import HeroSlider from "./components/HeroSlider.vue";
import InstagramSection from "./components/InstagramSection.vue";
import OfferSection from "./components/OfferSection.vue";
import ProjectsGallery from "./components/ProjectsGallery.vue";

let observer: IntersectionObserver | undefined;

onMounted(() => {
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer?.unobserve(entry.target);
      });
    },
    { threshold: 0.14 },
  );

  document
    .querySelectorAll("[data-reveal]")
    .forEach((element) => observer?.observe(element));
});

onUnmounted(() => observer?.disconnect());
</script>

<template>
  <div class="min-h-screen overflow-x-hidden bg-white text-[#111]">
    <AppHeader />
    <main>
      <HeroSlider />
      <OfferSection />
      <AboutSection />
      <ProjectsGallery />
      <InstagramSection />
    </main>
    <AppFooter />
  </div>
</template>

<style>
[data-reveal] {
  opacity: 0;
  transform: translateY(30px);
  transition:
    opacity 600ms ease,
    transform 600ms ease;
}

[data-reveal].is-visible {
  opacity: 1;
  transform: translateY(0);
}

@media (prefers-reduced-motion: reduce) {
  [data-reveal] {
    opacity: 1;
    transform: none;
    transition: none;
  }
}
</style>
