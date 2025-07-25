import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
	app: {
		head: {
			meta: [
				{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
				{ name: 'title', content: 'Nuxt Starter' },
				{ name: 'description', content: 'A minimalistic Nuxt starter template.' },
			],
			link: [
				{
					rel: 'icon',
					type: 'image/svg+xml',
					href: '/favicon.svg',
				},
			],
		},
	},
	compatibilityDate: '2024-04-03',
	css: ['@/assets/styles.css'],
	devtools: { enabled: true },
	eslint: {
		config: {
			standalone: false,
		},
	},
	experimental: {
		typedPages: true,
	},
	modules: ['@nuxt/eslint', '@nuxt/fonts'],
	typescript: {
		strict: true,
	},
	vite: {
		plugins: [
			tailwindcss(),
		],
	},
})
