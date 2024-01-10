import { defineConfig } from 'vitest/config';

export default defineConfig({
    test: {
        clearMocks: true,
        unstubGlobals: true,
        environment: 'jsdom',
        globals: true,
        include: [
            './src/**/*.test.ts',
        ],
    },
});
