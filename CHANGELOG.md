# Changelog

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
