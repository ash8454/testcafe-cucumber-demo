const {Selector} = require('testcafe');
import { ReactSelector } from 'testcafe-react-selectors';

// Selectors

function select(selector) {
    return Selector(selector).with({boundTestRun: testController});
}

//Locator properties
const searchTextBox = '.header-search-input';

//get url

exports.url = async function(baseUrl){
    await testController.navigateTo(baseUrl);
}

//get the search box
exports.searchText = async function(text){
    const searchTextbox = select(searchTextBox);
    await testController.expect(searchTextBox).ok();
    await testController.typeText(searchTextbox, text)
};

//press key
exports.pressKey = async function(text){
    await testController.pressKey(text);
}

//click login button
exports.validateSearchResults = async function(text){
    const searchResultLocator = Selector('.repo-list-item').nth(0).with({boundTestRun: testController}).innerText;
    await testController.expect(searchResultLocator).contains(text);
}
