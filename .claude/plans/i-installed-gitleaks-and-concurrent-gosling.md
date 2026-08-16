# Plan: Suppress gitleaks false positives from Yarn release bundle

## Context

Running `gitleaks detect` on tracked files flagged 4 findings, all inside `.yarn/releases/yarn-4.16.0.cjs` — the vendored Yarn Berry release bundle that Yarn commits to the repo for zero-install reproducibility. **None are real credentials:**

| Finding | Value | Why it's a false positive |
|---|---|---|
| 3× `aws-access-token` | `AIDA...` / `AKIA...` patterns | Base64/binary-encoded compiled code (likely WASM) inside the minified bundle — not real keys |
| `generic-api-key` | `6fe4476ee5a1832882e326b506d14126` | Algolia's intentionally public npm-search API key, hardcoded in Yarn's interactive search command |

No credential rotation needed.

## Goal

Suppress these false positives so future `gitleaks` runs exit clean and real secrets surface clearly.

## Approach

Create a `.gitleaks.toml` that excludes `.yarn/releases/` entirely (future-proof for Yarn upgrades), plus add `gitleaks-report.json` to `.gitignore`.

## Files to Create/Modify

### `.gitleaks.toml` (new file, repo root)

```toml
[extend]
useDefault = true

[[allowlists]]
description = "Yarn release bundle — vendored third-party file, not developer-authored"
paths = [".yarn/releases/.*\\.cjs"]
```

This covers all future Yarn upgrades without needing new fingerprints each time.

### `.gitignore` (existing file)

Add `gitleaks-report.json` — no value tracking the scan output in git.

## Verification

Run the scan again after adding the files:

```bash
git ls-files -z | xargs -0 gitleaks detect --verbose --config .gitleaks.toml
# Should exit 0 with no findings
```
