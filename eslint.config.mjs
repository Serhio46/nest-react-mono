import js from '@eslint/js';
import ts from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import prettier from 'eslint-plugin-prettier';
import importPlugin from 'eslint-plugin-import';
import globals from 'globals';

export default [
    {
        files: ['**/*.{ts,tsx}'],
        languageOptions: {
            parser: tsParser,
            globals: {
                ...globals.jest,
                ...globals.node,
                ...globals.browser,
            },
        },
        plugins: {
            '@typescript-eslint': ts,
            prettier,
            import: importPlugin,
        },
        rules: {
            ...js.configs.recommended.rules,
            ...ts.configs.recommended.rules,
            'prettier/prettier': 'warn',
            'no-console': 'warn',
            '@typescript-eslint/no-unused-vars': 'error',
            'import/order': [
                'error',
                {
                    groups: [['builtin', 'external'], 'internal', ['sibling', 'parent'], 'index'],
                },
            ],
        },
    },
    {
        files: ['*.ts', '*.tsx'],
        rules: {
            '@typescript-eslint/explicit-function-return-type': 'off',
        },
    },
];
