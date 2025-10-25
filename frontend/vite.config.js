import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  server : {
  proxy : {
    '/api' : 'http://localhost:3000',
    // yani ab jaha bhi /api hoga uske piche http://localhost:3000 append ho jaygea na ki sirf append hoga plus ye proxy laga di jayegi ki request is url se aa rahi h (means yahi si origin hui hui hain)
  },
  },
  plugins: [react()],
})
