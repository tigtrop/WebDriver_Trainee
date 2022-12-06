//Sign up page

const Page = require('./page'); 

class SignUpPage extends Page {

    get  emailField() {
        return $('div#email-container  input.form-control')
    }

    async clickEmailInput () {
        await this.emailField.click()
    }

    async genEmail () {
        this.emailField.setValue(this.makeEmail())
    }
    
    get  continueEmailButton() {
        return $('div#email-container  button.form-control')
    }

    async clickEmailContinue () {
        await this.continueEmailButton.click()
    }

    get  passwordField() {
        return $('#password-container  input.form-control')
    }

    async clickPasswordField () {
        await this.passwordField.click()
    }

    async genPassword () {
        this.passwordField.setValue(this.generatePassword())
    }

    get  continuePasswordButton() {
        return $('#password-container  button.form-control')
    }

    async clickPasswordContinue () {
        await this.continuePasswordButton.click()
    }

    get  usernameField() {
        return $('#username-container  input.form-control')
    }

    async clickUsernameField () {
        await this.usernameField.click()
    }

    async genUsername () {
        await this.usernameField.setValue(this.generatePassword())
    }

    get  continueUsernameButton() {
        return $('#username-container  button.form-control')
    }

    async clickUsernameContinue () {
        await this.continueUsernameButton.click()
    }

    get  advEmailField() {
        return $('#opt-in-container  input')
    }

    async clickAdvField () {
        await this.advEmailField.click()
    }

    get  continueAdvEmail() {
        return $('#opt-in-container  button')
    }

    async clickAdvEmailContinue () {
        await this.continueAdvEmail.click()
    }

    get  capchaLabel() {
        return $('#captcha-and-submit-container .signup-text-prompt')
    }
    
    async verifyCapchaLabel () {
        await this.continueAdvEmail.click() // modify!!!
    }
}

module.exports = new SignUpPage();