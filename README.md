# React + TypeScript + Vite + Playwright(End-to-End + Component + Visual Regression Testing) + Github badges + Github Pages deployment + Docker + Jira Integration + Slack/Teams Integration + Husky Git hooks

### Short words used in this guide

CI - Continuous Integration
E2E - End-to-End

## TO-DO Things

- [x] React + Vite + TS + SWC Setup
- [x] Playwright End-to-End(E2E) testing setup [local] - only chromium at first
- [x] Playwright Component testing setup [local] - only chromium at first

- [ ] React TS Button component
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
