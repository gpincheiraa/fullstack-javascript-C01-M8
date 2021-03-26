module.exports = {
  preset: '@vue/cli-plugin-unit-jest',
  collectCoverage: true,
  coverageDirectory: './coverage',
  coverageThreshold: {
      "global": {
        "branches": 80,
        "functions": 80,
        "lines": 80,
        "statements": -10
      }
  },
  collectCoverageFrom: [
    "**/src/**/*.{js,jsx,vue}",
    "!**/node_modules/**",
    "!**/vendor/**"
  ]
}
