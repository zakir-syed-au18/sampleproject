import {test} from '@playwright/test';

test("upload file",async({page})=>
{
   await page.goto("https://testautomationpractice.blogspot.com/");
   const selectfile = await page.setInputFiles("//input[@id='singleFileInput']","pdf/ama.jpg");
   await page.click('//button[@type="submit"][1]');
   await page.waitForTimeout(5000);
   console.log("file uploaded successfully");
   
})