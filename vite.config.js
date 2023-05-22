import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from "vite-plugin-pwa";
import * as path from 'path';

// https://vitejs.dev/config/

export default defineConfig({
    server: {
        port: 3000,
    },
    plugins: [
      react(),
      VitePWA({
          workbox: {
              globPatterns: ["**/*"],
          },
          includeAssets: [
              "**/*",
          ],
          devOptions: {
              enabled: false,
          },
          manifest: {
              "name": "Балльная система",
              "short_name": "Балльная система",
              "theme_color": "#4188d2",
              "background_color": "#f5f5f5",
              "display": "standalone",
              "scope": "/",
              "start_url": "/",
              "description": "testing vite pwa",
              "icons": [
                  {
                      "src": "/static/img/logo128.png",
                      "sizes": "128x128",
                      "type": "image/png",
                      "purpose": "any maskable"
                  },
                  {
                      "src": "/static/img/logo192.png",
                      "sizes": "192x192",
                      "type": "image/png",
                      "purpose": "any maskable"
                  },
                  {
                      "src": "/static/img/logo256.png",
                      "sizes": "256x256",
                      "type": "image/png",
                      "purpose": "any maskable"
                  },
                  {
                      "src": "/static/img/logo512.png",
                      "type": "image/png",
                      "sizes": "512x512",
                      "purpose": "any maskable"
                  },
                  {
                      "src": "/static/img/favicon.ico",
                      "sizes": "64x64 32x32 24x24 16x16",
                      "type": "image/x-icon"
                  }
              ]
          }
      }),
  ],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
        },
    },
})


