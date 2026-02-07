import { defineConfig } from 'vite'
import sitemapPlugin from 'vite-plugin-sitemap'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(),
    sitemapPlugin({
      hostname: 'https://harmoniclearningstudio.com',
    }),
  ],
})
