const Page = require('../pageobjects/page.js');
const MainPage = require('../pageobjects/GitMain.page')
const Careers = require('../pageobjects/Careers.page');


// 1. Open GitHub
// 2. Scroll page down
// 3. Click Careers
// 4. Click open positions
// 5. Print all opened positions

describe('Check the careers page', async() =>{

    it('Check opened positions', async() =>{
        await browser.url('https://github.com')

        await MainPage.scrollCareers()
        await MainPage.clickCareers()
        await browser.pause(2000)

        await Careers.clickOpenPositions()

        await Careers.printPos1()
        await Careers.printPos2()
        await Careers.printPos3()
        await Careers.printPos4()
        await Careers.printPos5()
        await Careers.printPos6()
        await Careers.printPos7()
        await Careers.printPos8()
        await Careers.printPos9()

        await browser.pause(2000)
    })
    
})
