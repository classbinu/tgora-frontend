import { defineConfig } from 'vitest/config';
import { sveltekit } from '@sveltejs/kit/vite';

export default defineConfig({
	plugins: [sveltekit()],
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
	// server: {
	// 	host: '0.0.0.0' // 모든 IP 주소에서 접속 가능하도록 설정
	// }
});
