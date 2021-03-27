module.exports = {
  root: true,
  env: {
    node: true,
  },
  plugins: ["sonarjs"],
  extends: [
    "plugin:vue/essential",
    "eslint:recommended",
    "plugin:vue/strongly-recommended",
    "plugin:vue/recommended",
    "plugin:sonarjs/recommended",
  ],
  parserOptions: {
    parser: "babel-eslint",
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
  },
  overrides: [
    {
      files: [
        "**/__tests__/*.{j,t}s?(x)",
        "**/tests/unit/**/*.spec.{j,t}s?(x)",
      ],
      env: {
        jest: true,
      },
    },
  ],
};
