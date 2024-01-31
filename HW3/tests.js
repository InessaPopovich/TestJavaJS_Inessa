    //1
    test('makeupTest', async ({ page }) => {
    await page.goto('https://makeup.com.ua/ua/');
    await page.getByRole('link', { name: 'Подарунки' }).click();
    await expect (page.getByRole('link', { name: 'Бренди', exact: true })).toBeVisible();
    });
    
    //2
    test('amazon', async ({page})=> {
    await page.goto('https://www.amazon.com/ref=nav_logo');
    await page.getByPlaceholder('Search Amazon').click();
    await expect (page.getByLabel('items in cart')).toBeVisible();
    })
    
    //3
    test('evzutta', async ({page})=> {
    await page.goto('https://evzuttya.com.ua/');
    await page.getByRole('button', { name: 'Згода' }).click();
    await page.getByRole('link', { name: 'СУMKЍ' }).click();
      await expect (page.locator('a').filter({ hasText: 'Кошик (0)' })).toBeVisible();
    })
    
    //4
    test('brocard', async ({page})=> {
    await page.goto('https://www.brocard.ua/ua/brand/dior');
    await page.locator('sys-consent-static span').click();
    await page.locator('.phone-input-select-button-flag').click();
    })
    
    //5
    test('playwright', async ({page})=>{
      await page.goto('https://playwright.dev/docs/intro');
      await page.getByRole('link', { name: 'Writing tests', exact: true }).click();
      await page.close();
    })
    