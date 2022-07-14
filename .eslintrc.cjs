/* eslint-env node */
require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
    "root": true,
    "extends": [
        "plugin:vue/vue3-essential",
        "eslint:recommended",
        "@vue/eslint-config-typescript/recommended"
    ],
    "env": {
        "browser": true,
        "amd": true,
        "node": true
    },
    "rules": {
        "indent": ["error", 4],
        "semi": ["error", "always"],
        "semi-spacing": "error",
        "space-before-function-paren": ["error", "always"],
        "curly": "error",
        "default-case": "error",
        "max-lines-per-function": ["error", 25],
        "max-params": ["error", 4],
        "no-console": ["warn"],
        "arrow-spacing": ["error", { "before": true, "after": true }],
        "arrow-parens": ["error", "always"],
        "comma-style": ["error", "last"],
        "object-curly-spacing": ["error", "always"],
        "no-unneeded-ternary": "error",
        "prefer-const": "error",
        "spaced-comment": ["error", "always"]
    }
};
