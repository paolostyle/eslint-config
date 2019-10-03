module.exports = {
  extends: ['airbnb-base', 'prettier'],
  plugins: ['import', 'prettier'],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  env: {
    browser: true,
    es6: true,
    jest: true,
    node: true
  },
  rules: {
    // THE MOST IMPORTANT RULE DON'T EVEN TRY TO CHANGE IT
    'prettier/prettier': 'error',

    // API responses often has properties that use snake_case
    // https://eslint.org/docs/rules/camelcase
    camelcase: [
      'error',
      {
        ignoreDestructuring: true,
        properties: 'never'
      }
    ],

    // reports redux reducers
    // https://eslint.org/docs/rules/default-param-last
    'default-param-last': 'off',

    // It should crash the build
    // https://eslint.org/docs/rules/no-console
    'no-console': 'error',

    // https://eslint.org/docs/rules/no-import-assign
    'no-import-assign': 'error',

    // Disabled because it sucks with Array.prototype.reduce
    // https://eslint.org/docs/rules/no-param-reassign
    'no-param-reassign': 'off',

    // It's ok to use increment operator in for loops (even though they're discouraged)
    // https://eslint.org/docs/rules/no-plusplus
    'no-plusplus': [
      'error',
      {
        allowForLoopAfterthoughts: true
      }
    ],

    // Excludes for..of - I'm using redux-saga in my project and it's the only readable way
    // to put multiple actions, had similar experience in async/await
    'no-restricted-syntax': [
      'error',
      {
        selector: 'ForInStatement',
        message:
          'for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array.'
      },
      {
        selector: 'LabeledStatement',
        message:
          'Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.'
      },
      {
        selector: 'WithStatement',
        message:
          '`with` is disallowed in strict mode because it makes code impossible to predict and optimize.'
      }
    ],

    // Disabled because it's tedious when using with Redux's mapDispatchToProps
    // https://eslint.org/docs/rules/no-shadow
    'no-shadow': 'off',

    // Annoying
    'no-nested-ternary': 'off',

    // Annoying
    'no-else-return': 'off',

    // https://eslint.org/docs/rules/prefer-regex-literals
    'prefer-regex-literals': 'error',

    // Not really super useful and is a resource hog
    'import/no-cycle': 'off',

    // Added ejected CRA rules
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: [
          'test/**', // tape, common npm pattern
          'tests/**', // also common npm pattern
          'spec/**', // mocha, rspec-like pattern
          '**/__tests__/**', // jest pattern
          '**/__mocks__/**', // jest pattern
          'test.{js,jsx}', // repos with a single test file
          'test-*.{js,jsx}', // repos with multiple top-level test files
          '**/*{.,_}{test,spec}.{js,jsx}', // tests where the extension or filename suffix denotes that it is a test
          '**/jest.config.js', // jest config
          '**/jest.setup.js', // jest setup
          '**/vue.config.js', // vue-cli config
          '**/webpack.config.js', // webpack config
          '**/webpack.config.*.js', // webpack config
          '**/rollup.config.js', // rollup config
          '**/rollup.config.*.js', // rollup config
          '**/gulpfile.js', // gulp config
          '**/gulpfile.*.js', // gulp config
          '**/Gruntfile{,.js}', // grunt config
          '**/protractor.conf.js', // protractor config
          '**/protractor.conf.*.js', // protractor config,
          './config/**/*.js', // ejected cra
          './scripts/**/*.js' // ejected cra
        ],
        optionalDependencies: false
      }
    ]
  }
};
