const Page = require('../pageobjects/page.js');
const MainPage = require('../pageobjects/GitMain.page')
const SignUpPage = require('../pageobjects/GitSignUp.page')
const Pricing = require('../pageobjects/Pricing.page')
const JoinForFree = require('../pageobjects/JoinForFree.page')

describe('Checking the SignUp from Pricing page', async() =>{

// 1. Open page.
// 2. Click Pricing
// 3. Click Join For Free
// 4. Enter username.
// 5. Enter email.
// 6. Enter password
// 7. Click the check box

    it('Verify thet the capcha label is displayed.', async() =>{
        await browser.url('https://github.com')

        await MainPage.clickPricing()
        await Pricing.clickJoinForFree()

        await browser.pause(2000)
    
        await JoinForFree.clickUsernameField()
        await JoinForFree.genUsername()

        await JoinForFree.clickEmailField()
        await JoinForFree.genEmail()

        await JoinForFree.clickPasswordField()
        await JoinForFree.genPassword()
       
        await JoinForFree.clickCheckbox()

        await browser.pause(2000)
    })
    
})