
class ForgotPassword { 
    
    get  emailField() {
        return $('#email_field')
    }

    async clickEmailField () {
        await this.emailField.click()
    }

    get  resetPasswordButton() {
        return $('.js-octocaptcha-form-submit')
    }

    get  capchaLabel() {
        return $('.f4.mb-3')
    }
}

module.exports = new ForgotPassword();