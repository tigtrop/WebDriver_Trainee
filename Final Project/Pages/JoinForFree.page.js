//Page after signing in
const Page = require('./page');

class JoinForFree extends Page { 
    
    get  usernameField() {
        return $('#user_login')
    }

    async clickUsernameField () {
        await this.usernameField.click()
    }

    get  emailField() {
        return $('#user_email')
    }

    async clickEmailField () {
        await this.emailField.click()
    }

    get  passwordField() {
        return $('#user_password')
    }

    async clickPasswordField () {
        await this.passwordField.click()
    }

    get  emailCheckbox() {
        return $('#all_emails')
    }

    async clickCheckbox () {
        await this.emailCheckbox.click()
    }


    //Script

    
    async genEmail () {
        await this.emailField.setValue(this.makeEmail())
    }

    async genPassword () {
        await this.passwordField.setValue(this.generatePassword())
    }

    async genUsername () {
        await this.usernameField.setValue(this.generatePassword())
    }
}

module.exports = new JoinForFree();