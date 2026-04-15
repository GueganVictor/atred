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
  'rounded-[1.25rem] border border-neutral-200 bg-white p-6 shadow-[0_14px_36px_-28px_rgba(24,33,30,0.25)]',
  attrs.class,
])
</script>
