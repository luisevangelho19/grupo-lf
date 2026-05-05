import { defineConfig } from 'vitest/config'
import { resolve } from 'path'

// Vitest configuration used during development/test runs inside app/
// Enables globals and resolves the `~/*` path alias to `src/*` so tests
// using '~/...' imports work as expected.
export default defineConfig({
	test: {
		globals: true,
		environment: 'jsdom',
		include: ['src/**/*.{test,spec}.{ts,tsx}'],
		alias: {
			'~': resolve(__dirname, 'src'),
		},
	},
})
