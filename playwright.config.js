import { defineConfig } from '@playwright/test';

export default defineConfig({
    timeout : 80000,

    testDir : './tests',

    fullyParallel : true,

    workers : 2,

    reporter : [
        ['list'],['allure-playwright',{
        resultsDir : 'allure-results'
    }]
],

    use :
    {
        headless : false,
        screenshot : 'on',
        video : 'on',
        trace : 'on'
    },

    projects : 
    [
        {
            name : 'chromium',
            use:
            {
                browserName : 'chromium'
            }
        },
        {
            name : 'firefox',
            use :
            {
                browserName : 'firefox'
            }
        },
        {
            name : 'webkit',
            use :
            {
                browserName : 'webkit'
            }
        }

    ]
});