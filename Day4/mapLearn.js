import { element } from "protractor"
const driver = require('protractor')

async function sortableMap() {

    browser.waitForAngularEnabled(false)
    browser.get('https://jqueryui.com/sortable/')
    browser.manage().window().maximize()
    browser.manage().timeouts().implicitlyWait(30000)
    browser.manage().deleteAllCookies()
    browser.switchTo().frame(0)

    let sortTable = element(by.css('#sortable'))
    let rows = sortTable.all(by.tagName('li'))
    let rowCount = await rows.count()
    console.log(rowCount)

    let myMap = rows.map(async (ele, i) => {
        let col = ele.$$('li')

        return {
            index: i,
            itemNumbers: await col.get(0).getText()
        }
    });

    (await myMap).forEach(element => {
        console.log(element.itemNumbers)

    });
}


async function mappractise() {
    driver.browser.waitForAngularEnabled(false)
    browser.sleep(3000)
    driver.browser.manage().window().maximize()
    driver.browser.manage().timeouts().implicitlyWait(30000)
    driver.browser.get('https://jqueryui.com/sortable/')
    driver.browser.switchTo().frame(0)
    browser.sleep(5000)
    let rows = driver.element.all(by.xpath('//ul[@id="sortable"]/li'))
    console.log("total no of rows: " + await rows.count())

    let mymap = rows.map(async (ele, i) => {
        // let td = ele.$$('li')
        return {
            index: i,
            listItem: await ele.getText()
        }
    });
    (await mymap).forEach(ele => {
        console.log(ele)
    });
}

describe('map concept', () => {

    it('map learn', () => {
        mappractise()
    })

})
