import tailwindcss from '@tailwindcss/vite';
import basicSsl from '@vitejs/plugin-basic-ssl';
import react from '@vitejs/plugin-react-swc';
import dotenv from 'dotenv';
import path from 'path';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig(() => {
  // Set environment variables
  const envDir = path.resolve(__dirname, 'config');
  const envPath = path.join(envDir, `.env`);
  dotenv.config({ path: envPath });

  return {
    plugins: [react(), tailwindcss(), tsconfigPaths(), basicSsl()],
  };
});
