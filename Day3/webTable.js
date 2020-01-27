const driver = require('protractor')

describe('learn web tables', ()=> {

it('web table', async ()=> {

    driver.browser.waitForAngularEnabled(false)

driver.browser.get('http://leafground.com/pages/table.html')

// find table
let table = driver.element(driver.by.css('#table_id'))
// find rows
let rows = table.all(driver.by.tagName('tr'))

let rowsCount = await rows.count()

console.log("rows count is " + rowsCount)

// loop through each rows

for ( let i =1 ; i < rowsCount ; i++) {
// get row 1
let columns = rows.get(i)
// get all the columns from the row
let td = columns.all(driver.by.tagName('td'))

// print first column text

let text = await td.get(0).getText()
console.log(text)

if (text === 'Learn to interact with Elements')

//driver.element(driver.by.xpath("//table[@id='table_id']")).click()
td.get(2).click()
driver.browser.sleep(3000)

}




})


})