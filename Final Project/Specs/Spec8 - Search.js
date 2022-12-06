const Page = require('../pageobjects/page.js');
const MainPage = require('../pageobjects/GitMain.page')
const Search = require('../pageobjects/Search.page')

// 1. Open GitHub
// 2. Click Search field
// 3. Enter webdriver
// 4. Click search button
// 5. Check typescript filter
// 6. Click the first result link
// 7. Check that ult has a search value

describe('Check search function', async() =>{

    it('Check that search result contains in the url', async() =>{
        await browser.url('https://github.com')

        await MainPage.clickSearchField
        await MainPage.searchField.setValue('webdriver')
        await browser.pause(1000)
        await MainPage.clickSearch()
        await browser.pause(2000)
        await Search.clickTypeScript()
        await browser.pause(2000)
        await Search.clickFirstResult()
        await browser.pause(2000)
        await expect(browser).toHaveUrlContaining('webdriver')

        await browser.pause(2000)
    })
    
})
