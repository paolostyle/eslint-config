// WIP

// remove this and whole settings once eslint-plugin-import is updated
const jsExtensions = ['.js', '.jsx'];
const tsExtensions = ['.ts', '.tsx'];
const allExtensions = jsExtensions.concat(tsExtensions);

module.exports = {
  extends: ['plugin:@typescript-eslint/recommended', 'prettier/@typescript-eslint'],
  plugins: ['@typescript-eslint', 'prettier'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json'
  },
  settings: {
    'import/extensions': allExtensions,
    'import/parsers': {
      '@typescript-eslint/parser': tsExtensions
    },
    'import/resolver': {
      node: {
        extensions: allExtensions
      }
    }
  },
  rules: {
    '@typescript-eslint/array-type': ['error', 'array-simple'],
    '@typescript-eslint/ban-types': [
      'error',
      {
        types: {
          Boolean: {
            message: 'Use boolean instead',
            fixWith: 'boolean'
          },
          Function: 'Use a specific function type, like `() => void`.',
          Object: {
            message: 'Use object instead',
            fixWith: 'object'
          },
          Number: {
            message: 'Use number instead',
            fixWith: 'number'
          },
          String: {
            message: 'Use string instead',
            fixWith: 'string'
          },
          Symbol: {
            message: 'Use symbol instead',
            fixWith: 'symbol'
          }
        }
      }
    ],
    camelcase: 'off',
    '@typescript-eslint/camelcase': [
      'error',
      {
        ignoreDestructuring: true,
        properties: 'never'
      }
    ],
    '@typescript-eslint/explicit-function-return-type': ['error', { allowExpressions: true }],
    '@typescript-eslint/explicit-member-accessibility': 'off',
    '@typescript-eslint/member-naming': 'off',
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        vars: 'all',
        args: 'after-used',
        ignoreRestSiblings: true
      }
    ]
  }
};
