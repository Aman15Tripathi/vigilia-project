import { defineConfig } from 'vite'
import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'
import tailwindcss from '@tailwindcss/vite'
// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
       tailwindcss({
        colors: {
          primary: '#5F6FFF',
           
       }}),
    babel({ presets: [reactCompilerPreset()] })
  ],
  server: {port: 5174}
})
