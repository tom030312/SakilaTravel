import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './', // Menggunakan './' membuat semua jalur aset bersifat relatif dan bebas error 404
})
