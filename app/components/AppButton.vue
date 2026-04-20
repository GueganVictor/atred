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
    'inline-flex min-h-12 items-center justify-center rounded-[8px] border border-brand-700 bg-brand-600 px-5 py-3 text-base font-semibold text-white hover:bg-brand-700 focus:outline-none focus:ring-2 focus:ring-brand-200 focus:ring-offset-2 disabled:cursor-not-allowed disabled:border-neutral-300 disabled:bg-neutral-200 disabled:text-neutral-500',
  secondary:
    'inline-flex min-h-12 items-center justify-center rounded-[8px] border border-neutral-300 bg-white px-5 py-3 text-base font-semibold text-neutral-900 hover:border-brand-600 hover:text-brand-700 focus:outline-none focus:ring-2 focus:ring-brand-100 focus:ring-offset-2 disabled:cursor-not-allowed disabled:border-neutral-300 disabled:bg-neutral-200 disabled:text-neutral-500',
  light:
    'inline-flex min-h-12 items-center justify-center rounded-[8px] border border-white bg-white px-5 py-3 text-base font-semibold text-brand-700 hover:bg-neutral-50 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 disabled:cursor-not-allowed disabled:border-white/30 disabled:bg-white/20 disabled:text-white/60',
  'ghost-light':
    'inline-flex min-h-12 items-center justify-center rounded-[8px] border border-white/50 bg-transparent px-5 py-3 text-base font-semibold text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/70 focus:ring-offset-2 disabled:cursor-not-allowed disabled:border-white/20 disabled:text-white/60',
  'soft-light':
    'inline-flex min-h-12 items-center justify-center rounded-[8px] border border-white/30 bg-white/12 px-5 py-3 text-base font-semibold text-white hover:bg-white/18 focus:outline-none focus:ring-2 focus:ring-white/70 focus:ring-offset-2 disabled:cursor-not-allowed disabled:border-white/20 disabled:text-white/60',
}

const forwardedAttrs = computed(() => {
  const { class: _class, ...rest } = attrs
  return rest
})

const rootClass = computed(() => [variantClasses[props.variant], attrs.class])
</script>
