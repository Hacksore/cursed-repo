# Configuration Zoo

This repo intentionally carries many overlapping industry-standard files. Most are tiny placeholders with realistic settings so the repo remains inspectable while still feeling cursed.

## Agent and assistant guidance

- Root instruction files: `AGENTS.md`, `CLAUDE.md`, `GEMINI.md`, `COPILOT.md`, `AIDER.md`, `CURSOR.md`, `WINDSURF.md`, `QWEN.md`, `CODEX.md`
- Hidden agent folders: `.agents/`, `.agent/`, `.cursor/`, `.claude/`, `.gemini/`, `.windsurf/`, `.continue/`, `.aider/`, `.goose/`, `.openhands/`, `.codex/`, `.amazonq/`, `.codeium/`, `.sourcegraph/`, `.qodo/`, `.cody/`, `.junie/`, `.kiro/`, `.augment/`, `.roo/`, `.amp/`, `.superclaude/`, `.bolt/`
- Repeated skills files: many of those folders include `SKILLS.md` on purpose.
- Gemini-specific peers in this zoo: `.geminiignore`, `.gemini/settings.json`.

## JavaScript tooling

- Package managers: npm, pnpm, Yarn, Bun, Deno, Volta, nvm, asdf, mise
- Linters and formatters: ESLint, Prettier, Stylelint, Markdownlint, Remark, Textlint, CSpell, Alex, YAML lint
- Test runners: Node test runner, Jest, Vitest, Playwright, Cypress, AVA, Mocha, Karma, TAP, Stryker
- Bundlers/build tools: Babel, Webpack, Rollup, Vite, TypeScript, PostCSS, Tailwind, Storybook, Docusaurus

## Operations

CI/CD, containers, deployment, security scanning, release automation, and repo governance configs are all represented to maximize file-wise fragmentation.
