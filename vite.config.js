import { defineConfig } from 'vite';

// Get the repository name to properly configure base path for GitHub Pages
// Default to '/' if not in a GitHub Pages environment
const base = process.env.GITHUB_REPOSITORY
  ? `/${process.env.GITHUB_REPOSITORY.split('/')[1]}/`
  : '/';

export default defineConfig({
  base,
  build: {
    outDir: 'dist',
  },
  server: {
    host: '0.0.0.0',
  },
});
