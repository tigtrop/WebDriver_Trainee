const Page = require('../pageobjects/page.js');
const MainPage = require('../pageobjects/GitMain.page')
const EnterprisePlan = require('../pageobjects/EnterprisePlan.page')
const EnterpriseCloud = require('../pageobjects/EnterpriseCloud.page')
const EnterpriseServer = require('../pageobjects/EnterpriseServer.page');

//Test1
// 1. Open GitHub
// 2. Click start free trial with enterprise.
// 3. Click enterprise 
// 4. Click enterprise cloud
// 5. Enter valid data in all fields
//Test2
// 6. Click back
// 7. Click Enterprise server
// 8. Enter random data into all fields
// 9. Click any radio button
// 10. Answear yes radio button below question.
// 11. Click checkbox.

describe('Check the enterprise sign up pages', async() =>{

    it('Check the cloud enterprise', async() =>{
        await browser.url('https://github.com')

        await MainPage.clickEnterprise()
        await browser.pause(2000)
        await EnterprisePlan.clickEntCloud()
        await browser.pause(2000)

        await EnterpriseCloud.clickUsernameField()
        await EnterpriseCloud.genUsername()

        await EnterpriseCloud.clickEmailField()
        await EnterpriseCloud.genEmail()

        await EnterpriseCloud.clickPasswordField()
        await EnterpriseCloud.genPassword()

        await browser.pause(2000)
    })

    it('Check the server enterprise', async() =>{
        await browser.back()
        await browser.pause(2000)

        await EnterprisePlan.clickEntServer()
        await browser.pause(2000)

        await EnterpriseServer.clickNameField()
        await EnterpriseServer.genName()

        await EnterpriseServer.clickCompanyField()
        await EnterpriseServer.genCompanyName()

        await EnterpriseServer.clickEmailField()
        await EnterpriseServer.genEmail()

        await EnterpriseServer.clickPhoneField()
        await EnterpriseServer.genPhone()
        await browser.pause(2000)

        await EnterpriseServer.clickAWSradio()
        await browser.pause(2000)

        await EnterpriseServer.clickQuestionYes()
        await browser.pause(2000)

        await EnterpriseServer.writeListData()

        await EnterpriseServer.clickCheckbox()

        await browser.pause(2000)
    })
    
})
