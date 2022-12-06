describe('Test case 4 - Check the git download for windows.',async() =>{
    it('Check the git download for windows.',async() =>{
        await browser.url('https://github.com/')
        const link = await $('[href="https://desktop.github.com/"]')
        await link.scrollIntoView()
        await link.click()
        const download = await $('[class][href*="latest/win32"]')
        await expect(download).toHaveHref('https://central.github.com/deployments/desktop/desktop/latest/win32')
    })
})