import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import federation from '@originjs/vite-plugin-federation';

export default defineConfig({
  plugins: [
    react(),
    // federation({
    //   name: 'host-app',
    //   remotes: {
    //     remote_app:
    //       'https://dzfa1uifb0sb6.cloudfront.net/buildTestjs/remote-test/index-BQ9Cp-Ld.js',
    //   },
    //   shared: ['react'],
    // }),
  ],
  build: {
    modulePreload: false,
    target: 'esnext',

    minify: false,
    cssCodeSplit: false,
  },
});
