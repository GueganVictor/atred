<template>
  <header class="absolute inset-x-0 top-0 z-50">
    <div class="mx-auto max-w-7xl">
      <div class="px-6 py-6 lg:pl-8 lg:pr-0">
        <nav
          class="flex items-center justify-between lg:justify-start"
          aria-label="Global"
        >
          <RouterLink to="/" class="-m-1.5 p-1.5">
            <span class="sr-only">Your Company</span>
            <img
              alt="Your Company"
              class="w-auto h-10 sm:h-16"
              src="~/assets/img/logoatred.png"
            />
          </RouterLink>
          <button
            type="button"
            class="-m-2.5 rounded-md p-2.5 text-gray-700 lg:hidden"
            @click="mobileMenuOpen = true"
          >
            <span class="sr-only">Open main menu</span>
            <Icon name="mdi-menu" class="w-6 h-6" aria-hidden="true" />
          </button>
          <div class="hidden lg:block lg:flex-grow"></div>
          <div class="hidden mr-8 cursor-pointer lg:ml-12 lg:flex lg:gap-x-14">
            <RouterLink
              v-for="item in navigation"
              :key="item.name"
              :to="item.href"
              class="font-semibold leading-6 text-gray-900 cursor-pointer"
              >{{ item.name }}</RouterLink
            >
          </div>
        </nav>
      </div>
    </div>
    <Dialog
      as="div"
      class="lg:hidden"
      @close="mobileMenuOpen = false"
      :open="mobileMenuOpen"
    >
      <div class="fixed inset-0 z-50" />
      <DialogPanel
        class="fixed inset-y-0 right-0 z-50 w-full px-6 py-6 overflow-y-auto bg-white sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"
      >
        <div class="flex items-center justify-between">
          <a href="#" class="-m-1.5 p-1.5">
            <span class="sr-only">Atred Valorisation</span>
            <img class="w-auto h-8" src="~/assets/img/logoatred.png" alt="" />
          </a>
          <button
            type="button"
            class="-m-2.5 rounded-md p-2.5 text-gray-700"
            @click="mobileMenuOpen = false"
          >
            <span class="sr-only">Close menu</span>
            <Icon name="mdi-close" class="w-6 h-6" aria-hidden="true" />
          </button>
        </div>
        <div class="flow-root mt-6">
          <div class="-my-6 divide-y divide-gray-500/10">
            <div class="py-6 space-y-2">
              <RouterLink
                v-for="item in navigation"
                :key="item.name"
                :to="item.href"
                class="block px-3 py-2 -mx-3 text-base font-semibold leading-7 text-gray-900 rounded-lg hover:bg-gray-50"
                >{{ item.name }}</RouterLink
              >
            </div>
          </div>
        </div>
      </DialogPanel>
    </Dialog>
  </header>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { Dialog, DialogPanel } from "@headlessui/vue";

const navigation = [
  { name: "Déchets inertes", href: "/dechets-inertes" },
  { name: "Matériaux recyclés", href: "/materiaux-recycles" },
  { name: "L'entreprise", href: "/notre-entreprise" },
  { name: "Contact", href: "/contact" },
];

const mobileMenuOpen = ref(false);
</script>
