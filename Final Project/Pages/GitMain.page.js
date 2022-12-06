//Guest page

const Page = require('./page');

class MainPage extends Page {
    
    get  emailSignUpButton() {
        return $('.btn-mktg.btn-signup-mktg')}

    get  emailField() {
        return $('input#user_email')}

    async genEmail () {
        await this.emailField.setValue(this.makeEmail())}

    get  bigSignUpButton() {
        return $('.btn-large-mktg[href*="/signup"]')}

    async clickEmailSignUp () {
        await this.emailSignUpButton.click()}

    async clickEmailField () {
        await this.emailField.click()}

    async enterEmail () {
        await this.emailField.setValue()}

    async clickBigSignUp () {
        await this.bigSignUpButton.click()}    

    get  signInButton() {
        return $('[href="/login"]')}

    async clickSignIn () {
        await this.signInButton.click()}

    get  productsDropdown() {
        return $('.d-lg-flex.list-style-none > li:nth-of-type(1)')}

    async clickProducts () {
        await this.productsDropdown.click()}    
 
        // Products dropdown elements
    get  actions() {
        return $('//div[contains(text(),"Actions")]')}

        //Solutions drop down elements

    get  enterprise() {
        return $('.HeaderMenu-dropdown-link[href="/enterprise"]')}

        // Open Source dropdown elements
    
    get  sponsors() {
        return $('//div[contains(text(),"GitHub Sponsors")]')}

    get  topics() {
        return $('.HeaderMenu-item [href="/topics"]')}

    async clickTopics () {
        await this.topics.click()}
    
    get  solutionsDropdown() {
        return $('.d-lg-flex.list-style-none > li:nth-of-type(2)')}

    async clickSolutions () {
        await this.solutionsDropdown.click()}
    
    get  openSourceDropdown() {
        return $('.d-lg-flex.list-style-none > li:nth-of-type(3)')}
    
    async clickOpenSource () {
        await this.openSourceDropdown.click()}

    get  pricing() {
        return $('.HeaderMenu-link[href="/pricing"]')}

    async clickPricing () {
        await this.pricing.click()}

        // Search
    
    get  searchField() {
        return $('input[role="combobox"]')}

    async clickSearchField () {
        await this.searchField.click()}

    get  searchButton() {
        return $('[href*="https://github.com/search"]')}

    async clickSearch () {
        await this.searchButton.click()}    

        // Enterprice

    get  startEnterprise() {
        return $('.btn-mktg.btn-muted-mktg.home-campaign-enterprise')}

    async clickEnterprise() {
        await this.startEnterprise.click()}   

    // Careers

    get  careersButton() {
        return $('[href="\/about\/careers"]')}

    async clickCareers() {
        await this.careersButton.click()}

    async scrollCareers() {
        await this.careersButton.scrollIntoView()}   

        


}        

module.exports = new MainPage();