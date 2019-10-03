module.exports = {
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:import/typescript',
    'prettier/@typescript-eslint'
  ],
  plugins: ['@typescript-eslint', 'import', 'prettier', 'react'],
  parser: '@typescript-eslint/parser',
  rules: {
    // TypeScript's `noFallthroughCasesInSwitch` option is more robust
    'default-case': 'off',
    // seems like the most universal option for me
    '@typescript-eslint/array-type': [
      'error',
      {
        default: 'array-simple'
      }
    ],
    // bans capitalized names as they should not be used
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
    // same as in standard but for typescript
    '@typescript-eslint/camelcase': [
      'error',
      {
        ignoreDestructuring: true,
        properties: 'never'
      }
    ],
    // seems overly excessive to me, especially for curried functions - TODO: reconsider?
    '@typescript-eslint/explicit-function-return-type': 'off',
    // I REALLY dislike `public` keyword, I'm totally in for using protected/private but `public` is a no for me
    '@typescript-eslint/explicit-member-accessibility': 'off',
    // dangling underscores are ughhh
    '@typescript-eslint/member-naming': 'off',
    // in the ideal world this is next-line-able but it's not the ideal world
    '@typescript-eslint/no-explicit-any': 'off',
    // sometime you really know better than the compiler
    '@typescript-eslint/no-non-null-assertion': 'off',
    // the same as in airbnb
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        vars: 'all',
        args: 'after-used',
        ignoreRestSiblings: true
      }
    ],
    // makes sense but is not in recommended
    '@typescript-eslint/unified-signatures': 'error',
    // hmmmmm
    'import/prefer-default-export': 'off',
    // no reason to use these in TypeScript
    'react/prop-types': 'off',
    // typescript equivalent
    'no-useless-constructor': 'off',
    '@typescript-eslint/no-useless-constructor': 'error'
  }
};
