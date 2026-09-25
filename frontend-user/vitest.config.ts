import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    setupFiles: ['./src/test/setup.ts'],
    reporters: ['default', 'junit'],
    outputFile: { junit: 'reports/junit.xml' },   // lu par Azure DevOps
    coverage: {
      provider: 'v8',
      include: ['src/**/*.{js,jsx,ts,tsx}'],
      exclude: ['src/**/*.test.{js,jsx,ts,tsx}', 'src/test/**', 'src/main.jsx'],
      reporter: ['text', 'cobertura', 'lcov'],    // cobertura → Azure, lcov → Sonar
      reportsDirectory: 'coverage',
    },
  },
})
