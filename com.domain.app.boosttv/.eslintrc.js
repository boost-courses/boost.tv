/* eslint-env node */
module.exports = {
  root: true,
  env: {
    browser: true,
    es6: true,
  },
  plugins: ["prettier"],
  extends: ["eslint:recommended", "plugin:prettier/recommended", "prettier"],
  rules: {
    quotes: [2, "double", "avoid-escape"],
    semi: [2, "always"],
    "no-extra-boolean-cast": "off",
    "no-unused-vars": [
      1,
      {
        ignoreRestSiblings: true,
        argsIgnorePattern: "res|next|^err",
      },
    ],
    "prettier/prettier": [
      "error",
      {
        singleQuote: false,
        tabWidth: 2,
        semi: true,
        printWidth: 100,
        parser: "flow",
      },
    ],
  },
  parserOptions: {
    parser: "babel-eslint",
    ecmaVersion: 2018,
    sourceType: "module",
  },
};
