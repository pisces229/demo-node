# husky

```bash
# install husky
pnpm add -D husky
# init husky
pnpm husky init
# add pre-commit hook
echo "pnpm exec lint-staged" > .husky/pre-commit
# run prepare script
pnpm husky
# check hooksPath
git config core.hooksPath
# reset hooksPath
git config --unset core.hooksPath
```

```json
    "scripts": {
        "prepare": "husky"
    },
    "lint-staged": {
        "**/*.{js,ts}": [
            "eslint --fix",
            "prettier --write"
        ],
        "**/*.{cs}": [
            "dotnet format --include"
        ]
    }
```

## pre-commit

```bash
#!/usr/bin/env sh
. "$(dirname -- "$0")/_/husky.sh"

# 1. Get current branch name
current_branch=$(git rev-parse --abbrev-ref HEAD)

# 2. Check branch name
# Only run lint-staged on 'main' or 'develop' branches
if [ "$current_branch" = "main" ] || [ "$current_branch" = "develop" ]; then
  echo "⚠️  Critical branch detected: $current_branch. Running lint-staged..."
  pnpm exec lint-staged
else
  # Skip for other branches (e.g., feature/login)
  echo "✅ Branch $current_branch: Skipping lint-staged."
fi
```
