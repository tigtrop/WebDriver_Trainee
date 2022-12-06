class EnterprisePlan {


    get  enterpriseCloud() {
        return $('.pricing-recommended-plan')
    }

    async clickEntCloud () {  
        await this.enterpriseCloud.click()
    }

    get  enterpriseServer() {
        return $('//h2[.="Enterprise Server"]')
    }

    async clickEntServer () {  
        await this.enterpriseServer.click()
    }

}        

module.exports = new EnterprisePlan();