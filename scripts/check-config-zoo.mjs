import { access, readFile } from 'node:fs/promises';

const requiredFiles = [
  'AGENTS.md',
  '.agents/SKILLS.md',
  '.agent/SKILLS.md',
  '.cursor/SKILLS.md',
  '.claude/SKILLS.md',
  '.gemini/SKILLS.md',
  '.github/copilot-instructions.md',
  '.windsurf/SKILLS.md',
  '.continue/SKILLS.md',
  '.openhands/SKILLS.md',
  '.codex/SKILLS.md',
  '.npmrc',
  '.gitignore',
  '.editorconfig',
  'package.json',
];

const jsonFiles = [
  'package.json',
  '.agents/config.json',
  '.claude/settings.json',
  '.continue/config.json',
  '.codeium/config.json',
  '.cspell.json',
  '.markdownlint.json',
  '.stylelintrc.json',
  '.lintstagedrc.json',
  '.commitlintrc.json',
  '.nycrc.json',
  '.stryker.conf.json',
  'renovate.json',
  'vercel.json',
  'tsconfig.json',
  'jsconfig.json',
];

await Promise.all(requiredFiles.map((file) => access(file)));

for (const file of jsonFiles) {
  JSON.parse(await readFile(file, 'utf8'));
}

console.log(`Config zoo check passed (${requiredFiles.length} required files, ${jsonFiles.length} JSON files).`);
