import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/SakilaTravel/', // Harus diawali dan diakhiri dengan tanda garis miring (/)
})
