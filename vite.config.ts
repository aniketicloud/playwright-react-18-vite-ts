import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  plugins: [react()],
  build: {
    sourcemap: true, // Enable source maps for the build
  },
  test: {
    // reporters: ['default', 'html'],
    reporters: [
      'default',
      ['html', { outputFile: 'vitest/test-report/index.html' }],
    ],
    environment: 'jsdom', // Set the environment to jsdom for React
    include: ['src/**/*.test.{ts,tsx}'], // Include only test files in the src folder
    coverage: {
      provider: 'istanbul',
      reporter: ['text', 'json', 'html'], // Specify coverage reporters
      include: ['src/**/*.{ts,tsx}'], // Include only TypeScript files in the src folder for coverage
      exclude: ['src/stories/**'], // Exclude all files nested inside src/stories
      reportsDirectory: 'vitest/test-coverage',
    },
    setupFiles: './src/setupTests.ts',
  },
});
