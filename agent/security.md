# Security and Environment Variables

## Secrets Handling

- Store local secrets only in `.env.local`.
- Never commit secrets to git.
- Never print secret values in logs.
- Do not hardcode keys/tokens in code.

## `.gitignore` Requirements

Ensure these patterns are ignored:

```gitignore
.env
.env.local
.env.development.local
.env.test.local
.env.production.local
```

## Runtime Access Pattern

```ts
const apiKey = process.env.API_KEY;
if (!apiKey) {
  throw new Error('API_KEY is not set');
}
```

## Review Checklist

- [ ] No secrets committed
- [ ] No secrets in logs
- [ ] No hardcoded credentials
- [ ] `.env*` files are ignored
