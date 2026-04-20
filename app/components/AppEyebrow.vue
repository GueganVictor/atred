<template>
  <component :is="as" v-bind="forwardedAttrs" :class="rootClass">
    <slot />
  </component>
</template>

<script setup lang="ts">
defineOptions({
  inheritAttrs: false,
})

const props = withDefaults(
  defineProps<{
    as?: string
    tone?: 'default' | 'inverse'
  }>(),
  {
    as: 'p',
    tone: 'default',
  },
)

const attrs = useAttrs()

const forwardedAttrs = computed(() => {
  const { class: _class, ...rest } = attrs
  return rest
})

const toneClass = computed(() =>
  props.tone === 'inverse' ? 'text-brand-100' : 'text-brand-700',
)

const rootClass = computed(() => [
  'text-xs font-semibold uppercase tracking-[0.12em]',
  toneClass.value,
  attrs.class,
])
</script>
