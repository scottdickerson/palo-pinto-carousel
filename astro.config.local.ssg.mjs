import { defineConfig } from 'astro/config'
import solidJs from '@astrojs/solid-js'
import tailwind from '@astrojs/tailwind'
// import vercel from '@astrojs/vercel/serverless'

// https://astro.build/config
export default defineConfig({
    integrations: [
        solidJs({
            devtools: true,
        }),
        tailwind(),
    ],
    experimental: {
        svg: true,
    },
    output: 'static',
})
