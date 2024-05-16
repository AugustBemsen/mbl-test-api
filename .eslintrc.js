module.exports = {
    env: {
        es2021: true,
        node: true,
    },
    extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended"],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaVersion: 12,
        sourceType: "module",
    },
    plugins: ["@typescript-eslint"],
    rules: {
        "indent": "off",
        "linebreak-style": ["error", process.platform === "win32" ? "windows" : "unix"],
        "quotes": ["error", "double"],
        "semi": ["error", "always"],
        "@typescript-eslint/no-explicit-any": "off",
    },
};
