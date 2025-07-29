import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  root: '.',                     // Явно вказуємо корінь проєкту
  plugins: [react()],
  build: {
    outDir: 'dist',              // Папка для фінального білду
    rollupOptions: {
      input: './index.html'      // ← Ось ключовий рядок
    }
  }
});
