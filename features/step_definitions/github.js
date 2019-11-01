const {Given, When, Then} = require('cucumber');
const Role = require('testcafe').Role;
const githubPage = require('../support/pages/github-page');

Given(/^I open the GitHub page$/, async function() {
    await githubPage.url('https://github.com/')
});

When(/^I am typing my search request (.*) on GitHub$/, async function(text) {
    await githubPage.searchText(text);
    //await testController.typeText(githubPage.github.searchButton(), text);
});

Then(/^I am pressing (.*) key on GitHub$/, async function(text) {
    await githubPage.pressKey(text);
});

Then(/^I should see that the first GitHub\'s result is (.*)$/, async function(text) {
    await githubPage.validateSearchResults(text);
});

const gitHubRoleForExample = Role(githubPage.url() + 'login', async function(t) {
    await t
        .click(githubPage.github.loginButton())
        .expect(githubPage.github.loginErrorMessage().innerText).contains('Incorrect username or password.');
});

Then(/^I am trying to use (.*)$/, async function(text) {
    await testController.useRole(gitHubRoleForExample);
});
