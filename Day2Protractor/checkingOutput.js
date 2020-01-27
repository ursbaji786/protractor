const driver = require ("protractor")

describe('output value',() => {


    it('add values', async () => {

        driver.browser.get("https://juliemr.github.io/protractor-demo/")

        let title = await driver.browser.getTitle()
        console.log(title);

        // locating element

        driver.element (driver.by.model('first'))
        .sendKeys('10')

        // printing of enetered value

        let firstEnteredValue = await  driver.element(driver.by.model('first')).getAttribute('value')  
        console.log("first entered value is " + firstEnteredValue);
        

        driver.element(driver.by.model('second'))
        .sendKeys('5')

        // printing of second value

       let secondEnteredValue = await driver.element(driver.by.model('second')).getAttribute('value')
       console.log("second entered value is "+secondEnteredValue);
       

        // 
        driver.element(driver.by.buttonText('Go!'))
        .click()

        let result = await driver.element(driver.by.tagName('h2'))
        .getText()
        console.log(result);
        
// validation of output with our expected output



    })
} )