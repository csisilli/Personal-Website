import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  root: 'public',
  base: '/csisillli-personal-webpage/',
  resolve: {
    extensions: ['.js', '.jsx', '.json']
  },
  server: {
    port: 3000,
    open: true
  }
})
