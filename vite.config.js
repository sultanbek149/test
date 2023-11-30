import { defineConfig } from 'vite';

export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                // main: 'main.js', // Specify your main JavaScript entry file.
                main: 'index.html',
                // Add more entries for each HTML file.
            },
        },
    },
});
