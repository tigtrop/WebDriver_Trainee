const Page = require('../pageobjects/page.js');
const MainPage = require('../pageobjects/GitMain.page')
const SignInPage = require('../pageobjects/SignIn.page.js');
const ForgotPassword = require('../pageobjects/ForgotPassword.page');

// 1. Open GitHub
// 2. Click Sign In
// 3. Click forgot password
// 4. Click the email field

describe('Check the Forgot password page', async() =>{

    it('Check that capcha label is displayed and continue button is not active', async() =>{
        await browser.url('https://github.com')

        await MainPage.clickSignIn()
        await browser.pause(2000)
        await SignInPage.clickForgotPassword()
        await browser.pause(2000)
        await ForgotPassword.clickEmailField()
        await browser.pause(2000)
        await expect(ForgotPassword.capchaLabel).toBeDisplayed()
        await expect(ForgotPassword.resetPasswordButton).not.toBeClickable()
        await browser.pause(2000)
    })
    
})
