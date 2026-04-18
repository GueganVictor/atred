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
  'rounded-[10px] border border-neutral-300 bg-white p-5',
  attrs.class,
])
</script>
