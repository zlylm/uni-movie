import { defineConfig } from 'vite'
import uni from '@dcloudio/vite-plugin-uni'

const path = require("path");
 
function resolve(dir) {
  return path.join(__dirname, dir);
}

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@": resolve("src"),
      "@c": resolve("src/components"),
    }
  },
  plugins: [
    uni(),
  ]
})
