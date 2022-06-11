import * as path from 'path'
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
	build: {
		outDir: '../../dist/client'
	},
	plugins: [
		vue(),
	],
	server: {
		proxy: {
			'/api': {
				target: 'http://127.0.0.1:3001',
				rewrite: (path) => path.replace(/^\/api/, '')
			}
		}
	},
	resolve: {
		alias: [
			{
				find: '@',
				replacement: path.resolve(__dirname, 'src')
			},
			{
				find: 'shared',
				replacement: path.resolve(__dirname, '../shared/src')
			}
		],
	},
})
