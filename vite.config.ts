import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
    build: {
        manifest: true,
        rollupOptions: {
            input: [
                './src/index.ts',
            ],
            output: {
                entryFileNames: 'assets/[name].js',
                chunkFileNames: `assets/[name].js`,
                assetFileNames: `assets/[name].[ext]`
            },
        },
    },
});
