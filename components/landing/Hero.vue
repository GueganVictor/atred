<template>
  <div class="relative">
    <div class="mx-auto max-w-7xl">
      <div class="relative z-10 lg:w-full lg:max-w-2xl">
        <svg
          class="absolute inset-y-0 hidden h-full transform translate-x-1/2 right-8 w-80 fill-white lg:block"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <polygon points="0,0 90,0 50,100 0,100" />
        </svg>
        <div class="relative px-6 py-32 sm:py-40 lg:px-8 lg:py-56 lg:pr-0">
          <div class="max-w-2xl mx-auto lg:mx-0 lg:max-w-xl">
            <div class="hidden sm:mb-10 sm:flex">
              <div
                class="relative px-3 py-1 text-sm leading-6 text-gray-500 rounded-full ring-1 ring-gray-900/10 hover:ring-gray-900/20"
              >
                Découvrez notre cahier des charges 2023
                <a href="#" class="font-semibold whitespace-nowrap text-primary"
                  ><span class="absolute inset-0" aria-hidden="true" /><span
                    aria-hidden="true"
                    >&rarr;</span
                  ></a
                >
              </div>
            </div>
            <h1
              class="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl"
            >
              Sous-traitez la gestion de vos déchets inertes
            </h1>
            <p class="mt-6 text-lg leading-8 text-gray-600">
              Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
              lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
              fugiat aliqua.
            </p>
            <div class="flex items-center mt-10 gap-x-6">
              <RouterLink
                to="/contact"
                class="text-sm font-semibold leading-6 text-gray-900"
                >Pour établier un devis, contactez nous
                <span aria-hidden="true">→</span></RouterLink
              >
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="bg-gray-50 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
      <img
        class="aspect-[3/2] object-cover lg:aspect-auto lg:h-full lg:w-full"
        src="~/assets/img/hero.jpeg"
        alt=""
      />
    </div>
  </div>
</template>

<script setup></script>
