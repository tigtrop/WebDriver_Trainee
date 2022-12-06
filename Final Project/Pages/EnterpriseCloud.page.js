const Page = require('./page');

class EnterpriseCloud extends Page {


    get  usernameField() {
        return $('input#user_login')
    }

    async clickUsernameField () {  
        await this.usernameField.click()
    }

    async genUsername () {  
        await this.usernameField.setValue(this.generatePassword())
    }

    get  emailField() {
        return $('input#user_email')
    }

    async clickEmailField () {  
        await this.emailField.click()
    }

    async genEmail () {  
        await this.emailField.setValue(this.makeEmail())
    }

    get  passwordField() {
        return $('input#user_password')
    }

    async clickPasswordField () {  
        await this.passwordField.click()
    }
    
    async genPassword () {  
        await this.passwordField.setValue(this.generatePassword())
    }
}        

module.exports = new EnterpriseCloud();