import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  //ESto es lo nuevo que se agrega
  server:{
    proxy:{
      //Proxy para la API de Spring Boot
      '/api':{
        target:'http://localhost:8080',
        changeOrigin:true,
        // rewrite: (path) => path.replace(/^\/api/, '')
        secure:false
      }
    }
  }
})