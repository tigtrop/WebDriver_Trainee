const Page = require('../pageobjects/page.js');
const MainPage = require('../pageobjects/GitMain.page')
const Topics = require('../pageobjects/Topics.page')

// 1. Open GitHub
// 2. Click Open Source
// 3. Click Topics
// 4. Check that Topics sign is displayed.

describe('Check topics page.', async() =>{

    it('Check that topics sign is displayed.', async() =>{
        await browser.url('https://github.com')

        await MainPage.clickOpenSource()
        await browser.pause(1000)
        await MainPage.clickTopics()
        await browser.pause(1000)
        await expect(Topics.topicsHeading).toBeDisplayedInViewport()

        await browser.pause(2000)
    })
    
})
