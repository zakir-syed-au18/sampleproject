import {test} from '@playwright/test';
import path from 'node:path';

//to run local html file from your computer
test("local run",async ({page})=>
{
    const filepath = path.join('/C:/Users/Mrjun/vscodes',"login.html");
   await page.goto(`file://${filepath}`);

   const username= await page.locator("//input[@id='username']");
   await username.click();
   await page.keyboard.type("hello123");
   const password =await page.locator("//input[@id='password']");
   await password.fill("admin@123")
   await page.waitForTimeout(5000);
  

})