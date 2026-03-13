// eslint.config.js
import js from '@eslint/js'
import prettierConfig from 'eslint-config-prettier'
import tseslint from 'typescript-eslint'
import { globalIgnores } from 'eslint/config'
import unusedImports from 'eslint-plugin-unused-imports'

export default [
    // ignore files
    globalIgnores(['**/dist/**', '**/node_modules/**']),
    // JavaScript
    js.configs.recommended,
    // TypeScript
    ...tseslint.configs.recommended,
    ...tseslint.configs.stylistic,
    // Custom
    {
        files: ['**/*.{js,ts}'],
        plugins: {
            'unused-imports': unusedImports,
            '@typescript-eslint': tseslint.plugin,
        },
        languageOptions: {
            ecmaVersion: 'latest',
            sourceType: 'module',
            parser: tseslint.parser,
            parserOptions: {
                project: ['./tsconfig.json'],
                tsconfigRootDir: import.meta.dirname,
            },
        },
        rules: {
            'unused-imports/no-unused-imports': 'error',
            '@typescript-eslint/no-unused-vars': 'off',
            'unused-imports/no-unused-vars': [
                'warn',
                {
                    vars: 'all',
                    varsIgnorePattern: '^_',
                    args: 'after-used',
                    argsIgnorePattern: '^_',
                },
            ],
            '@typescript-eslint/no-explicit-any': 'error',
        },
    },

    // close tsconfig check for config files
    {
        files: ['*.config.js', '*.config.ts'],
        languageOptions: {
            parserOptions: {
                project: null,
            },
        },
    },

    // close prettier conflict rules (must be last)
    prettierConfig,
]
