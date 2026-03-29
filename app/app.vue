<script setup lang="ts">
const localeHead = useLocaleHead()
</script>

<template>
  <Html :lang="localeHead.htmlAttrs?.lang">
    <Body>
      <NuxtRouteAnnouncer />
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </Body>
  </Html>
</template>
