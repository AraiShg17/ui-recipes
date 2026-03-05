---
inclusion: always
---

# Development Guidelines

## Setup

```bash
npm install
npm run dev
```

## Environment Variables

- Use `.env.local` for local-only settings.
- Keep `.env*` files out of git.
- Never hardcode secrets in source code.

## Workflow

1. Create focused, minimal changes.
2. Keep behavior changes covered by checks/tests when possible.
3. Run relevant verification before finishing.
4. Report what changed and any remaining risks.

## Git Guidelines

- Use small commits with clear messages.
- Avoid unrelated refactors in the same change.
- Do not remove existing files unless requested.
