# cursed-repo

A deliberately over-configured JavaScript repository.

The point of this project is not application complexity; it is file-system complexity. It collects overlapping dotfiles, CI definitions, package-manager settings, editor configs, deployment manifests, security scanner configs, and agent-specific instruction folders to show how fragmented modern JavaScript project conventions have become.

See [CONFIG_ZOO.md](./CONFIG_ZOO.md) for the catalog.

## Commands

```sh
npm test
npm run lint
npm run check:configs
```

## Cursed rule

If a tool has a conventional root config file, a dotfile, a hidden directory, a YAML variant, and a JSON variant, this repo probably has at least one of them.
