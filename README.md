# React + TypeScript + Vite + Playwright(End-to-End + Component + Visual Regression Testing) + Github badges + Github Pages deployment + Docker + Jira Integration + Slack/Teams Integration + Husky Git hooks

## TO-DO Things

- [x] React + Vite + TS + SWC Setup
- [x] Playwright End-to-End(E2E) testing setup [local] - only chromium at first
- [x] Playwright Component testing setup [local] - only chromium at first
- [ ] Playwright End-to-End(E2E) testing [CI job]
- [ ] Playwright Component testing [CI job]
- [ ] Report Generation (default Playwright) [local]
- [ ] Report Generation (default Playwright) [CI]
- [ ] Deploy E2E reports Github Pages[CI]
- [ ] Deploy component + visual regression reports Github Pages[CI]
- [ ] Jira Integration
- [ ] Teams Integration
- [ ] Husky pre-commit hook

## TO-DO (Optional)

- [ ] Allure report
- [ ] Code Doverage
- [ ] Slack integration
- [ ] History of records in database (DynamoDB-AWS)
- [ ] Hostory of all reports in React(Remix)/Vue(Nuxt) web application (S3-AWS)

## Guide

- Reports are generated if tests are run in the headless mode. These scripts are used to run the tests in headless mode `test-ct` and `test-e2e`. In this setup generated reports are not opened. Use `view-ct-reports` and `view-e2e-reports` scripts to open the reports.
