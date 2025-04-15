import { defineConfig } from 'cypress'

export default defineConfig({
    e2e: {
        'baseUrl': 'http://localhost:4200',
        experimentalRunAllSpecs: true,
        viewportHeight: 1000,
        viewportWidth: 1350
    },
})