class DocsPage {
    
    get  docsPage() {
        return $('.navbar__link[href="/docs/gettingstarted"]')
    }

    async clickDocs () {
        await this.docsPage.click()
    }
}

module.exports = new DocsPage();