class HelpPage {
    
    get  helpPage() {
        return $('.navbar__items [href="/community/support"]')
    }
    get pText() {
        return $('h2#stack-overflow')
    }
    async clickHelp () {
        await this.helpPage.click()
    }
}

module.exports = new HelpPage();