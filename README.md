# @paolostyle/eslint-config
> Airbnb based ESLint config with Prettier formatting

## About

An ESLint config I've been using for a while (though not as a separate package) in React projects.
Heavily based on [Airbnb config](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb) with a bit less strict JSX a11y rules (which were copied almost completely from CRA ESLint config) and a bunch of changes in other rules - they are noted with `// *** Different from Airbnb` comment in `index.js`.

It also contains a config for TypeScript.

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
Install Prettier and ESLint if you don't have them installed yet:
```
yarn add --dev eslint prettier
```
This config uses a good amount of plugins, but they will all be installed as dependencies for ease of use and better compatibility, so you just have to run:
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
TypeScript config is included by default.

## License
[MIT](https://github.com/paolostyle/eslint-config/blob/master/LICENSE)
Copyright &copy; 2019 Paweł Dąbrowski
