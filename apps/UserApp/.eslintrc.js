/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  extends: ["@pay-sewa/eslint-config/next.js"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: true,
  },
};
