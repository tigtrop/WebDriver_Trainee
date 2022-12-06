const Page = require('./page');

class enterpriseServer extends Page{


    get  nameField() {
        return $('#contact_request_name')
    }

    async clickNameField () {  
        await this.nameField.click()
    }

    async genName () {  
        await this.nameField.setValue(this.generatePassword())
    }

    get  companyField() {
        return $('#contact_request_organization_name')
    }

    async clickCompanyField () {  
        await this.companyField.click()
    }

    async genCompanyName () {  
        await this.companyField.setValue(this.generatePassword())
    }

    get  emailField() {
        return $('#contact_request_email')
    }
    
    async clickEmailField () {  
        await this.emailField.click()
    }

    async genEmail () {  
        await this.emailField.setValue(this.makeEmail())
    }

    get  phoneNumberField() {
        return $('#contact_request_phone')
    }

    async clickPhoneField () {  
        await this.phoneNumberField.click()
    }

    async genPhone () {  
        await this.phoneNumberField.setValue(Math.random() * 1000000000)
    }

    // Radio buttons

    get  radioAWS() {
        return $('#contact_request_instance_type_aws')
    }

    async clickAWSradio () {  
        await this.radioAWS.click()
    }

    // Question

    get  questionYes() {
        return $('#questions_yes')
    }

    async clickQuestionYes () {  
        await this.questionYes.click()
    }

    // Checkbox

    get  checkbox() {
        return $('#contact_request_agreed_to_terms')
    }

    async clickCheckbox () {  
        await this.checkbox.click()
    }

    // question list

    get  questionList() {
        return $('#questions-list')
    }

    async clickListField () {  
        await this.questionList.click()
    }

    async writeListData () {  
        await this.questionList.setValue('Lorem Ipsum')
    }


}        

module.exports = new enterpriseServer();