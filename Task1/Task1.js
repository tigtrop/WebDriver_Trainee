//1. Go to webdriver.io
//2. Click the API link
//3. Print the url into console
//4. Print the h1 to the console
//5. Print JSONWire protocol link into console
//6. Write "Test is " into search field 
//7. Add "DONE!" into search field
//8. Make a 5 second pause

describe('Task 1 webdriver.io', () => {
    it('Navigate to the site and click the API', async() =>{
        await browser.url('https://v5.webdriver.io/');  //  Go to webdriver.io
        const api_link = await $('//li/a[@href="/docs/api.html"]');
        await api_link.click(); //  Click the API link
        console.log(await browser.getUrl());    //  Print the url into console
        const api_h1 = await $('h1');   
        console.log(await api_h1.getText());    //  Print the h1 to the console
        const js_link = await $('//p/a[text()="JSONWire protocol"]');
        console.log(await js_link.getText());   //  Print JSONWire protocol link into console
        const search = await $('input#search_input_react');
        await search.setValue('Test is ');  //  Write "Test is " into search field
        await search.addValue('DONE!'); //  Add "DONE!" into search field
        await browser.pause(5000) 
    })
})