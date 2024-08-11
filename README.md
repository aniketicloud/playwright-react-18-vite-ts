# React + TypeScript + Vite + ESLint + TSLint + CommitLint + Prettier + Husky and lint-staged Git hooks + Playwright(End-to-End + Component + Visual Regression Testing) + Github badges + Github Pages deployment + Docker + Jira Integration + Slack/Teams Integration

## Guide

- Reports are generated if tests are run in the headless mode. These scripts are used to run the tests in headless mode `test-ct` and `test-e2e`. In this setup generated reports are not opened. Use `view-ct-report` and `view-e2e-report` scripts to open the reports.
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
