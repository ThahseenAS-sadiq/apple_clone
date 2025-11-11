import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// ✅ Change this line — use your GitHub repo name here
export default defineConfig({
  plugins: [react()],
  base: '/apple_clone/', // 👈 Add this line
})
