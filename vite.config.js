// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/douglas-lodge/',
  optimizeDeps: {
    include: [
      '@emotion/react', 
      '@emotion/styled', 
      '@mui/material/Tooltip',
      '@mui/material/useTheme',
      '@mui/material/styles',
      '@mui/material/Box',
      '@mui/material/Typography',
      '@mui/material/Grid',
      '@mui/material/ImageList',
      '@mui/material/ImageListItem',
    ],
  },
  plugins: [
    react({
      jsxImportSource: '@emotion/react',
      babel: {
        plugins: ['@emotion/babel-plugin'],
      },
    }),
  ],
});
