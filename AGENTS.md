# Common Agent Instructions

## Purpose
Store shared instructions for all agents working in this repository.

## Scope
These instructions apply to all tasks unless a more specific instruction file is provided.

## Baseline Rules
- Keep changes small and focused.
- Prefer readable code over clever code.
- Add or update tests when behavior changes.
- Avoid destructive operations unless explicitly requested.
- Document non-obvious decisions in PR descriptions or commit messages.

## Required Pre-Read
Before implementing any task, read the rule files in `agent/` and follow them.

Minimum set:
- `agent/product.md`
- `agent/tech.md`
- `agent/structure.md`
- `agent/development.md`
- `agent/security.md`

If the task touches specific topics, also read the related files (for example layout, styling, popover, dialog, view transitions, anchor positioning).

## Priority
When instructions conflict, follow this order:
1. Direct user request
2. This `AGENTS.md`
3. Topic-specific files under `agent/`

## Workflow
1. Read task-specific instructions first.
2. Read required files under `agent/` before coding.
3. Confirm assumptions before making large changes.
4. Run relevant checks before finishing.
5. Report what changed, why, and what remains.
