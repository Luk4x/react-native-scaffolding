module.exports = {
  root: true,
  extends: ['universe/native'],
  ignorePatterns: ['.expo', '**/node_modules/**', '**/packages/cli/dist/**'],
  '@typescript-eslint/quotes': [
    'error',
    'single',
    {
      avoidEscape: true,
      allowTemplateLiterals: true,
    },
  ],
};
