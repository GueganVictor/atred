export const usePageSeo = (options: {
  title: string
  description: string
  path?: string
  image?: string
}) => {
  const config = useRuntimeConfig()
  const title = `${options.title} | ${config.public.companyName}`
  const url = new URL(options.path ?? '/', config.public.siteUrl).toString()
  const image = new URL(options.image ?? '/images/hero-site.jpg', config.public.siteUrl).toString()

  useSeoMeta({
    title,
    description: options.description,
    ogTitle: title,
    ogDescription: options.description,
    ogUrl: url,
    ogImage: image,
    twitterCard: 'summary_large_image',
    twitterTitle: title,
    twitterDescription: options.description,
    twitterImage: image,
  })
}
