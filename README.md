# React + TypeScript + Vite + ESLint + TSLint + CommitLint + Prettier + Husky and lint-staged Git hooks + Playwright(End-to-End + Component + Visual Regression Testing) + Github badges + Github Pages deployment + Docker + Jira Integration + Slack/Teams Integration

## Scripts Overview

### Development and Build

| Script  | Command           | Description                            |
| ------- | ----------------- | -------------------------------------- |
| dev     | vite              | Starts the development server.         |
| build   | tsc && vite build | Builds the project for production.     |
| preview | vite preview      | Previews the production build locally. |

### Code Quality

| Script                      | Command                                                                   | Description                                  |
| --------------------------- | ------------------------------------------------------------------------- | -------------------------------------------- |
| code-quality:eslint         | eslint . --ext ts,tsx --report-unused-disable-directives --max-warnings 0 | Runs ESLint to check for code issues.        |
| code-quality:tslint         | tsc --noEmit                                                              | Validates TypeScript files without emitting. |
| code-quality:prettier:write | prettier --write .                                                        | Formats code using Prettier.                 |

### Testing

| Script                         | Command                                                | Description                                  |
| ------------------------------ | ------------------------------------------------------ | -------------------------------------------- |
| unit-test                      | vitest                                                 | Runs unit tests using Vitest.                |
| unit-test:coverage             | vitest run --coverage                                  | Generates unit test coverage reports.        |
| install-playwright-browsers    | playwright install                                     | Installs required browsers for Playwright.   |
| open-ct-test                   | playwright test -c playwright-ct.config.ts --ui        | Opens the Playwright component test UI.      |
| run-ct-test                    | playwright test -c playwright-ct.config.ts             | Runs Playwright component tests.             |
| view-ct-test-report            | npx playwright show-report playwright-report/component | Views the Playwright component test report.  |
| generate-ct-test-coverage-html | npx nyc report --reporter=html                         | Generates Playwright HTML coverage reports.             |
| run-e2e-test                   | playwright test -c playwright-e2e.config.ts            | Runs end-to-end tests using Playwright.      |
| view-e2e-test-report           | npx playwright show-report playwright-report/e2e       | Views the Playwright end-to-end test report. |
| open-e2e-test                  | playwright test -c playwright-e2e.config.ts --ui       | Opens the Playwright end-to-end test UI.     |

### Storybook

| Script          | Command               | Description                                      |
| --------------- | --------------------- | ------------------------------------------------ |
| storybook       | storybook dev -p 6006 | Runs Storybook on port 6006.                     |
| build-storybook | storybook build       | Builds the Storybook application for production. |

### Docker

| Script                    | Command                                                         | Description                                 |
| ------------------------- | --------------------------------------------------------------- | ------------------------------------------- |
| docker:build              | docker-compose build                                            | Builds Docker images.                       |
| docker:run-ct-test        | docker-compose run --rm component-tests                         | Runs component tests in a Docker container. |
| docker:build:run-ct-test  | docker-compose build && docker-compose run --rm component-tests | Builds and runs component tests in Docker.  |
| docker:run-e2e-test       | docker-compose run --rm e2e-tests                               | Runs end-to-end tests in Docker.            |
| docker:build:run-e2e-test | docker-compose build && docker-compose run --rm e2e-tests       | Builds and runs end-to-end tests in Docker. |
| docker:run-all            | docker-compose up --abort-on-container-exit                     | Runs all services using Docker Compose.     |

- Reports are generated if tests are run in the headless mode. These scripts are used to run the tests in headless mode `run-ct-test` and `run-test-e2e`. In this setup generated reports are not opened. Use `view-ct-report` and `view-e2e-report` scripts to open the reports.
- Code coverage for component test will be run. The code is inside playwright-ct-config.ts. Search for istanbul. This code covereage will be of json summary in `.nyc_output` which will be in gitignore. To covert the report to HTML format run `generate-ct-test-coverage-html`. This HTML report will be generated in coverage folder which will be in gitignore.
- pre-commit hook will run commands added in `.lintstagedrc`
- For `commitlint` conventions, use [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/). The commit message should be structured as follows:

```command
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

### Conventions of commitlint:

- <type>: add main point of focus. `feat` , `bug`, `docs`, `refactor`, `test`, `perf`, `ci`, `chore`, `style`, `revert`
- [optional scope]: provide additional information. `parser`, `lang`, `api`,
- add ! after `<type>` => `<type>!` or `<type>[optional scope]` =>`<type>[optional scope]!` to draw attention to breaking changes.
- <description>: add the description of the commit. Use present form verb(Use _add_. Do not use _added_) Do not add full stop at the end of the description. after a colon and a white space `: `

### examples of commitlint:

- `feat: Playwright testing framework added`
- `feat(lang): add Hindi language`
- `test(component): add component tests for button component`
- `feat(api)!: add new required parameter while calling the getUsers API`

-

```
chore!: remove support of Node 12
BREAKING CHANGE: http.IncomingMessage 'close' event is not available
```

-

```
revert: let us never again speak of the noodle incident

Refs: 676104e, a215868
```

- `docs: correct spelling of Configure.mdx`
- `revert: let us never again speak of the noodle incident`

## FAQ

### Doesn’t commitlint discourage rapid development and fast iteration?

Commitlint discourages moving fast in a disorganized way. It helps you be able to move fast long term across multiple projects with varied contributors.
