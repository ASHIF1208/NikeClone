import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import VitePluginSvgr from 'vite-plugin-svgr';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), VitePluginSvgr()],
})
