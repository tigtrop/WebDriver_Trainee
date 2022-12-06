const DocsPage = require('../pageobjects/docs.page');
const ApiPage = require('../pageobjects/api.page');
const HelpPage = require('../pageobjects/help.page');
const VersionsPage = require('../pageobjects/versions.page');

it('Click docs', async() => {
    await browser.url('https://webdriver.io');
    DocsPage.clickDocs();
    await browser.pause(2000);
})
it('Click api and contribute', async() => {
    ApiPage.clickApi();
    ApiPage.clickContribute();
    await browser.pause(2000);
})

it('Click help and check the element', async() => {
    HelpPage.clickHelp();
    await expect(HelpPage.pText).toBeDisplayed();
    await browser.pause(2000);
})

it('Click versions page check the past version elem and click v5-documentaion', async() => {
    VersionsPage.clickVersions();
    await expect(VersionsPage.pastVersions).toBeDisplayed();
    VersionsPage.clickV5Doc();
    await browser.pause(2000);
})
