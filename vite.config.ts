import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  resolve: {
    tsconfigPaths: true,
  },
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      devOptions: { enabled: false },
      includeAssets: ['favicon/**/*', 'img/**/*'],
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg,jpg,jpeg,webp,woff2,json}'],
        maximumFileSizeToCacheInBytes: 8 * 1024 * 1024,
      },
      manifest: {
        name: 'Leandro Felix',
        short_name: 'Leandro Felix',
        description:
          'Leandro Felix - Analista de Sistemas e Desenvolvedor Fullstack Web',
        theme_color: '#000000',
        background_color: '#060708',
        display: 'standalone',
        start_url: '/',
        icons: [
          {
            src: '/img/logo_rounded.png',
            sizes: '192x192',
            type: 'image/png',
          },
        ],
      },
    }),
  ],
  build: {
    outDir: 'dist',
  },
})
