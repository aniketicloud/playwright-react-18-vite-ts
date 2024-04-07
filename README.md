# React + TypeScript + Vite + ESLint + TSLint + CommitLint + Prettier + Playwright(End-to-End + Component + Visual Regression Testing) + Github badges + Github Pages deployment + Docker + Jira Integration + Slack/Teams Integration + Husky and lint-staged Git hooks

### Word meanings used in this guide

CI : Continuous Integration
E2E : End-to-End
code-quality\* : ESlint fix, ESlint check, TSlint check, Prettier files format

## TO-DO (Pilot Release)

- [x] React + Vite + TS + SWC Setup
- [x] ESLint [local]
- [x] TSLint [local]
- [x] Prettier (check and write) [local]
- [x] ESLint + Prettier setup [local]

- [x] Husky + lint-staged: pre-commit hook for code-quality\* [local]
- [x] Sonarlint - extension for VSCode [local]
- [x] `Commitlint` [local]
- [ ] Branch protection for main branch - no direct upload to main branch [Github]
- [ ] Code-quality\* check after pushing to any branch starting with `feature/` [CI]
- [ ] Code-quality\* check when merge request to `main` branch [CI]

- [x] Playwright End-to-End(E2E) testing setup [local] - only chromium at first
- [x] Playwright Component testing setup [local] - only chromium at first

- [x] React TS + Storybook TS setup - create component and stories directory

- [x] React TS Button component
- [x] Button story

- [ ] Button Component testing
- [ ] Button Visual testing

- [ ] Component testing report generation for successful tests [local]
- [ ] Component testing report generation for failed tests [local]

- [ ] E2E report generation for successful tests [local]
- [ ] E2E report generation for failed tests [local]

- [ ] E2E testing - manual job run [CI]
- [ ] E2E report generation for successful tests [CI]
- [ ] E2E report generation for failed tests [CI]

- [ ] Component testing - on push, on merge request to `main` branch [CI]
- [ ] Component testing report generation for successful tests [CI]
- [ ] Component testing report generation for failed tests [CI]

- [ ] Visual Regression testing for successful tests [local-Windows]
- [ ] Visual Regression testing for failed tests [local-Windows]
- [ ] Visual Regression testing report generation for successful tests [local-Windows]
- [ ] Visual Regression testing report generation for failed tests [local-Windows]
- [ ] Visual Regression testing - add a job to download generated snapshots after job is run and failed [CI-Linux]
- [ ] Manually download artifacts of snapshots and commit again to pass the test on CI

- [x] Visual Regression testing report generation for successful tests - (Not Required as passing tests do not require comparison in Visual Regression Testing) [CI]
- [ ] Visual Regression testing report generation for failed tests [CI]

- [ ] Component testing report deployment with Github pages for successful tests [CI]
- [ ] Component + Visual Regression testing report deployment with Github pages for failed tests [CI]
- [ ] Visual Regression testing report deployment with Github pages for failed tests [CI]

- [ ] Deploy successful E2E testing reports with Github Pages[CI]
- [ ] Deploy failed E2E testing reports with Github Pages[CI]

- [ ] Jira Integration
- [ ] Teams Integration
- [ ] Husky pre-commit hook

## TO-DO (Optional)

- [ ] Automatic generate changelogs
- [ ] Add Chromium, Firefox, Webkit(Safari) browsers in component testing
- [ ] Add Chromium, Firefox, Webkit(Safari) browsers in E2E testing
- [ ] Sharding in E2E tests
- [ ] Sharding in component tests
- [ ] Allure report
- [ ] Code coverage
- [ ] Slack integration
- [ ] History of records in database (DynamoDB-AWS)
- [ ] History of all reports in React(Remix)/Vue(Nuxt) web application (S3-AWS)
- [ ] Simple Unit testing

## Guide

- Reports are generated if tests are run in the headless mode. These scripts are used to run the tests in headless mode `test-ct` and `test-e2e`. In this setup generated reports are not opened. Use `view-ct-reports` and `view-e2e-reports` scripts to open the reports.
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
