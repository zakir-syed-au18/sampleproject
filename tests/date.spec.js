import {test} from '@playwright/test';

test("date picker",async({page})=>
{
    await page.goto("https://testautomationpractice.blogspot.com/");
    //date picker 1
    let year =2026
    let month='August'
    let date = 10
    let mno = 8
    const datepicker = await page.locator("//input[@id='datepicker']");
    const prev= await page.locator("//a[@title='Prev']");
    const next= await page.locator("//a[@title='Next']");
    const mth= await page.locator(`//div[@id='ui-datepicker-div']/descendant::span[contains(text(),'${month}')]/following-sibling::span[contains(text(),'${year}')]/ancestor::div/descendant::a[contains(text(),'${date}')]`);
    await datepicker.click();
    for(let i=1;i<=mno;i++){
    await next.click();
    }
    await mth.click();
    //datapicker 2
    let month2="Oct";
    let year2= 2026;
    let date2 = 25;
    let mth2=12
    const datepicker2 =  await page.locator("//input[@id='txtDate']");
    const datapicker2prv = await page.locator("//a[@title='Prev']");
    const datapicker2nxt= await page.locator("//a[@title='Next']");
    const monthpicker1= await page.locator(`//div[@class='ui-datepicker-title']/select[@class='ui-datepicker-month']/option[contains(text(),'${month2}')]`);
    const yearpicker1 =  await page.locator(`/div[@class='ui-datepicker-title']/select[@class='ui-datepicker-year']/option[contains(text(),'${year2}')]`);
    const datepicker2dt = await page.locator(`//table[@class='ui-datepicker-calendar']/tbody/tr/td/a[(text()='${date2}')]`);
    await datepicker2.click();
    for(let i=1;i<=mth;i++)
    {
       await datapicker2nxt.click();
    }
    await datepicker2dt.click();
    await page.waitForTimeout(5000);

});