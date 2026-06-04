# Contributing

This is a personal portfolio site. The source code is public for reference, but the content (personal data, copy, and assets) is not licensed for reuse — see [LICENSE](LICENSE).

## If you spot a bug or have a suggestion

Open an issue. PRs are welcome for genuine bugs or accessibility improvements.

## Development setup

```sh
corepack enable
yarn install
yarn dev
```

## Before committing

The pre-commit hook runs automatically:

- **lint-staged** — ESLint + Prettier on staged files
- **tsc --noEmit** — full type check
- **commitlint** — enforces conventional commit format

Fix any errors before pushing. To run them manually:

```sh
yarn lint
yarn tsc --noEmit
yarn format:check
```

## Commit format

```
<type>: <description>
```

Types: `feat`, `fix`, `refactor`, `docs`, `test`, `chore`, `perf`, `ci`
