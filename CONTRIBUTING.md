# Contributing

We are open to, and grateful for, any contributions made by the community. By
contributing to this library, you agree to abide by the
[code of conduct](https://github.com/sequeljs/core/blob/master/CODE_OF_CONDUCT.md).

## Reporting Issues and Asking Questions

Before opening an issue, please search the
[issue tracker](https://github.com/sequeljs/core/issues) to make sure
your issue hasn't already been reported.

## Development

Visit the [issue tracker](https://github.com/sequeljs/core/issues) to
find a list of open issues that need attention.

Fork, then clone the repo:

```
git clone https://github.com/your-username/sequeljs.git
```

### Building

Running the build task will create both a CommonJS module-per-module build and a
UMD build.

```
npm run build
```

To create just a CommonJS module-per-module build:

```
npm run build:commonjs
```

To create just a UMD build:

```
npm run build:umd
npm run build:umd:min
```

### Testing and Linting

To run the tests:

```
npm run test
```

To check the tests coverage, run the following:

```
npm run test -- --coverage
```

To continuously watch and run tests, run the following:

```
npm run test -- --coverage --watch
```

To perform linting with `eslint`, run the following:

```
npm run lint
```

### New Features

Please open an issue with a proposal for a new feature or refactoring before
starting on the work. We don't want you to waste your efforts on a pull request
that we won't want to accept.

## Submitting Changes

- Open a new issue in the
  [Issue tracker](https://github.com/sequeljs/core/issues).
- Fork the repo.
- Create a new feature branch based off the `master` branch.
- Make sure all tests pass and there are no linting errors.
- Submit a pull request, referencing any issues it addresses.

Please try to keep your pull request focused in scope and avoid including
unrelated commits.

After you have submitted your pull request, we'll try to get back to you as soon
as possible. We may suggest some changes or improvements.

Thank you for contributing!

## Attribution

This Contributing Guide is adapted from the React Redux Contributing Guide
available at https://github.com/reduxjs/react-redux/blob/master/CONTRIBUTING.md.
