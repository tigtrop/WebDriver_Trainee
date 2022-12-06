const mainPage = require('../pageobjects/main.page')

it('Click the Docs button', async() =>{
    await browser.url('https://webdriver.io')
    await mainPage.clickDocs()
    await browser.pause(2000)
    await expect(browser).toHaveTitle('Getting Started | WebdriverIO')
})