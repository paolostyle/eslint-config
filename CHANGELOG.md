# Changelog

## [8.0.0] - 13.08.2021

- Updated all dependencies - requires latest ESLint v7
- More strict a11y rules
- TypeScript rules included by default in the config
- Cleaned up TypeScript rules

## [5.0.0] - 03.10.2019

- Updated all dependencies - now requires ESLint v6
- Added new rules and removed TS rules that were no longer in the package

## [4.0.0] - 02.07.2019

- Updated all dependencies to latest versions (except for ESLint itself - no support for v6 for now)
- Major overhaul of file structure: main config works more or less the same (contains base and react config), but
  they're now separated, so it's possible to use only base rules or only React rules
  (the latter doesn't make much sense though)
- Added a11y JSX rules from react-app ESLint config
- Relaxed some rules on all fronts

## [3.0.0] - 15.04.2019

- Updated `eslint-plugin-import` to 2.17.1:
  - This package now requires `>=2.17.1` version of `eslint-plugin-import`
  - TypeScript config now uses `plugin:import/typescript` for import settings
  - Removed `import/named` rule from TypeScript config (now uses the one from Airbnb) as it supports importing types now
- Updated Prettier to 1.17.0

## [2.1.0] - 10.04.2019

- Fixed typo in a unified-signature**s** rule name
- Disabled for..of loops from restricted syntax
- Updated dependencies

## [2.0.2], [2.0.1] - 21.03.2019

- Fixed an invalid rule setting for _@typescript-eslint/no-object-literal-type-assertion_

## [2.0.0] - 21.03.2019

- Completed first version of rules for TypeScript with comments
- Updated dependencies

## [1.1.0] - 7.03.2019

- Added TypeScript config for _eslint-plugin-import_
- Added default path to tsconfig.json for TypeScript parser
- Turned off _react/jsx-filename-extension_ completely
- Added rule for _@typescript-eslint/no-unused-vars_ with the same settings as in the base rule

## [1.0.0] - 3.03.2019

Initial release
