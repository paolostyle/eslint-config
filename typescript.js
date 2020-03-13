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
    'no-unused-expressions': 'off',
    '@typescript-eslint/no-unused-expressions': [
      'error',
      {
        allowShortCircuit: false,
        allowTernary: true,
        allowTaggedTemplates: true
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
    '@typescript-eslint/no-useless-constructor': 'error',

    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/consistent-type-definitions': 'off',
    '@typescript-eslint/consistent-type-assertions': [
      'error',
      {
        assertionStyle: 'as',
        objectLiteralTypeAssertions: 'allow'
      }
    ],

    // reports redux reducers
    'default-param-last': 'off',
    '@typescript-eslint/default-param-last': 'off',

    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/member-ordering': 'off',

    'no-dupe-class-members': 'off',
    '@typescript-eslint/no-dupe-class-members': 'error',

    '@typescript-eslint/no-dynamic-delete': 'off',
    '@typescript-eslint/no-extra-non-null-assertion': 'error',
    '@typescript-eslint/no-extraneous-class': 'error',

    '@typescript-eslint/no-magic-numbers': 'off',
    '@typescript-eslint/no-non-null-asserted-optional-chain': 'error',
    '@typescript-eslint/no-parameter-properties': 'off',
    '@typescript-eslint/no-require-imports': 'error',
    '@typescript-eslint/no-type-alias': 'off',
    '@typescript-eslint/prefer-as-const': 'error',
    '@typescript-eslint/prefer-for-of': 'error',
    '@typescript-eslint/prefer-function-type': 'off',
    '@typescript-eslint/prefer-optional-chain': 'error',
    '@typescript-eslint/typedef': 'off'

    // '@typescript-eslint/await-thenable': '',
    // '@typescript-eslint/naming-convention': '',
    // '@typescript-eslint/no-base-to-string': '',
    // '@typescript-eslint/no-floating-promises': '',
    // '@typescript-eslint/no-for-in-array': '',
    // '@typescript-eslint/no-implied-eval': '',
    // '@typescript-eslint/no-misused-promises': '',
    // '@typescript-eslint/no-throw-literal': '',
    // '@typescript-eslint/no-unnecessary-boolean-literal-compare': '',
    // '@typescript-eslint/no-unnecessary-condition': '',
    // '@typescript-eslint/no-unnecessary-qualifier': '',
    // '@typescript-eslint/no-unnecessary-type-arguments': '',
    // '@typescript-eslint/no-unnecessary-type-assertion': '',
    // '@typescript-eslint/no-unsafe-call': '',
    // '@typescript-eslint/no-unsafe-member-access': '',
    // '@typescript-eslint/no-unsafe-return': '',
    // '@typescript-eslint/no-unused-vars-experimental': '',
    // '@typescript-eslint/prefer-includes': '',
    // '@typescript-eslint/prefer-nullish-coalescing': '',
    // '@typescript-eslint/prefer-readonly': '',
    // '@typescript-eslint/prefer-readonly-parameter-types': '',
    // '@typescript-eslint/prefer-regexp-exec': '',
    // '@typescript-eslint/prefer-string-starts-ends-with': '',
    // '@typescript-eslint/promise-function-async': '',
    // '@typescript-eslint/require-array-sort-compare': '',
    // '@typescript-eslint/restrict-plus-operands': '',
    // '@typescript-eslint/restrict-template-expressions': '',
    // '@typescript-eslint/strict-boolean-expressions': '',
    // '@typescript-eslint/switch-exhaustiveness-check': '',
    // '@typescript-eslint/unbound-method': '',

    // '@typescript-eslint/require-await': '',
    // '@typescript-eslint/return-await': '',
  }
};
