
const driver = require("protractor")

describe('super cal', () => {


    it('get title', async () => {

        driver.browser.get("https://juliemr.github.io/protractor-demo/")


        // below 2 lines of will give all the promises so can't print title
       // let title = driver.browser.getTitle();
       //  console.log(title);
        
        // handling of promises using await and async i.e writing await for driver and making function as async

        let title = await driver.browser.getTitle();
        console.log(title);




    })




})