import { test } from '@playwright/test';
import env from '../env/env.config.js';

test("@Regression @Sanity @Smoke @e2e Orange HRM Test cases", async ({page}) => {

    await page.goto(env.BASE_URL);

    await page.locator("//input[@name='username']").fill(env.USERNAME);

    await page.locator("//input[@name='password']").fill(env.PASSWORD);

    await page.locator("//button[text()=' Login ']").click();

});