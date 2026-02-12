import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [tailwindcss(), react()],
  // 1. Set base to relative for Netlify drag-and-drop
  base: './',
  build: {
    // 2. Increase the limit to hide the 500kb warning
    chunkSizeWarningLimit: 1600,
    rollupOptions: {
      output: {
        // 3. Split the code into smaller chunks to fix the React 19 internal error
        manualChunks: {
          'react-vendor': ['react', 'react-dom'],
          'gsap-vendor': ['gsap', '@gsap/react'],
          'three-vendor': ['three', '@react-three/fiber', '@react-three/drei'],
        },
      },
    },
  },
})