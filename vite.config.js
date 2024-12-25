import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  publicDir: 'public', // Specify the public directory
  // Add an assets path
  assetsDir: 'assets', // This specifies the path to your assets folder
  server: {
    port: 5173, 
    open: true, 
    historyApiFallback: true, 
  },
})
