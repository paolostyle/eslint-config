// remove this and whole settings field once eslint-plugin-import is updated
const jsExtensions = ['.js', '.jsx'];
const tsExtensions = ['.ts', '.tsx'];
const allExtensions = jsExtensions.concat(tsExtensions);

module.exports = {
  extends: ['plugin:@typescript-eslint/recommended', 'prettier/@typescript-eslint'],
  plugins: ['@typescript-eslint', 'import', 'prettier', 'react'],
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
    // seems like the most universal option for me
    '@typescript-eslint/array-type': ['error', 'array-simple'],
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
    // seems overly excessive to me, especially for curried functions - will reconsider
    '@typescript-eslint/explicit-function-return-type': 'off',
    // I REALLY dislike `public` keyword, I'm totally in for using protected/private but `public` is a no for me
    '@typescript-eslint/explicit-member-accessibility': 'off',
    // dangling underscores are ughhh
    '@typescript-eslint/member-naming': 'off',
    // this is useful and more like a disable-next-line kind of rule but for now I'll leave it as is
    '@typescript-eslint/no-explicit-any': 'off',
    // sometime you really know better than the compiler
    '@typescript-eslint/no-non-null-assertion': 'off',
    // for more dynamic type definitions
    '@typescript-eslint/no-object-literal-type-assertion': [
      true,
      {
        'allow-arguments': true
      }
    ],
    // the same as in airbnb
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        vars: 'all',
        args: 'after-used',
        ignoreRestSiblings: true
      }
    ],
    // using type is shorter and there's no reason to not use them where it makes sense
    '@typescript-eslint/prefer-interface': 'off',
    // makes sense but is not in recommended
    '@typescript-eslint/unified-signature': 'error',
    // it gives false errors with importing types/interfaces from other modules
    'import/named': 'off',
    // honestly... I'm conflicted here, this one might change
    'import/prefer-default-export': 'off',
    // no reason to use these in TypeScript
    'react/prop-types': 'off'
  }
};
