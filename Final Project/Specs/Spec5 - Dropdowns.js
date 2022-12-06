const Page = require('../pageobjects/page.js');
const MainPage = require('../pageobjects/GitMain.page')

describe('Check that dropdowns in navigation menu are opening.',async() =>{
    it('Open site and Hover the mouse over the "Product" menu item', async() =>{
        await browser.url('https://github.com/')
        await MainPage.clickProducts()
        await browser.pause(1000)
        await expect(MainPage.actions).toBeDisplayedInViewport()
    })
    it('Hover the mouse over the "Solutions" menu item', async() =>{
        await MainPage.clickSolutions()
        await browser.pause(1000)
        await expect(MainPage.enterprise).toBeDisplayedInViewport()
    })
    it('Hover the mouse over the "Open Source" menu item', async() =>{
        await MainPage.clickOpenSource()
        await browser.pause(1000)
        await expect(MainPage.sponsors).toBeDisplayedInViewport()
    })
})