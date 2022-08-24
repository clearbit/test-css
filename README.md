# ClearKit One

A Tailwind [preset](https://tailwindcss.com/docs/presets) and accompanying stylesheet for use across Clearbit user interfaces.

## Installation

```bash
yarn add @clearkit/one
```

## Usage

Note that you'll need to [install Tailwind in your project](https://tailwindcss.com/docs/installation) in order to consume `@clearkit/one`.

Once installed, pull in the `@clearkit/one` preset in your configuration and you're halfway there.

```js
// Your project's tailwind.config.js
const preset = require('@clearkit/one');

module.exports = {
  presets: [preset],
  variants: {
    backgroundColor: ['even', 'odd'],
  },
};
```

Next, be sure to import the following stylesheet, as it contains all of the class definitions for any `.ck-*` prefixed component (e.g., `ck-button`, or `ck-toast`).

```css
/* Your project's main CSS entry point */
@tailwind utilities;
@tailwind base;
@tailwind components;
@import '~@clearkit/one/dist/components.css';
```

## Local Development

```bash
yarn
yarn start
```

### Testing in a Consuming Application

Since `@clearkit/one` is a separate repository from consuming apps, it may be necessary to test CSS changes in situation (e.g., in a component in `@clearkit/react`). This is possible with [yarn link](https://classic.yarnpkg.com/en/docs/cli/link)

1. In `@clearkit/one`, run:

```bash
yarn build
yarn link
```

2. In consuming app (tested in `@clearkit/react`), run:

```bash
yarn link "@clearkit/one"
```

3. With app running, to make updates in CSS, rerun `yarn build` in `@clearkit/one` as needed.

When done local testing, make sure to run in `@clearkit/one`:

```bash
yarn unlink
```

and in the consuming app:

```bash
yarn unlink "@clearkit/one"
```

This will restore the installed version to the version in `package.json`.

## Publish New Versions

This repo uses GitHub actions to automate releases and publishing. There is no need to manually create tags, releases, or publish to npm.

Follow the [instructions for using actions](https://github.com/clearbit/github-actions#publish--release) when creating pull requests. Take careful note of how to use labels to create semantic versions.
