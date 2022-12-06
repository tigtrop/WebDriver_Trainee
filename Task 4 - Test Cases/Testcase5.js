describe('Test case 5 - Check the navigating from pricing to registration page.',async() =>{
    it('Check the navigating from pricing to registration page.',async() =>{
        await browser.url('https://github.com/')
        const pricing = await $('[class*="HeaderMenu-link"][href="/pricing"]')
        await pricing.click()
        const join = await $('[href*="source=pricing-card-free"]')
        await join.click()
        await expect(browser).toHaveTitle('Join GitHub · GitHub')
    }) 
})