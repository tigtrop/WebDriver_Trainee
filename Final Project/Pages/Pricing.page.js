class Pricing { 
    
    get  joinForFreeButton() {
        return $('[href*="/join?plan=free"]')
    }

    async clickJoinForFree () {
        await this.joinForFreeButton.click()
    }

}

module.exports = new Pricing();