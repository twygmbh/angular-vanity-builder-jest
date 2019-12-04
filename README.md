# ng test -> running jest

You have an existing project and integrated `Jest` all by yourself?  
**Awesome**.

Your `ng test` command is broken and you can not use any builder
(be it [@nrwl/jest](https://www.npmjs.com/package/@nrwl/jest) or
[@angular-builders/jest](https://github.com/just-jeb/angular-builders/tree/master/packages/jest))
without messing up your already existing setup. All you want is for `ng test` to execute `jest` with your existing configuration.

[![npm version](https://img.shields.io/npm/v/@twy-gmbh/angular-vanity-builder-jest.svg) ![npm](https://img.shields.io/npm/dm/@twy-gmbh/angular-vanity-builder-jest.svg)](https://www.npmjs.com/package/@twy-gmbh/angular-vanity-builder-jest)

# This documentation is for version 8 only.

Allows running `ng test` with your currently working `Jest` configuration.

## Prerequisites

- [Angular CLI 8](https://www.npmjs.com/package/@angular/cli)
- [Jest 24](https://www.npmjs.com/package/jest)

### Folder structure

This builder expects the following structure:

```
...
projects/
    project1/
        jest.config.js
    project2/
        jest.config.js
...
```

## Installation

Install the builder (and `jest` if you still haven't): `npm i -D jest @types/jest @twy-gmbh/angular-vanity-builder-jest`

## Running with Angular CLI

- In your `angular.json`:

  ```json
  "projects": {
      ...
      "[your-project]": {
        ...
        "architect": {
            ...
            "test": {
                "builder": "@twy-gmbh/angular-vanity-builder-jest:run"

  ```

- Run the tests: `ng test` or `ng test [your-project]`

**Zero** additional configuration is needed since all of your configuration is already where it actually belongs, the `jest.config.js` files.

With this structure, you can `cd` into a project folder, and use the `Jest` cli to run the tests via `jest`.
You can now also use `ng test` in the root folder, this will run the tests for all projects.

`ng test project1` on the other hand let's you execute the specific test suite of said project.
