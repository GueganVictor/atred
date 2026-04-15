<template>
  <component :is="as" v-bind="forwardedAttrs" :class="rootClass">
    <slot />
  </component>
</template>

<script setup lang="ts">
defineOptions({
  inheritAttrs: false,
})

withDefaults(
  defineProps<{
    as?: string
  }>(),
  {
    as: 'div',
  },
)

const attrs = useAttrs()

const forwardedAttrs = computed(() => {
  const { class: _class, ...rest } = attrs
  return rest
})

const rootClass = computed(() => [
  'mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-12',
  attrs.class,
])
</script>
