module.exports = {
    root: true,
    env: { browser: true, es2020: true },
    extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/strict-type-checked",
        "plugin:react-hooks/recommended",
    ],
    ignorePatterns: ["dist", ".eslintrc.cjs"],
    parser: "@typescript-eslint/parser",
    plugins: ["react-refresh"],
    rules: {
        "react-refresh/only-export-components": [
            "warn",
            { allowConstantExport: true },
        ],

        parserOptions: {
            ecmaVersion: 'latest',
            sourceType: 'module',
            project: ['./tsconfig.json', './tsconfig.node.json'],
            tsconfigRootDir: __dirname,
        },
    },
};
