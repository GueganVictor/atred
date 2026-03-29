// @ts-check
import eslintConfigPrettier from 'eslint-config-prettier'
import betterTailwindcss from 'eslint-plugin-better-tailwindcss'
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(
  {
    plugins: {
      'better-tailwindcss': betterTailwindcss,
    },
    rules: {
      'better-tailwindcss/enforce-canonical-classes': [
        'warn',
        {
          entryPoint: './app/assets/css/main.css',
        },
      ],
      'better-tailwindcss/no-deprecated-classes': [
        'warn',
        {
          entryPoint: './app/assets/css/main.css',
        },
      ],
      'vue/multi-word-component-names': 'off',
    },
  },
  eslintConfigPrettier,
)
