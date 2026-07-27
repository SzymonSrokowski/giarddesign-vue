<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref } from "vue";

type Project = {
  src: string;
  alt: string;
  height: string;
};

const projects: Project[] = [
  {
    src: "/images/project-green-steps.webp",
    alt: "Ogród na kilku poziomach",
    height: "h-[500px]",
  },
  {
    src: "/images/project-pool.webp",
    alt: "Taras z basenem",
    height: "h-[380px]",
  },
  {
    src: "/images/project-rose-arch.webp",
    alt: "Aleja pod różanym łukiem",
    height: "h-[540px]",
  },
  {
    src: "/images/project-timber.webp",
    alt: "Drewniana konstrukcja ogrodowa",
    height: "h-[440px]",
  },
  {
    src: "/images/project-pond.webp",
    alt: "Ozdobny staw z karpiami koi",
    height: "h-[510px]",
  },
  {
    src: "/images/project-forest-path.webp",
    alt: "Ścieżka w tropikalnym ogrodzie",
    height: "h-[460px]",
  },
  {
    src: "/images/project-pergola.webp",
    alt: "Nowoczesna pergola",
    height: "h-[430px]",
  },
  {
    src: "/images/project-skylight.webp",
    alt: "Geometryczne zadaszenie",
    height: "h-[380px]",
  },
  {
    src: "/images/project-spiral.webp",
    alt: "Spiralna architektura z zielenią",
    height: "h-[520px]",
  },
  {
    src: "/images/project-japanese.webp",
    alt: "Ogród japoński",
    height: "h-[460px]",
  },
  {
    src: "/images/project-pavilion.webp",
    alt: "Drewniany pawilon w ogrodzie",
    height: "h-[510px]",
  },
  {
    src: "/images/project-canopy.webp",
    alt: "Ażurowe zadaszenie tarasu",
    height: "h-[410px]",
  },
];

const expanded = ref(false);
const selectedProject = ref<Project | null>(null);

const visibleProjects = computed(() =>
  expanded.value ? projects : projects.slice(0, 9),
);

function openLightbox(project: Project) {
  selectedProject.value = project;
  document.body.style.overflow = "hidden";
}

function closeLightbox() {
  selectedProject.value = null;
  document.body.style.overflow = "";
}

function handleKeydown(event: KeyboardEvent) {
  if (event.key === "Escape") {
    closeLightbox();
  }
}

onMounted(() => {
  window.addEventListener("keydown", handleKeydown);
});

onUnmounted(() => {
  window.removeEventListener("keydown", handleKeydown);
  document.body.style.overflow = "";
});
</script>

<template>
  <section
    id="realizacje"
    class="relative overflow-hidden bg-[#dcc1ab] px-3 py-24 sm:px-6 lg:px-8 lg:py-32"
  >
    <div class="mx-auto max-w-[1540px]">
      <div class="px-2 sm:px-4" data-reveal>
        <p class="text-xs text-[#1b5b31]">
          Realizacje
        </p>

        <h2
          class="mt-4 text-4xl font-medium tracking-[-0.03em] sm:text-5xl"
        >
          Nasze <em class="font-normal">projekty</em>
        </h2>
      </div>

      <div class="mt-14 columns-1 gap-6 sm:columns-2 lg:columns-3">
        <button
          v-for="project in visibleProjects"
          :key="project.src"
          type="button"
          class="group relative mb-6 block w-full break-inside-avoid overflow-hidden bg-black"
          :aria-label="`Powiększ zdjęcie: ${project.alt}`"
          @click="openLightbox(project)"
        >
          <img
            :src="project.src"
            :alt="project.alt"
            :class="[
              'w-full object-cover transition duration-700 ease-out group-hover:scale-[1.07]',
              project.height,
            ]"
            loading="lazy"
          />

          <span
            class="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition duration-500 group-hover:opacity-100"
          />

          <span
            class="pointer-events-none absolute bottom-6 left-6 translate-y-4 text-left text-sm font-medium text-white opacity-0 transition duration-500 group-hover:translate-y-0 group-hover:opacity-100"
          >
            {{ project.alt }}
          </span>

          <span
            class="pointer-events-none absolute right-6 top-6 grid h-11 w-11 scale-75 place-items-center rounded-full bg-white/90 text-xl opacity-0 transition duration-500 group-hover:scale-100 group-hover:opacity-100"
            aria-hidden="true"
          >
            ↗
          </span>
        </button>
      </div>

      <div
        v-if="!expanded"
        class="pointer-events-none absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-[#dcc1ab] to-transparent"
      />

      <div class="relative z-10 mt-6 flex justify-center">
        <button
          type="button"
          class="rounded-full border border-black px-7 py-3 text-sm transition duration-300 hover:-translate-y-1 hover:bg-black hover:text-white hover:shadow-lg"
          :aria-expanded="expanded"
          @click="expanded = !expanded"
        >
          {{ expanded ? "Zwiń" : "Rozwiń" }}

          <span class="ml-1" aria-hidden="true">
            {{ expanded ? "↑" : "↓" }}
          </span>
        </button>
      </div>
    </div>

    <Teleport to="body">
      <Transition name="lightbox">
        <div
          v-if="selectedProject"
          class="fixed inset-0 z-[100] grid place-items-center bg-black/90 p-2 backdrop-blur-sm sm:p-4"
          role="dialog"
          aria-modal="true"
          aria-label="Podgląd realizacji"
          @click.self="closeLightbox"
        >
          <button
            type="button"
            class="absolute right-4 top-4 z-20 grid h-12 w-12 place-items-center rounded-full bg-white text-2xl shadow-xl transition hover:rotate-90 hover:scale-110 sm:right-7 sm:top-7"
            aria-label="Zamknij podgląd"
            @click="closeLightbox"
          >
            ×
          </button>

          <img
            :src="selectedProject.src"
            :alt="selectedProject.alt"
            class="lightbox-image h-[88vh] w-[97vw] object-contain drop-shadow-2xl sm:h-[94vh] sm:w-[96vw]"
            @click.stop
          />

          <p
            class="absolute bottom-5 left-1/2 -translate-x-1/2 rounded-full bg-black/60 px-5 py-2 text-center text-sm text-white backdrop-blur-sm"
          >
            {{ selectedProject.alt }}
          </p>
        </div>
      </Transition>
    </Teleport>
  </section>
</template>

<style scoped>
.lightbox-enter-active,
.lightbox-leave-active {
  transition: opacity 280ms ease;
}

.lightbox-enter-active .lightbox-image,
.lightbox-leave-active .lightbox-image {
  transition:
    transform 280ms ease,
    opacity 280ms ease;
}

.lightbox-enter-from,
.lightbox-leave-to {
  opacity: 0;
}

.lightbox-enter-from .lightbox-image,
.lightbox-leave-to .lightbox-image {
  opacity: 0;
  transform: scale(0.9);
}

@media (prefers-reduced-motion: reduce) {
  .lightbox-enter-active,
  .lightbox-leave-active,
  .lightbox-enter-active .lightbox-image,
  .lightbox-leave-active .lightbox-image {
    transition: none;
  }
}
</style>