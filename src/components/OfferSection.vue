<script setup lang="ts">
const services = [
  {
    title: "Projekty",
    description:
      "Zaprojektujemy Twój ogród w nowoczesnym stylu i z najlepszym wykorzystaniem istniejącej przestrzeni.",
    icon: "/images/icon-design.png",
    linkText: "Dowiedz się więcej",
  },
  {
    title: "Wizualizacje",
    description:
      "Przedstawimy Ci projekty koncepcyjne w postaci wirtualnego spaceru animowanego w technologii 3D.",
    icon: "/images/icon-visual.png",
    linkText: "Dowiedz się więcej",
  },
  {
    title: "Realizacje",
    description:
      "Zrealizujemy Twoje marzenie przy użyciu najnowszych rozwiązań i zaawansowanych technologii.",
    icon: "/images/icon-realisation.png",
    linkText: "Zobacz nasze realizacje",
  },
];

function handleCardMove(event: MouseEvent) {
  const card = event.currentTarget as HTMLElement;
  const rect = card.getBoundingClientRect();

  const mouseX = (event.clientX - rect.left) / rect.width;
  const mouseY = (event.clientY - rect.top) / rect.height;

  const rotateY = (mouseX - 0.5) * 8;
  const rotateX = (0.5 - mouseY) * 8;

  card.style.setProperty("--rotate-x", `${rotateX}deg`);
  card.style.setProperty("--rotate-y", `${rotateY}deg`);
  card.style.setProperty("--glow-x", `${mouseX * 100}%`);
  card.style.setProperty("--glow-y", `${mouseY * 100}%`);
}

function resetCard(event: MouseEvent) {
  const card = event.currentTarget as HTMLElement;

  card.style.setProperty("--rotate-x", "0deg");
  card.style.setProperty("--rotate-y", "0deg");
}
</script>

<template>
  <section
    id="oferta"
    class="bg-[#f5f0ec] px-6 py-24 sm:px-10 lg:px-20 lg:py-32"
  >
    <div class="mx-auto max-w-[1260px]">
      <div data-reveal>
        <p class="text-xs text-[#1b5b31]">Oferta</p>

        <h2
          class="mt-4 text-4xl font-medium tracking-[-0.03em] sm:text-5xl"
        >
          Działamy <em class="font-normal">kompleksowo</em>
        </h2>

        <p class="mt-8 max-w-[710px] text-sm leading-6">
          Oferujemy kompletną obsługę inwestycji terenów zielonych. Projektujemy
          nowoczesne ogrody przydomowe oraz rezydencjonalne. Stworzymy dla Ciebie
          projekt, zwizualizujemy go i wcielimy w życie.
        </p>
      </div>

      <div class="mt-20 grid gap-6 md:grid-cols-3">
        <div
          v-for="(service, index) in services"
          :key="service.title"
          data-reveal
          :style="{ transitionDelay: `${index * 90}ms` }"
        >
          <a
            href="#kontakt"
            class="service-card group flex min-h-[370px] flex-col overflow-hidden rounded-[28px] bg-white p-10"
            @mousemove="handleCardMove"
            @mouseleave="resetCard"
          >
            <img
              :src="service.icon"
              alt=""
              class="h-12 w-12 object-contain object-left"
            />

            <h3 class="mt-8 text-2xl font-medium">
              {{ service.title }}
            </h3>

            <p class="mt-4 text-sm leading-6">
              {{ service.description }}
            </p>

            <span
              class="mt-auto inline-flex w-fit items-center gap-2 border-b border-[#1b5b31] pb-1 text-sm text-[#1b5b31]"
            >
              {{ service.linkText }}

              <span
                class="transition-transform duration-300 group-hover:translate-x-2"
              >
                →
              </span>
            </span>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.service-card {
  --rotate-x: 0deg;
  --rotate-y: 0deg;
  --glow-x: 50%;
  --glow-y: 50%;

  position: relative;
  height: 100%;
  transform:
    perspective(900px)
    rotateX(var(--rotate-x))
    rotateY(var(--rotate-y));
  transition:
    transform 180ms ease,
    box-shadow 300ms ease;
  will-change: transform;
}

.service-card::before {
  content: "";
  position: absolute;
  inset: 0;
  background: radial-gradient(
    circle at var(--glow-x) var(--glow-y),
    rgba(27, 91, 49, 0.18),
    transparent 42%
  );
  opacity: 0;
  transition: opacity 300ms ease;
  pointer-events: none;
}

.service-card > * {
  position: relative;
  z-index: 1;
}

.service-card:hover {
  box-shadow: 0 28px 60px rgba(17, 17, 17, 0.15);
}

.service-card:hover::before {
  opacity: 1;
}

@media (prefers-reduced-motion: reduce) {
  .service-card {
    transform: none;
    transition: none;
  }
}
</style>