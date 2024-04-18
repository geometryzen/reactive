import eslintJs from "@eslint/js";
import typescriptEslint from "@typescript-eslint/eslint-plugin";
import typescriptParser from "@typescript-eslint/parser";
import globals from "globals";
import eslintTs from "typescript-eslint";

export default [
    {
        ignores: ["build/**", "coverage/**", "dist/**", "docs/**", "node_modules/**", "types/**"],
    },
    {
        files: ["**/*.ts"],
        languageOptions: {
            parser: typescriptParser,
            parserOptions: {
            },
            globals: globals.browser
        },
        plugins: {
            "@typescript-eslint": typescriptEslint
        },
        "rules": {
            // Make this "error" when releasing.
            "brace-style": [
                2,
                "stroustrup"
            ],
            "no-console": "warn",
            "no-param-reassign": "off",
            "semi": [
                2,
                "always"
            ]
        }

    },
    eslintJs.configs.recommended,
    ...eslintTs.configs.recommended,
];