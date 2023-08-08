module.exports = {
  root: true,
  env: {
    browser: true,
    es2020: true,
  },
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module', // Use "module" for ES modules
  },
  settings: {
    react: {
      version: 'detect', // Automatically detect React version
    },
  },
  plugins: ['react', 'prettier', 'tailwindcss'], // List plugins before extending them
  extends: [
    'eslint:recommended',
    'airbnb',
    'airbnb/hooks',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:tailwindcss/recommended',
    'plugin:prettier/recommended',
  ],
  overrides: [
    {
      files: ['*.js', '*.jsx'],
      rules: {
        'import/extensions': 'off',
      },
    },
  ],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
  },
};
