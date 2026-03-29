<template>
  <footer class="bg-white border-t">
    <div class="px-6 py-16 mx-auto overflow-hidden max-w-7xl sm:py-16 lg:px-8">
      <nav
        class="-mb-6 columns-2 sm:flex sm:justify-center sm:space-x-12"
        aria-label="Footer"
      >
        <div v-for="item in navigation" :key="item.name" class="pb-6">
          <RouterLink
            :to="item.href"
            class="text-sm leading-6 text-gray-600 hover:text-gray-900"
            >{{ item.name }}</RouterLink
          >
        </div>
      </nav>
      <ul
        class="-mb-2 columns-2 sm:flex sm:justify-center sm:space-x-12"
        aria-label="Footer"
      >
        <li class="py-2">
          <RouterLink
            to="/mentions-legales"
            class="text-sm leading-6 text-gray-600 hover:text-gray-900"
          >
            Mentions légales
          </RouterLink>
        </li>
      </ul>
      <!-- <div class="flex justify-center mt-10 space-x-10">
        <a
          v-for="item in navigation.social"
          :key="item.name"
          :href="item.href"
          class="text-gray-400 hover:text-gray-500"
        >
          <span class="sr-only">{{ item.name }}</span>
          <component :is="item.icon" class="w-6 h-6" aria-hidden="true" />
        </a>
      </div> -->
      <p class="mt-10 text-xs leading-5 text-center text-gray-500">
        &copy; 2023 ISDI Atred Valorisation.
      </p>
    </div>
  </footer>
</template>

<script setup>
const navigation = [
  { name: "Déchets inertes", href: "/dechets-inertes" },
  { name: "Matériaux recyclés", href: "/materiaux-recycles" },
  { name: "L'entreprise", href: "/notre-entreprise" },
  { name: "Contact", href: "/contact" },
];
</script>
