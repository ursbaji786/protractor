const driver = require ("protractor")

describe('posse.com',() => {


    it('test case1 in posse', async () => {

        driver.browser.get("http://posse.com/")

        let title = await driver.browser.getTitle()
        console.log(title);

        driver.browser.manage().window.maximize()

        // locating element

       // driver.element (driver.by.css('a[href*="signin"]'))         .click();

        await driver.element (driver.by.partialLinkText('LOG IN')).click()

        
      

       // driver.browser.get("http://posse.com/signin")
       //let signInTitle = await driver.browser.getTitle()
        //console.log(signInTitle);

        driver.element(driver.by.model('email'))
        .sendKeys('ursbaji@gmail.com')

        driver.element(driver.by.model('password'))
        .sendKeys('Rabbit*123')

       
        driver.element(driver.by.model('staySignedIn'))
        .click()

        driver.element(driver.by.buttonText('Sign in'))
        .click()
        // after login title
        let afterSignInTitle = await driver.browser.getTitle()
        console.log(afterSignInTitle);

       driver.element(driver.by.xpath('//a[@class="dropdown-toggle userLoggedIn"]'))
       .click()




    })
})
