import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'node:path';
import fs from 'node:fs';

export default defineConfig({
  plugins: [
    react(),
    {
      name: 'serve-local-img',
      configureServer(server) {
        server.middlewares.use('/img', (req, res, next) => {
          try {
            const cleanUrl = (req.url || '').split('?')[0];
            const decodedUrl = decodeURIComponent(cleanUrl);
            const safePath = path.normalize(decodedUrl).replace(/^(\.\.[\/\\])+/, '');
            const filePath = path.join(__dirname, 'img', safePath);

            if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
              const ext = path.extname(filePath).toLowerCase();
              const mimeTypes: Record<string, string> = {
                '.jpg': 'image/jpeg',
                '.jpeg': 'image/jpeg',
                '.png': 'image/png',
                '.gif': 'image/gif',
                '.webp': 'image/webp',
                '.svg': 'image/svg+xml',
                '.mp4': 'video/mp4',
                '.heic': 'image/heic',
              };
              res.setHeader('Content-Type', mimeTypes[ext] || 'application/octet-stream');
              res.setHeader('Cache-Control', 'public, max-age=3600');
              return fs.createReadStream(filePath).pipe(res);
            }
          } catch (e) {
            console.error('Image serve error:', e);
          }
          next();
        });
      },
    },
  ],
  server: {
    port: 3000,
    host: true,
  },
});
