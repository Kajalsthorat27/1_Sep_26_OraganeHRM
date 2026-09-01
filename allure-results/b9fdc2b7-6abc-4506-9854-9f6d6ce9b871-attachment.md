# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: OrangeHRM1.spec.js >> @Regression @Sanity @Smoke @e2e Orange HRM Test cases
- Location: tests\OrangeHRM1.spec.js:4:5

# Error details

```
Error: page.goto: Target page, context or browser has been closed
Call log:
  - navigating to "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login", waiting until "load"

```

# Test source

```ts
  1  | import { test } from '@playwright/test';
  2  | import env from '../env/env.config.js';
  3  | 
  4  | test("@Regression @Sanity @Smoke @e2e Orange HRM Test cases", async ({page}) => {
  5  | 
> 6  |     await page.goto(env.BASE_URL);
     |                ^ Error: page.goto: Target page, context or browser has been closed
  7  | 
  8  |     await page.locator("//input[@name='username']").fill(env.USERNAME);
  9  | 
  10 |     await page.locator("//input[@name='password']").fill(env.PASSWORD);
  11 | 
  12 |     await page.locator("//button[text()=' Login ']").click();
  13 | 
  14 | });
```