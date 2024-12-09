# React + TypeScript + Vite + ESLint + TSLint + CommitLint + Prettier + Husky and lint-staged Git hooks + Playwright(End-to-End + Component + Visual Regression Testing) + Github badges + Github Pages deployment + Docker + Jira Integration + Slack/Teams Integration

![Component test status](https://img.shields.io/badge/tests-passing-brightgreen)

## Getting Started

This project includes several scripts for development, testing, and code quality. Below is a detailed explanation of each script.

Before running any script, make sure to install the dependencies:

```bash
npm install
```

You can execute the scripts using:

```bash
npm run <Script>
npm run dev
```

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
| run-unit-test                  | vitest                                                 | Runs unit tests using Vitest.                |
| run-unit-test:coverage         | vitest run --coverage                                  | Generates unit test coverage reports.        |
| install-playwright-browsers    | playwright install                                     | Installs required browsers for Playwright.   |
| open-ct-test                   | playwright test -c playwright-ct.config.ts --ui        | Opens the Playwright component test UI.      |
| run-ct-test                    | playwright test -c playwright-ct.config.ts             | Runs Playwright component tests.             |
| view-ct-test-report            | npx playwright show-report playwright-report/component | Views the Playwright component test report.  |
| generate-ct-test-coverage-html | npx nyc report --reporter=html                         | Generates Playwright HTML coverage reports.  |
| open-e2e-test                  | playwright test -c playwright-e2e.config.ts --ui       | Opens the Playwright end-to-end test UI.     |
| run-e2e-test                   | playwright test -c playwright-e2e.config.ts            | Runs end-to-end tests using Playwright.      |
| view-e2e-test-report           | npx playwright show-report playwright-report/e2e       | Views the Playwright end-to-end test report. |

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

<br />

## Playwright Testing Reports

- Playwright reports are generated if tests are run in headless mode using run-ct-test or run-e2e-test.
- To view Playwright reports:

  - Use view-ct-test-report for Playwright component tests.
  - Use view-e2e-test-report for Playwright end-to-end tests.

- Code Coverage for Playwright Component Tests:
  - Code coverage is configured in playwright-ct-config.ts using Istanbul.
  - The coverage is generated as a JSON summary in .nyc_output (ignored by Git).
  - Convert to an HTML report by running:
    ```bash
    npm run generate-ct-test-coverage-html
    ```
  - The report will be available in the coverage folder (also Git-ignored).

<br />

## Directories

| Directory                   | Purpose                                          |
| --------------------------- | ------------------------------------------------ |
| vitest/test-report          | Stores the unit test (Vitest) report             |
| vitest/test-coverage        | Stores the unit test (Vitest) coverage           |
| tests                       | Folder to write Playwright component test report |
| e2e                         | Folder to write Playwright e2e test report       |
| playwright-report/component | Stores Playwright component test report          |
| playwright-report/e2e       | Stores the Playwright e2e report                 |

## Git Hooks and Commitlint

### Pre-commit Hook

The pre-commit hook runs commands defined in `.lintstagedrc`.

### Commit Message Guidelines

We use Conventional Commits for structured and meaningful commit messages.

```text
<type>[optional scope]: <description>
[optional body]
[optional footer(s)]
```

### Commitlint Types:

- `feat`: A new feature
- `fix`: A bug fix
- `docs`: Documentation only changes
- `style`: Changes that do not affect the code meaning (white-space, formatting, etc.)
- `refactor`: Code changes that neither fix a bug nor add a feature
- `test`: Adding or updating tests
- `perf`: Performance improvements
- `ci`: Continuous Integration-related changes
- `chore`: Minor changes like updating dependencies
- `revert`: Reverts a previous commit

<strong>Breaking Changes:</strong> Add a `!` after the type or scope to signify a breaking change.

#### Examples:

- `feat`: add Playwright testing framework
- `fix`: resolve API response bug
- `docs`: update README.md
- `refactor(api)!`: change API response structure
- `test(component)`: add button component tests

```text
revert: let us never again speak of the noodle incident

Refs: 123abc, 456def
```

## FAQ

### Doesn’t commitlint discourage rapid development and fast iteration?

Commitlint discourages moving fast in a disorganized way. It helps you be able to move fast long term across multiple projects with varied contributors.
