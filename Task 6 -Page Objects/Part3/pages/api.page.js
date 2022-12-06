class ApiPage {
    
    get  apiPage() {
        return $('.navbar__link[href="/docs/api"]')
    }
    get contributeButton() {
        return $('li [href="#contribute"]')
    }
    async clickApi () {
        await this.apiPage.click()
    }
    async clickContribute () {
        await this.contributeButton.click()
    }
}

module.exports = new ApiPage();