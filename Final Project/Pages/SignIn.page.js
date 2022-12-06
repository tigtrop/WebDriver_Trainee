class SignIn { 
    
    get  emailUsernameField() {
        return $('#login_field')
    }

    async clickEmailUsernameField () {
        await this.emailUsernameField.click()
    }

    get  passwordField() {
        return $('#password')
    }

    async clickPasswordField () {
        await this.passwordField.click()
    }

    get  signInButton() {
        return $('.js-sign-in-button')
    }

    async clickSignIn () {
        await this.signInButton.click()
    }

    get  forgotPasswordButton() {
        return $('[href="/password_reset"]')
    }

    async clickForgotPassword () {
        await this.forgotPasswordButton.click()
    }
}

module.exports = new SignIn();