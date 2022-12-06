describe('Testcase 2 - Check the search fields funcionality',async() =>{
    it('Check the search fields funcionality',async() =>{
        await browser.url('https://github.com/')
        const search = await $('input[type="text"]')
        const sbutton = await $('[href*="https://github.com/search"]')
        await search.click()
        await search.setValue('Linux')
        await sbutton.click()
        const request = await $('h3.mb-1')
        await expect(request).toHaveTextContaining('Linux') // use const in it
    })
})