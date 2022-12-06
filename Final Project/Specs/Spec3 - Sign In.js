const Page = require('../pageobjects/page.js');
const MainPage = require('../pageobjects/GitMain.page')
const OnBoard = require('../pageobjects/OnBoard.page');
const SignInPage = require('../pageobjects/SignIn.page.js');

// 1. Open GitHub
// 2. Click Sign In
// 3. Enter email or username
// 4. Enter password
// 5. Click Sign In
// 6. Verify 3 header elements.

describe('Check the Sign In Function', async() =>{

    it('Verify that bell, plus and avatar buttons is displayed', async() =>{
        await browser.url('https://github.com')

        await MainPage.clickSignIn()
        
        await SignInPage.clickEmailUsernameField()
        await SignInPage.emailUsernameField.setValue('mix-medvedos')
        await SignInPage.clickPasswordField()
        await SignInPage.passwordField.setValue('!2345Test')

        await browser.pause(2000)
        await SignInPage.clickSignIn()

        await expect(OnBoard.notificationBell).toBeDisplayedInViewport()
        await expect(OnBoard.plusButton).toBeDisplayedInViewport()
        await expect(OnBoard.userAvatar).toBeDisplayedInViewport()


        await browser.pause(2000)
    })
    
})
