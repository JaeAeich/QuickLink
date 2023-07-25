import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
	const env = { ...process.env, ...loadEnv(mode, process.cwd()) };
	return {
		plugins: [react()],
		define: {
			'import.meta.env.VITE_BACKEND_BASE_URL': JSON.stringify(
				process.env.VITE_BACKEND_BASE_URL
			),
			'import.meta.env.VITE_GUEST_EMAIL': JSON.stringify(
				process.env.VITE_GUEST_EMAIL
			),
			'import.meta.env.VITE_GUEST_PASSWORD': JSON.stringify(
				process.env.VITE_GUEST_PASSWORD
			),
			'process.env': env,
		},
	};
});
