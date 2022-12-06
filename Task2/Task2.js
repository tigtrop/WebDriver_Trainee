//  1. Navigate to the https://webdriver.io/docs/api.html
//  2. Open link //*[text()="JSONWire protocol"] in new tab (getAttribute() and newWindow())
//  3. Switch the tab
//  4. Check that element 'strong a[href="/SeleniumHQ/selenium/wiki"]' is visible (isDisplayed). Print result in the consle.log()
//  5. Switch tab back to the 'https://webdriver.io/docs/api.html'
//  6. Use method waitUntil and wait until the element ".postHeaderTitle" (getText())is equal "API Docs"
//  7. Make a screenshot ".postHeaderTitle"
//  8. Print result for isDisplayed() and 'href="https://twitter.com/webdriverio"'
//  9. Print result for isDisplayedInViewPort() and 'href="https://twitter.com/webdriverio"'
//  10. Scroll to the 'href="https://twitter.com/webdriverio"'
//  11. Print result for the isDisplayed() and the locator 'href="https://twitter.com/webdriverio"'
//  12. Print result for the isDisplayedInViewPort() and the locator 'href="https://twitter.com/webdriverio"'
//  13. Print the rusult for isFocused and the locator @href="/help.html
//  14. Click the  @href="/help.html
//  15. Print the rusult for isFocused and the locator @href="/help.html

describe('Task 2',() => {
    it('action 1', async() =>{
        await browser.url('https://v5.webdriver.io/docs/api.html')
        await expect(browser).toHaveUrl('https://v5.webdriver.io/docs/api.html')
    })
    it('action 2, 3', async() =>{
        const path1 = await $('//*[text()="JSONWire protocol"]')
        const link1 = await path1.getAttribute('href')
        await browser.newWindow(link1)
        await browser.switchWindow(link1)
    })
    it('action 4', async() =>{
        const elem1 = $('(//a[@href="/SeleniumHQ/selenium/wiki"])[3]')
        const isDisplayed = await elem1.isDisplayed()
        console.log(isDisplayed)
    })
    it('action 5', async() =>{
        const handles = await browser.getWindowHandles()
        await browser.switchToWindow(handles[0]) 
    })
    it('Action 6', async () => {
        const title = await $('.postHeaderTitle')
        await browser.waitUntil(
            async () => (await title.getText()) === 'API Docs',
            {
                timeout: 5000,
                timeoutMsg: 'expected text to be different after 5s'
            }
        )
    });
    it('action 7', async() =>{
        const title = await $('.postHeaderTitle')
        await title.saveScreenshot('./titleScreenshot.png')
    })
    it('action 8, 9, 10, 11, 12', async() =>{
        const elem = await $('//a[@href="https://twitter.com/webdriverio"]')
        console.log(elem.isDisplayed())
        console.log(elem.isDisplayedInViewport())
        await elem.scrollIntoView()
        console.log(elem.isDisplayed())
        console.log(elem.isDisplayedInViewport())
    })
    it('action 13, 14, 15', async() =>{
        const help = await $('(//a[@href="/help.html"])[1]')
        console.log(await help.isFocused())
        await help.click()
        console.log(await help.isFocused())
        await browser.pause(5000)
    })
})