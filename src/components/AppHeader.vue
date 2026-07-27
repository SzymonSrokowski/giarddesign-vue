<script setup lang="ts">
import { ref } from "vue";

const menuOpen = ref(false);
const searchOpen = ref(false);
</script>

<template>
  <header class="relative z-50 h-[72px] bg-white">
    <div
      class="mx-auto flex h-full max-w-[1260px] items-center justify-between px-6 sm:px-10"
    >
      <a href="#" aria-label="GiardDesign — strona główna" class="text-lg font-semibold">
        giard<span class="font-normal">design</span>
      </a>

      <nav class="hidden items-center gap-12 text-sm lg:flex" aria-label="Główna nawigacja">
        <div class="group relative">
          <button
            class="flex items-center gap-2 py-6 transition-colors hover:text-[#1b5b31]"
            type="button"
            aria-haspopup="true"
          >
            Oferta
            <span aria-hidden="true" class="text-xs">⌄</span>
          </button>
          <div
            class="invisible absolute left-1/2 top-[58px] w-48 -translate-x-1/2 translate-y-2 rounded-xl bg-white p-2 opacity-0 shadow-xl transition group-hover:visible group-hover:translate-y-0 group-hover:opacity-100"
          >
            <a class="block rounded-lg px-4 py-2 hover:bg-[#f5f0ec]" href="#oferta">Projekty</a>
            <a class="block rounded-lg px-4 py-2 hover:bg-[#f5f0ec]" href="#oferta">Wizualizacje</a>
            <a class="block rounded-lg px-4 py-2 hover:bg-[#f5f0ec]" href="#oferta">Realizacje</a>
          </div>
        </div>
        <a class="transition-colors hover:text-[#1b5b31]" href="#o-firmie">O firmie</a>
        <a class="transition-colors hover:text-[#1b5b31]" href="#realizacje">Realizacje</a>
        <a class="transition-colors hover:text-[#1b5b31]" href="#kontakt">Kontakt</a>
        <button
          type="button"
          class="grid h-10 w-10 place-items-center rounded-full transition-colors hover:bg-[#f5f0ec]"
          :aria-expanded="searchOpen"
          aria-label="Otwórz wyszukiwarkę"
          @click="searchOpen = !searchOpen"
        >
          <svg viewBox="0 0 24 24" class="h-5 w-5" fill="none" stroke="currentColor" stroke-width="1.7">
            <circle cx="11" cy="11" r="6.5" />
            <path d="m16 16 4 4" />
          </svg>
        </button>
      </nav>

      <button
        class="grid h-10 w-10 place-items-center lg:hidden"
        type="button"
        :aria-expanded="menuOpen"
        aria-label="Otwórz menu"
        @click="menuOpen = !menuOpen"
      >
        <span class="flex w-6 flex-col gap-1.5">
          <span class="h-px w-full bg-black" />
          <span class="h-px w-full bg-black" />
          <span class="h-px w-full bg-black" />
        </span>
      </button>
    </div>

    <Transition name="drop">
      <form
        v-if="searchOpen"
        class="absolute right-10 top-[62px] hidden w-80 rounded-2xl bg-white p-3 shadow-xl lg:block"
        role="search"
        @submit.prevent
      >
        <label class="sr-only" for="site-search">Szukaj na stronie</label>
        <input
          id="site-search"
          class="w-full rounded-xl border border-black/15 px-4 py-3 text-sm outline-none focus:border-[#1b5b31]"
          placeholder="Czego szukasz?"
          type="search"
          autofocus
        />
      </form>
    </Transition>

    <Transition name="drop">
      <nav
        v-if="menuOpen"
        class="absolute inset-x-4 top-[64px] rounded-2xl bg-white p-5 text-sm shadow-2xl lg:hidden"
        aria-label="Menu mobilne"
      >
        <a class="block border-b border-black/10 py-3" href="#oferta" @click="menuOpen = false">Oferta</a>
        <a class="block border-b border-black/10 py-3" href="#o-firmie" @click="menuOpen = false">O firmie</a>
        <a class="block border-b border-black/10 py-3" href="#realizacje" @click="menuOpen = false">Realizacje</a>
        <a class="block py-3" href="#kontakt" @click="menuOpen = false">Kontakt</a>
      </nav>
    </Transition>
  </header>
</template>

<style scoped>
.drop-enter-active,
.drop-leave-active {
  transition:
    opacity 180ms ease,
    transform 180ms ease;
}

.drop-enter-from,
.drop-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}
</style>
