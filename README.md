# @paolostyle/eslint-config
> Airbnb based ESLint config for React with Prettier formatting

## About

An ESLint config I've been using for a while (though not as a separate package) in React projects.
Heavily based on [Airbnb config](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb), but with disabled a11y rules (might use them, but as warnings so it doesn't crash the build) and a bunch of changes in other rules - they are noted with `// *** Different from Airbnb` comment in `index.js`.

Since I'm planning to migrate my React projects to TypeScript soon™ there is also a WIP config for TypeScript mostly based on recommended config from [@typescript-eslint plugin](https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin) that should be used with the main one, but it's not really used yet and is subject to change.

The config requires usage of [Prettier, aka the best thing that happened to frontend developers](https://prettier.io/). It doesn't enforce any settings (i.e. Prettier should be configured separately) but my personal config is:
```
"prettier": {
  "singleQuote": true,
  "printWidth": 100
}
```
and I heavily recommend it, especially the first part (`printWidth` of 100 is because the default 80 is definitely not enough for me).

It also includes linting rules for React hooks, so you should use React 16.8.0 or higher or disable them manually.

## Installation

### Base config
Since there's a bunch of other ESLint configs and plugins involved, you will need to install this package's `peerDependencies` as dev dependencies. If you're using Create React App, you don't have to install all of them explicitly - doing so would most likely result in duplicate versions and CRA apparently doesn't like it. So if you're using CRA, run:
```
yarn add --dev eslint-config-airbnb-base eslint-config-prettier eslint-plugin-prettier eslint-plugin-react-hooks prettier
```
These are not installed by default by CRA. If you're not using CRA at all, you should also run:
```
yarn add --dev babel-eslint eslint eslint-plugin-import eslint-plugin-react
```
Then install this package:
```
yarn add --dev @paolostyle/eslint-config
```
Then set `extends` field in your `.eslintrc.*` file or `eslintConfig` section in your `package.json`:
```
{
  "extends": "@paolostyle"
}
```
The last step is to add the Prettier config to your `package.json` file:
```
"prettier": {
  "singleQuote": true,
  "printWidth": 100
}
```

### TypeScript config
Since it should be used with the base one (though it's not required - it uses only Prettier, base ESLint and @typescript-eslint rules), you should first do all the steps required for the base config.
After that, install TypeScript parser and config:
```
yarn add --dev @typescript-eslint/parser @typescript-eslint/eslint-config
```
Then add the TypeScript config to your `.eslintrc.*` file:
```
{
  "extends": [
    "@paolostyle",
    "@paolostyle/eslint-config/typescript"
  ]
}
```

## License
[MIT](https://github.com/paolostyle/eslint-config/blob/master/LICENSE)
Copyright &copy; 2019 Paweł Dąbrowski
