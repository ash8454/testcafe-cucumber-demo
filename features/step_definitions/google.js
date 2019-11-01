const {Given, When, Then} = require('cucumber');
const Selector = require('testcafe').Selector;
require('custom-env').env(process.env.NODE_ENV, 'config');

Given('I am open Google\'s search page', async function() {
    const url = process.env.GITHUB_URL || 'https://www.google.uk'
    await testController.navigateTo(process.env.VM_IP_ADDRESS);
});

When('I am typing my search request {string} on Google', async function(text) {
    var input = Selector('.gLFyf').with({boundTestRun: testController});
    await this.addScreenshotToReport();
    await testController.typeText(input, text);
});

Then('I press the {string} key on Google', async function(text) {
    await testController.pressKey(text);
});

Then(/I should see that the first Google\'s result is (.*)/, async function(text) {
    var firstLink = Selector('#rso').find('a').with({boundTestRun: testController});
    await testController.expect(firstLink.innerText).contains(text);
});
