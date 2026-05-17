/**
 * PM2 — Leandro Felix Portfolio (Vite SPA)
 *
 * Antes de subir em produção:
 *   yarn install
 *   yarn build
 *   pm2 start ecosystem.config.cjs --env production
 *
 * Comandos úteis:
 *   pm2 reload ecosystem.config.cjs --env production
 *   pm2 logs leandrofelix-portfolio
 *   pm2 stop leandrofelix-portfolio
 */

const path = require('node:path')

const appRoot = __dirname

/** @type {import('pm2').StartOptions} */
module.exports = {
  apps: [
    {
      name: 'portfolio',
      cwd: appRoot,
      script: 'yarn',
      args: 'preview --host 0.0.0.0 --port 3000 --strictPort',
      interpreter: 'none',
      instances: 1,
      exec_mode: 'fork',
      autorestart: true,
      watch: false,
      max_memory_restart: '300M',
      time: true,
      merge_logs: true,
      out_file: path.join(appRoot, 'logs/pm2-out.log'),
      error_file: path.join(appRoot, 'logs/pm2-error.log'),
      env: {
        NODE_ENV: 'development',
      },
      env_production: {
        NODE_ENV: 'production',
      },
    },
  ],
}
