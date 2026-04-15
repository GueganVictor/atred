<template>
  <component :is="component" v-bind="rootProps" :class="rootClass">
    <slot />
  </component>
</template>

<script setup lang="ts">
import { NuxtLink } from '#components'

defineOptions({
  inheritAttrs: false,
})

type LinkTarget = string | Record<string, unknown>
type LinkVariant =
  | 'primary'
  | 'secondary'
  | 'light'
  | 'ghost-light'
  | 'soft-light'

const props = withDefaults(
  defineProps<{
    to?: LinkTarget
    href?: string
    variant?: LinkVariant
  }>(),
  {
    to: undefined,
    href: undefined,
    variant: 'primary',
  },
)

const attrs = useAttrs()

const variantClasses: Record<LinkVariant, string> = {
  primary:
    'inline-flex items-center justify-center rounded-full bg-brand-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-brand-700 focus:outline-none focus:ring-2 focus:ring-brand-300 focus:ring-offset-2',
  secondary:
    'inline-flex items-center justify-center rounded-full border border-neutral-300 bg-white px-5 py-3 text-sm font-semibold text-neutral-900 transition hover:border-neutral-400 hover:bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-neutral-300 focus:ring-offset-2',
  light:
    'inline-flex items-center justify-center rounded-full bg-white px-5 py-3 text-sm font-semibold text-brand-700 transition hover:bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-white/70 focus:ring-offset-2 focus:ring-offset-brand-700',
  'ghost-light':
    'inline-flex items-center justify-center rounded-full border border-white/25 bg-transparent px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/70 focus:ring-offset-2 focus:ring-offset-brand-700',
  'soft-light':
    'inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/15 focus:outline-none focus:ring-2 focus:ring-white/70 focus:ring-offset-2 focus:ring-offset-brand-700',
}

const component = computed(() => (props.href ? 'a' : NuxtLink))
const linkProps = computed(() =>
  props.href ? { href: props.href } : { to: props.to },
)

const rootProps = computed(() => ({
  ...forwardedAttrs.value,
  ...linkProps.value,
}))

const forwardedAttrs = computed(() => {
  const { class: _class, ...rest } = attrs
  return rest
})

const rootClass = computed(() => [variantClasses[props.variant], attrs.class])
</script>
