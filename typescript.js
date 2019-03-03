// WIP

module.exports = {
  extends: ['plugin:@typescript-eslint/recommended', 'prettier/@typescript-eslint'],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'prettier'],
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
    '@typescript-eslint/member-naming': 'off'
  }
};
