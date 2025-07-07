import tailwindcss from '@tailwindcss/vite';
import basicSsl from '@vitejs/plugin-basic-ssl';
import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';
import { capo } from 'vite-plugin-capo';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig(() => {
  return {
    plugins: [react(), tailwindcss(), tsconfigPaths(), basicSsl(), capo()],
    publicDir: 'public',
  };
});
