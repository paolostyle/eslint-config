module.exports = {
  extends: ['airbnb-base', 'prettier', 'prettier/react'],
  plugins: ['import', 'prettier', 'react', 'react-hooks'],
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
  settings: {
    react: {
      version: 'detect'
    }
  },
  rules: {
    // *** Different from Airbnb
    // API responses often has properties that use snake_case
    // https://eslint.org/docs/rules/camelcase
    camelcase: [
      'error',
      {
        ignoreDestructuring: true,
        properties: 'never'
      }
    ],

    // *** Different from Airbnb
    // Excludes React component methods, but removed UNSAFE_ methods
    // https://eslint.org/docs/rules/camelcase
    'class-methods-use-this': [
      'error',
      {
        exceptMethods: [
          'render',
          'getInitialState',
          'getDefaultProps',
          'getChildContext',
          'componentWillMount',
          'componentDidMount',
          'componentWillReceiveProps',
          'shouldComponentUpdate',
          'componentWillUpdate',
          'componentDidUpdate',
          'componentWillUnmount',
          'componentDidCatch',
          'getSnapshotBeforeUpdate'
        ]
      }
    ],

    // $$$ eslint-find-rules does not detect the airbnb one
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-named-export.md
    'import/no-named-export': 'off',

    // *** Different from Airbnb
    // Only one class per file allowed
    // https://eslint.org/docs/rules/max-classes-per-file
    'max-classes-per-file': ['error', 1],

    // *** Different from Airbnb
    // It should crash the build
    // https://eslint.org/docs/rules/no-console
    'no-console': 'error',

    // *** Different from Airbnb
    // Disabled because it sucks with Array.prototype.reduce
    // https://eslint.org/docs/rules/no-param-reassign
    'no-param-reassign': 'off',

    // *** Different from Airbnb
    // It's ok to use increment operator in for loops (even though they're discouraged)
    // https://eslint.org/docs/rules/no-plusplus
    'no-plusplus': [
      'error',
      {
        allowForLoopAfterthoughts: true
      }
    ],

    // *** Different from Airbnb
    // Disabled because it's tedious when using with Redux's mapDispatchToProps
    // https://eslint.org/docs/rules/no-shadow
    'no-shadow': 'off',

    // ### New rule, not specified in Airbnb
    // https://eslint.org/docs/rules/no-useless-catch
    'no-useless-catch': 'error',

    // ### New rule, not specified in Airbnb
    // https://eslint.org/docs/rules/prefer-named-capture-group
    'prefer-named-capture-group': 'off',

    // *** Different from Airbnb
    // THE MOST IMPORTANT RULE DON'T EVEN TRY TO CHANGE IT
    'prettier/prettier': 'error',

    // TODO: consider enabling?
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/boolean-prop-naming.md
    'react/boolean-prop-naming': [
      'off',
      {
        message: '',
        propTypeNames: ['bool', 'mutuallyExclusiveTrueProps'],
        rule: '^(is|has)[A-Z]([A-Za-z0-9]?)+'
      }
    ],

    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/button-has-type.md
    'react/button-has-type': [
      'error',
      {
        button: true,
        reset: false,
        submit: true
      }
    ],

    // *** Different from Airbnb
    // I don't really use default props unless it makes sense, so it's disabled
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/default-props-match-prop-types.md
    'react/default-props-match-prop-types': 'off',

    // *** Different from Airbnb
    // Disabled, because it's ridculous to use it when there's only one prop to destructure
    // https://github.com/yannickcr/eslint-plugin-react/blob/843d71a432baf0f01f598d7cf1eea75ad6896e4b/docs/rules/destructuring-assignment.md
    'react/destructuring-assignment': 'off',

    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/display-name.md
    'react/display-name': 'off',

    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/forbid-component-props.md
    'react/forbid-component-props': [
      'off',
      {
        forbid: []
      }
    ],

    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/forbid-dom-props.md
    'react/forbid-dom-props': [
      'off',
      {
        forbid: []
      }
    ],

    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/forbid-elements.md
    'react/forbid-elements': [
      'off',
      {
        forbid: []
      }
    ],

    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/forbid-foreign-prop-types.md
    'react/forbid-foreign-prop-types': [
      'error',
      {
        allowInPropTypes: true
      }
    ],

    // *** Different from Airbnb
    // Sometimes it DOES make sense to use any/object/array
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/forbid-prop-types.md
    'react/forbid-prop-types': 'off',

    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-boolean-value.md
    'react/jsx-boolean-value': [
      'error',
      'never',
      {
        always: []
      }
    ],

    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-child-element-spacing.md
    'react/jsx-child-element-spacing': 'off',

    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-curly-brace-presence.md
    'react/jsx-curly-brace-presence': [
      'error',
      {
        children: 'never',
        props: 'never'
      }
    ],

    // *** Different from Airbnb
    // I prefer using .js and so should you, but you can do whatever you want
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-filename-extension.md
    'react/jsx-filename-extension': 'off',

    // *** Different from Airbnb
    // This will most likely change in next major release of Airbnb
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-fragments.md
    'react/jsx-fragments': ['error', 'syntax'],

    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-handler-names.md
    'react/jsx-handler-names': 'off',

    // *** Different from Airbnb
    // Not sure why it's disabled in Airbnb but this is very hand IMO
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-key.md
    'react/jsx-key': 'error',

    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-max-depth.md
    'react/jsx-max-depth': 'off',

    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-bind.md
    'react/jsx-no-bind': [
      'error',
      {
        allowArrowFunctions: true,
        allowBind: false,
        allowFunctions: false,
        ignoreDOMComponents: true,
        ignoreRefs: true
      }
    ],

    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-comment-textnodes.md
    'react/jsx-no-comment-textnodes': 'error',

    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-duplicate-props.md
    'react/jsx-no-duplicate-props': [
      'error',
      {
        ignoreCase: true
      }
    ],

    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-literals.md
    'react/jsx-no-literals': 'off',

    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-target-blank.md
    'react/jsx-no-target-blank': [
      'error',
      {
        enforceDynamicLinks: 'always'
      }
    ],

    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-undef.md
    'react/jsx-no-undef': 'error',

    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-pascal-case.md
    'react/jsx-pascal-case': [
      'error',
      {
        allowAllCaps: true,
        ignore: []
      }
    ],

    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-sort-default-props.md
    'react/jsx-sort-default-props': 'off',

    // Deprecated in favor of react/jsx-sort-props
    'react/jsx-sort-prop-types': 'off',

    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-sort-props.md
    'react/jsx-sort-props': 'off',

    // Deprecated in favor of jsx-tag-spacing
    'react/jsx-space-before-closing': 'off',

    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-uses-react.md
    'react/jsx-uses-react': 'error',

    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-uses-vars.md
    'react/jsx-uses-vars': 'error',

    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-access-state-in-setstate.md
    'react/no-access-state-in-setstate': 'error',

    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-array-index-key.md
    'react/no-array-index-key': 'error',

    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-children-prop.md
    'react/no-children-prop': 'error',

    // *** Different from Airbnb
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-danger.md
    'react/no-danger': 'error',

    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-danger-with-children.md
    'react/no-danger-with-children': 'error',

    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-deprecated.md
    'react/no-deprecated': 'error',

    // Prevent usage of setState in componentDidMount
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-did-mount-set-state.md
    'react/no-did-mount-set-state': 'off',

    // *** Different from Airbnb
    // It's currently the only lifecycle method in which it makes sense to use setState so uhh... it would be nice to have a rule that ensures it's wrapped in ifs though
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-did-update-set-state.md
    'react/no-did-update-set-state': 'off',

    // *** Different from Airbnb
    // Not sure why disabled there
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-direct-mutation-state.md
    'react/no-direct-mutation-state': 'error',

    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-find-dom-node.md
    'react/no-find-dom-node': 'error',

    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-is-mounted.md
    'react/no-is-mounted': 'error',

    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-multi-comp.md
    'react/no-multi-comp': 'off',

    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-redundant-should-component-update.md
    'react/no-redundant-should-component-update': 'error',

    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-render-return-value.md
    'react/no-render-return-value': 'error',

    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-set-state.md
    'react/no-set-state': 'off',

    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-string-refs.md
    'react/no-string-refs': 'error',

    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-this-in-sfc.md
    'react/no-this-in-sfc': 'error',

    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-typos.md
    'react/no-typos': 'error',

    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-unescaped-entities.md
    'react/no-unescaped-entities': 'error',

    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-unknown-property.md
    'react/no-unknown-property': 'error',

    // *** Different from Airbnb
    // They have big and possibly some older codebase so it makes sense to have it disabled there
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-unsafe.md
    'react/no-unsafe': 'error',

    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-unused-prop-types.md
    'react/no-unused-prop-types': [
      'error',
      {
        customValidators: [],
        skipShapeProps: true
      }
    ],

    // https://github.com/yannickcr/eslint-plugin-react/pull/1103/
    'react/no-unused-state': 'error',

    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-will-update-set-state.md
    'react/no-will-update-set-state': 'error',

    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prefer-es6-class.md
    'react/prefer-es6-class': ['error', 'always'],

    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prefer-stateless-function.md
    'react/prefer-stateless-function': [
      'error',
      {
        ignorePureComponents: false
      }
    ],

    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prop-types.md
    'react/prop-types': [
      'error',
      {
        customValidators: [],
        ignore: [],
        skipUndeclared: false
      }
    ],

    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/react-in-jsx-scope.md
    'react/react-in-jsx-scope': 'error',

    // *** Different from Airbnb
    // Too annoying for most cases
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/require-default-props.md
    'react/require-default-props': 'off',

    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/require-optimization.md
    'react/require-optimization': [
      'off',
      {
        allowDecorators: []
      }
    ],

    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/require-render-return.md
    'react/require-render-return': 'error',

    // *** Different from Airbnb
    // sometimes it's weird having it like here...
    // https://github.com/yannickcr/eslint-plugin-react/blob/843d71a432baf0f01f598d7cf1eea75ad6896e4b/docs/rules/sort-comp.md
    'react/sort-comp': 'off',

    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/sort-prop-types.md
    'react/sort-prop-types': 'off',

    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/style-prop-object.md
    'react/style-prop-object': 'error',

    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/void-dom-elements-no-children.md
    'react/void-dom-elements-no-children': 'error',

    // https://reactjs.org/docs/hooks-rules.html
    'react-hooks/rules-of-hooks': 'error',

    // https://github.com/facebook/react/issues/14920
    'react-hooks/exhaustive-deps': 'error'
  }
};
