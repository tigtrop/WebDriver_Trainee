class MainPage {
    
    get  docsPage() {
        return $('.navbar__link[href="/docs/gettingstarted"]')
    }

    async clickDocs (value) {
        await this.docsPage.click()
    }
}

module.exports = new MainPage();