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
    'inline-flex min-h-11 items-center justify-center rounded-[8px] border border-brand-700 bg-brand-600 px-5 py-3 text-sm font-semibold text-white hover:bg-brand-700 focus:outline-none focus:ring-2 focus:ring-brand-200 focus:ring-offset-2',
  secondary:
    'inline-flex min-h-11 items-center justify-center rounded-[8px] border border-neutral-300 bg-white px-5 py-3 text-sm font-semibold text-neutral-900 hover:border-brand-600 hover:text-brand-700 focus:outline-none focus:ring-2 focus:ring-brand-100 focus:ring-offset-2',
  light:
    'inline-flex min-h-11 items-center justify-center rounded-[8px] border border-white bg-white px-5 py-3 text-sm font-semibold text-brand-700 hover:bg-neutral-50 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-brand-700',
  'ghost-light':
    'inline-flex min-h-11 items-center justify-center rounded-[8px] border border-white/50 bg-transparent px-5 py-3 text-sm font-semibold text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/70 focus:ring-offset-2 focus:ring-offset-brand-700',
  'soft-light':
    'inline-flex min-h-11 items-center justify-center rounded-[8px] border border-white/30 bg-white/12 px-5 py-3 text-sm font-semibold text-white hover:bg-white/18 focus:outline-none focus:ring-2 focus:ring-white/70 focus:ring-offset-2 focus:ring-offset-brand-700',
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
