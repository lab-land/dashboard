/// <reference types="vitest" />

import unoCSS from 'unocss/vite'
import react from '@vitejs/plugin-react-swc'
import { resolve } from 'node:path'
import { TanStackRouterVite } from '@tanstack/router-vite-plugin'

import { defineConfig } from 'vitest/config'

export default defineConfig({
  root: './',
  base: './',
  plugins: [
    react(),
    unoCSS(),
    TanStackRouterVite({
      generatedRouteTree: './routeTree.gen.ts',
      routesDirectory: './routes',
    }),
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, './'),
    },
  },
  test: {
    environment: 'jsdom',
    globals: true,
  },
})
