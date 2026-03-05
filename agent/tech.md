---
inclusion: always
---

# Tech Stack

## Core

- Framework: Next.js (App Router)
- Language: TypeScript
- Styling: CSS Modules + global CSS (no Tailwind)
- Package Manager: npm
- Runtime: Node.js 20+

## Styling Rules

### Allowed

- CSS Modules (`*.module.css`)
- Modern native CSS features with progressive enhancement
- SVG filters where appropriate

### Not Allowed

- Tailwind CSS
- CSS-in-JS libraries by default
- UI frameworks that bypass project CSS rules unless explicitly requested

## Quality Commands

```bash
npm run dev
npm run build
npm run lint
```

If additional scripts exist in `package.json`, run them as needed for the task.
