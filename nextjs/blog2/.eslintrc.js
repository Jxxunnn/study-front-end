module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@next/next/recommended",
  ],
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react", "tailwindcss", "next"],
  rules: {
    "react/prop-types": 0,
    "react/react-in-jsx-scope": 0,
    "no-undef": 0,
  },
};
