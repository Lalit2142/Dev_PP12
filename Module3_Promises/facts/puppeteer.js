let puppeteer = require("puppeteer") ;

let page ;
let arr ;

let browserOpenPromise = puppeteer.launch({
    headless : false,
    slowMo : 100,
    defaultViewport : null,
    args : ['--start-maximized'] 
})
.then(function(browserObj){
    console.log("Browser Opened") ;
    let pageOpenPromise = browserObj.newPage() ;
    return pageOpenPromise ;
})
.then(function(newTab){
    console.log("New Tab opened") ;
    page = newTab ;
    let googleHomePageOpenPromise = page.goto("https://www.google.com") ;
    return googleHomePageOpenPromise ;
})
.then(function(){
    console.log("Google Home Page opened") ;
    let typePromise = page.type("input[title = 'Search']", 'pepcoding');
    return typePromise ;
})
.then(function(){
    console.log("Typed pepcoding on input box") ;
    let typedPromise = page.keyboard.press('Enter');
    return typedPromise ;
})
.then(function(){
    console.log("Pressed enter on input box") ;
    let waitForPagePromise = page.waitForSelector('.LC20lb.DKV0Md', {visible: true}) ;
    return waitForPagePromise ;
})
.then(function(){
    let clickPepcodingPromise = page.click('.LC20lb.DKV0Md') ;
    return clickPepcodingPromise ;
})
.then(function(){
    console.log("Opened Pepcoding website") ;
    let closeAdvertisementPromise = page.click('#lp_modal_close') ;
    return closeAdvertisementPromise ;
})
.then(function(){
    console.log("Closed Advertisement") ;
    let resourcesClickPromise = page.click('.site-nav-ul a[href="/resources"]') ;
    return resourcesClickPromise ;
})
.then(function(){
    console.log("Opened Resources tab") ;
    let clickLevel1Promise = page.waitForSelector('.row .start-button',{visible:true}) ;
    return clickLevel1Promise ;
})
.then(function(){
    let level1ClickedPromise = page.click('.row .start-button') ;
    return level1ClickedPromise ;
})
.then(function(){
    console.log("Target reached") ;
})
.catch(function(){
    console.log("Task failed") ;
})


