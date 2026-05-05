const { javascript } = require('projen');

new javascript.NodeProject({
  defaultReleaseBranch: 'main',
  name: 'cursed-repo',
});
