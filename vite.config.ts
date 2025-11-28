import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  // Fix: Use '.' as envDir to avoid calling process.cwd() which causes a TS error in this environment
  const env = loadEnv(mode, '.', '');
  return {
    plugins: [react()],
    define: {
      // This ensures process.env.API_KEY works in the browser
      'process.env.API_KEY': JSON.stringify(env.API_KEY)
    }
  };
});