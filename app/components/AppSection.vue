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
  props.flushTop ? 'pt-0 pb-10 sm:pb-12 lg:pb-14' : 'py-10 sm:py-12 lg:py-14',
)

const forwardedAttrs = computed(() => {
  const { class: _class, ...rest } = attrs
  return rest
})

const rootClass = computed(() => [sectionClass.value, attrs.class])
</script>
