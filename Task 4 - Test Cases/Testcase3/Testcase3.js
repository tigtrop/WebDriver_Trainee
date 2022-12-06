describe('Testcase 3 - Check that dropdowns in navigation menu are opening.',async() =>{
    it('Open site and Hover the mouse over the "Product" menu item', async() =>{
        await browser.url('https://github.com/')
        const product = await $('[class*="HeaderMenu-item"]:nth-child(1)')
        await product.click()
        await browser.pause(1000)
        await browser.saveScreenshot('./productScreenshot.png')
    })
    it('Hover the mouse over the "Solutions" menu item', async() =>{
        const solutions = await $ ('[class*="HeaderMenu-item"]:nth-child(2)')
        await solutions.click()
        await browser.pause(1000)
        await browser.saveScreenshot('./solutionsScreenshot.png')
    })
    it('Hover the mouse over the "Open Source" menu item', async() =>{
        const opensource = await $ ('[class*="HeaderMenu-item"]:nth-child(3)')
        await opensource.click()
        await browser.pause(1000)
        await browser.saveScreenshot('./opensourceScreenshot.png')
    })
})