<template>
  <button v-bind="forwardedAttrs" :type="type" :class="rootClass">
    <slot />
  </button>
</template>

<script setup lang="ts">
defineOptions({
  inheritAttrs: false,
})

type ButtonVariant =
  | 'primary'
  | 'secondary'
  | 'light'
  | 'ghost-light'
  | 'soft-light'

const props = withDefaults(
  defineProps<{
    type?: 'button' | 'submit' | 'reset'
    variant?: ButtonVariant
  }>(),
  {
    type: 'button',
    variant: 'primary',
  },
)

const attrs = useAttrs()

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    'inline-flex items-center justify-center rounded-full bg-brand-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-brand-700 focus:outline-none focus:ring-2 focus:ring-brand-300 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-70',
  secondary:
    'inline-flex items-center justify-center rounded-full border border-neutral-300 bg-white px-5 py-3 text-sm font-semibold text-neutral-900 transition hover:border-neutral-400 hover:bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-neutral-300 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-70',
  light:
    'inline-flex items-center justify-center rounded-full bg-white px-5 py-3 text-sm font-semibold text-brand-700 transition hover:bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-white/70 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-70',
  'ghost-light':
    'inline-flex items-center justify-center rounded-full border border-white/25 bg-transparent px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/70 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-70',
  'soft-light':
    'inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/15 focus:outline-none focus:ring-2 focus:ring-white/70 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-70',
}

const forwardedAttrs = computed(() => {
  const { class: _class, ...rest } = attrs
  return rest
})

const rootClass = computed(() => [variantClasses[props.variant], attrs.class])
</script>
