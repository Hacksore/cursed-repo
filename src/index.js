export function listConfigFamilies() {
  return [
    'agent instructions',
    'dotfiles',
    'package managers',
    'ci providers',
    'deployment targets',
    'security scanners',
  ];
}

if (import.meta.url === `file://${process.argv[1]}`) {
  console.log(`Cursed config families: ${listConfigFamilies().join(', ')}`);
}
