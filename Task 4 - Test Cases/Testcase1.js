describe('Testcase 1 - Check that all header elements are appeared',async() =>{
    it('Open site and check logo', async() =>{
        await browser.url('https://github.com/')
        const logo = await $('svg[class="octicon octicon-mark-github"][height="32"]')
        await expect(logo).toBeDisplayedInViewport()
    })
    it('Check that navigation menu with 4 elements are displayed.', async() =>{
        const navmenu1 = await $('(//li[@class!="HeaderMenu-item"]/button)[1]')
        const navmenu2 = await $('(//li[@class!="HeaderMenu-item"]/button)[2]')
        const navmenu3 = await $('(//li[@class!="HeaderMenu-item"]/button)[3]')
        const navmenu4 = await $('(//a[@href="/pricing"])[1]')
        await expect(navmenu1).toBeDisplayedInViewport()
        await expect(navmenu2).toBeDisplayedInViewport()
        await expect(navmenu3).toBeDisplayedInViewport()
        await expect(navmenu4).toBeDisplayedInViewport()
    })
    it('Check that search field is displayed.', async() =>{
        const search = await $('input[type="text"]')
        await expect(search).toBeDisplayedInViewport()
    })
    it('Check that Sing in button is displayed.', async() =>{
        const signin = await $('[href="/login"]')
        await expect(signin).toBeDisplayedInViewport()
    })
    it('Check that Sign Up button is displayed.', async() =>{
        const signup = await $('[class*="position-relative"]+a')
        await expect(signup).toBeDisplayedInViewport()
    })
})