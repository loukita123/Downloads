const { Builder, By, until } = require('selenium-webdriver');

async function performLoginTest() {
    let driver = await new Builder().forBrowser('chrome').build();

    try {
        await driver.get('http://localhost:3000/login');

        // Input valid credentials
        await driver.findElement(By.id('username')).sendKeys('yourUsername');
        await driver.findElement(By.id('password')).sendKeys('yourPassword');

        await driver.findElement(By.id('login-button')).click();

        // Redirect to the expected page
        await driver.get('http://localhost:3000/dashboard');
        await driver.wait(until.urlIs('http://localhost:3000/dashboard'), 1000);

        console.log('Login test passed!!!');
    } catch (error) {
        console.error('Login test failed', error);
    } finally {
        await driver.quit();
    }
}

performLoginTest();
