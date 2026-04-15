<template>
  <AppContainer :as="as" v-bind="forwardedAttrs" :class="rootClass">
    <slot />
  </AppContainer>
</template>

<script setup lang="ts">
defineOptions({
  inheritAttrs: false,
})

const props = withDefaults(
  defineProps<{
    as?: string
    flushTop?: boolean
  }>(),
  {
    as: 'section',
    flushTop: false,
  },
)

const attrs = useAttrs()

const sectionClass = computed(() =>
  props.flushTop ? 'pt-0 pb-12 sm:pb-14 lg:pb-16' : 'py-12 sm:py-14 lg:py-16',
)

const forwardedAttrs = computed(() => {
  const { class: _class, ...rest } = attrs
  return rest
})

const rootClass = computed(() => [sectionClass.value, attrs.class])
</script>
