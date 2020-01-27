
const driver = require("protractor")

describe('super cal', () => {


    it('get title', () => {

        driver.browser.get("https://juliemr.github.io/protractor-demo/")


        // below 2 lines of will give all the promises so can't print title
       // let title = driver.browser.getTitle();
       //  console.log(title);
        
        // to handle promises will use then, below code handling of promises

        driver.browser.getTitle().then ( a => {           // .then ( (a) => { }  )

            console.log(a)
        })





    })




})