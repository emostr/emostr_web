import { writeFileSync } from 'node:fs';
import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);
const si = require('simple-icons');

const MAP = {
  typescript: 'typescript',
  vue: 'vuedotjs',
  svelte: 'svelte',
  go: 'go',
  node: 'nodedotjs',
  nest: 'nest',
  mariadb: 'mariadb',
  php: 'php',
  laravel: 'laravel',
  dotnet: 'dotnet',
  tailwind: 'tailwindcss',
  docker: 'docker',
  github: 'github',
  telegram: 'telegram',
  protonmail: 'protonmail',
};

const lines = ['export const iconPaths: Record<string, string> = {'];

for (const [id, slug] of Object.entries(MAP)) {
  const key = 'si' + slug.charAt(0).toUpperCase() + slug.slice(1);
  const icon = si[key];
  if (!icon) throw new Error(`simple-icons: не найдена иконка «${slug}»`);
  lines.push(`  ${id}: '${icon.path}',`);
}

lines.push('};');
lines.push('');

writeFileSync(new URL('../src/lib/data/icons.ts', import.meta.url), lines.join('\n'));
console.log(`icons.ts: ${Object.keys(MAP).length} иконок`);
