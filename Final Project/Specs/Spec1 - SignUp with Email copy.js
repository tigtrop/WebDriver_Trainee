const Page = require('../pageobjects/page.js');
const MainPage = require('../pageobjects/GitMain.page')
const SignUpPage = require('../pageobjects/GitSignUp.page')

describe('Checking the SignUp with email from main page', async() =>{

// 1. Open page.
// 2. Click email field.
// 3. Enter valid email.
// 4. Click Sign Up button.
// 5. Click Continue.
// 6. Enter valid password.
// 7. Click Continue.
// 8. Enter username.
// 9. Click Continue.
// 10. Enter answear on the question about email adverts.
// 11. Click Continue.
// 12. Verify thet the capcha label is displayed.

    it('Verify thet the capcha label is displayed.', async() =>{
        await browser.url('https://github.com')

        await MainPage.emailField.click()

        await MainPage.genEmail()
        await MainPage.clickEmailSignUp()

        await browser.pause(5000)
    
        
        await SignUpPage.clickEmailContinue()
        await SignUpPage.clickPasswordField

        await SignUpPage.genPassword()
        await browser.pause(2000)
        await SignUpPage.clickPasswordContinue()

        await browser.pause(2000)

        await SignUpPage.clickUsernameField()
        await SignUpPage.genUsername()
        await browser.pause(2000)
        await SignUpPage.clickUsernameContinue()

        await browser.pause(2000)

        await SignUpPage.clickAdvField()
        await SignUpPage.advEmailField.setValue('y')
        await SignUpPage.clickAdvEmailContinue()

        await browser.pause(2000)

        await await expect(SignUpPage.capchaLabel).toBeDisplayed();

        await browser.pause(2000)
    })
    
})

// The issue is in the password generator. When password generator create too short value - the test is failed.
// How to avoid tons of pauses? Or it is OK?