
class Careers { 
    
    get  openPositionsButton() {
        return $('[href="#positions"]')
    }

    async clickOpenPositions () {
        await this.openPositionsButton.click()
    }

    get  position1() {
        return $('(//span[@class="text-left flex-auto py-4"])[1] ')
    }

    async printPos1 () {
        await this.position1.getText()
    }

    get  position2() {
        return $('(//span[@class="text-left flex-auto py-4"])[2] ')
    }

    async printPos2 () {
        await this.position2.getText()
    }

    get  position3() {
        return $('(//span[@class="text-left flex-auto py-4"])[3] ')
    }

    async printPos3 () {
        await this.position3.getText()
    }

    get  position4() {
        return $('(//span[@class="text-left flex-auto py-4"])[4] ')
    }

    async printPos4 () {
        await this.position4.getText()
    }

    get  position5() {
        return $('(//span[@class="text-left flex-auto py-4"])[5] ')
    }

    async printPos5 () {
        await this.position5.getText()
    }

    get  position6() {
        return $('(//span[@class="text-left flex-auto py-4"])[6] ')
    }

    async printPos6 () {
        await this.position6.getText()
    }

    get  position7() {
        return $('(//span[@class="text-left flex-auto py-4"])[7] ')
    }

    async printPos7 () {
        await this.position7.getText()
    }

    get  position8() {
        return $('(//span[@class="text-left flex-auto py-4"])[8] ')
    }

    async printPos8 () {
        await this.position8.getText()
    }

    get  position9() {
        return $('(//span[@class="text-left flex-auto py-4"])[9] ')
    }

    async printPos9 () {
        await this.position9.getText()
    }
    
}

module.exports = new Careers();