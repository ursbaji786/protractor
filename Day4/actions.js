

//import { browser } from "protractor"
import { browser, element } from "protractor";

function dragDrop() {

browser.waitForAngularEnabled(false)
browser.get('https://jqueryui.com/droppable/')
browser.manage().window().maximize()
browser.manage().timeouts().implicitlyWait(3000)
browser.switchTo().frame(0)
let drag = element(by.id('draggable'))
let drop = element(by.id('droppable'))
browser.actions().dragAndDrop(drag,drop).perform()
browser.sleep(3000)

}

function draggableToLocation() {

    browser.waitForAngularEnabled(false)
    browser.get('https://jqueryui.com/draggable/')
    browser.manage().window().maximize()
    browser.manage().timeouts().implicitlyWait(3000)
    browser.switchTo().frame(0)

let draggable = element(by.id('draggable'))
// let locX = await draggable.getLocation().x
// let locY = await draggable.getLocation().y
//console.log(locX , locY)
browser.actions().dragAndDrop(draggable,{x:100, y: 10}).perform()
browser.sleep(3000)

}


async function sortableNotWorking() {

    browser.waitForAngularEnabled(false)
    browser.get('https://jqueryui.com/sortable/')
    browser.manage().window().maximize()
    browser.manage().timeouts().implicitlyWait(3000)
    browser.switchTo().frame(0)

    let source = element(by.xpath("//li[text()='Item 1']"))
   //let dest = element(by.xpath("//li[text()='Item 5']"))
    // let dest = element(by.css ('#sortable > li:nth-child(5)'))
   // let dest = element(by.css('ul#sortable>li:nth-of-type(5)'))

//let locX = await dest.getLocation().x

//let locY = await dest.getLocation().y


    //browser.actions().dragAndDrop(item1,item5).perform()
    browser.sleep(5000)

}


async function sortable(){

    browser.waitForAngularEnabled(false)
    browser.get('https://jqueryui.com/sortable/')
    browser.manage().window().maximize()
    browser.manage().timeouts().implicitlyWait(30000)
    browser.manage().deleteAllCookies()
    browser.switchTo().frame(0)
    let item1=element(by.xpath("//ul[@class='ui-sortable']/li[1]"))
    let item3=element(by.xpath("//ul[@class='ui-sortable']/li[3]"))
    let location =await item3.getLocation()
    let xValue=await location.x
    let yValue=await location.y

    browser.actions().dragAndDrop(item1,{x:xValue,y:yValue}).perform()

}

describe('actions', ()=> {

it('drag and drop', ()=> {
dragDrop()
})


xit('draggable to x and y co-ordinates' , ()=> {
    draggableToLocation()
})


it('sorting to another item' , ()=> {
    sortable()
})


})
