import path from 'path'
import { defineConfig } from 'cypress'
import vitePreprocessor from 'cypress-vite'

export default defineConfig({
	e2e: {
		setupNodeEvents(on) {
			on(
				'file:preprocessor',
				vitePreprocessor({
					configFile: path.resolve('./cypress/vite.config.ts'),
					mode: 'development',
				}),
			)
		},
	},
})
