import { fileURLToPath, URL } from 'url';

import { defineConfig, loadEnv } from 'vite';
import type { ConfigEnv, UserConfigExport } from "vite";
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export default defineConfig(({ mode }: ConfigEnv): UserConfigExport => {
	const env = loadEnv(mode, process.cwd(), '');

	return {
		plugins: [vue()],
		resolve: {
			alias: {
				'@': fileURLToPath(new URL('./src', import.meta.url))
			}
		},
		server: {
			host: env.HOST ?? '0.0.0.0',
			port: Number(env.PORT) ?? 3000
		}
	};
});
