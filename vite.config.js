import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/huerto-boqueron-frontend/',
  plugins: [react()],
})
