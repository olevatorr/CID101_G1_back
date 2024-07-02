import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import VueDevTools from 'vite-plugin-vue-devtools'

// https://vitejs.dev/config/
export default defineConfig(({ command, mode, isSsrBuild, isPreview }) => {
  if (mode === 'prod') {
	  // 放準備部署到server的設定
    return {
      base: '/cid101/g1/back/',
		  build: {
		    outDir: 'back'
		  },
		  plugins: [
		    vue(),
		    VueDevTools(),
		  ],
		  resolve: {
		    alias: {
		      '@': fileURLToPath(new URL('./src', import.meta.url))
		    }
		  }
    }
  } else {
    // 放原本的設定
    return {
      plugins: [
		    vue(),
		    VueDevTools(),
		  ],
		  resolve: {
		    alias: {
		      '@': fileURLToPath(new URL('./src', import.meta.url))
		    }
		  }
    }
  }
})