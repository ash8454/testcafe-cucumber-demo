Feature: Searching for TestCafe on GitHub
Description: I want to find TestCafe repository on GitHub

  Background: Open Github page
   Given I open the GitHub page

  @Smoke
  Scenario Outline: Searching for TestCafe on GitHub
    When I am typing my search request <search_request> on GitHub
    Then I am pressing enter key on GitHub
    Then I should see that the first GitHub's result is DevExpress/testcafe
  Examples:
  | search_request|
  |TestCafe|

  @Smoke
  Scenario Outline: Searching for TestCafe on GitHub
    When I am typing my search request <search_request> on GitHub
    Then I am pressing enter key on GitHub
    Then I should see that the first GitHub's result is DevExpress/testcafe
  Examples:
  | search_request|
  |TestCafe Cucumber|