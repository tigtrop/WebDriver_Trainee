class Search { 
    
    get  filterTypeScript() {
        return $('.filter-item[href*="/search?l=TypeScript"]')
    }

    async clickTypeScript () {
        await this.filterTypeScript.click()
    }

    get  searchResultFirst() {
        return $('li:nth-of-type(1) > .flex-auto.mt-n1 > .d-flex > .f4.text-normal > .v-align-middle')
    }

    async clickFirstResult () {
        await this.searchResultFirst.click()
    }
}

module.exports = new Search();