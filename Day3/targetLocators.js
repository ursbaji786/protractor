// target locators are nothing but handling of alerts, frmaes and windows

const driver = require('protractor')
describe ('learn target locators', () =>{

it('learn alert and frames', async () => {

     /// when the application is non-angular then use below command to interact, if it is angular it will be true by default
    
     // driver.browser.ignoreSynchronization(true) -- this one depricated
     driver.browser.waitForAngularEnabled(false) 


driver.browser.get('https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_prompt')
driver.browser.manage().window().maximize()
driver.browser.manage().timeouts().implicitlyWait(3000)

// try is inside the frame

// let tryButton = driver.element(driver.by.buttonText('Try it'))
// tryButton.click()

let move2Frame = driver.element(driver.by.name('iframeResult'))
driver.browser.switchTo().frame(move2Frame.getWebElement())
//driver.browser.switchTo().frame(0)

let tryButton = driver.element(driver.by.buttonText('Try it'))
tryButton.click()


let alert = driver.browser.switchTo().alert()
alert.sendKeys("baji")
alert.accept()
driver.browser.sleep(3000)

let result = await driver.element(driver.by.id('demo')).getText()

console.log(result)

expect(result).toContain("baji")



})



it('windows handling', async () => {

     driver.browser.waitForAngularEnabled(false)

driver.browser.get('http://www.leafground.com/pages/Window.html')

let parentWindow = driver.browser.getWindowHandle()

let title = await driver.browser.getTitle()
console.log(title)

driver.element(driver.by.buttonText('Open Home Page')).click()

let allWindows = await driver.browser.getAllWindowHandles()
console.log(allWindows)

// switch to newly opened window or tab

driver.browser.switchTo().window(allWindows[1])
let openWindowTitle = await driver.browser.getTitle()
console.log(openWindowTitle)

// verifying the title of opened tab or window
let titlePresented = "TestLeaf - Selenium Playground"

expect(openWindowTitle).toBe(titlePresented)

// closing of parent window

driver.browser.switchTo().window(parentWindow)
driver.browser.close()
let presentAvailableWindows = await driver.browser.getAllWindowHandles()
console.log(presentAvailableWindows.length)
console.log("after closing parent window" + presentAvailableWindows)







})



})
