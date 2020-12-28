Feature: Search for ads
  As a Customer, I want to see if the second ad from the second results page when searching for "Iphone"
  on AliExpress has at least 1 item to be bought.

  Scenario: Customer searches for "Iphone" and see at least 1 item to buy on the second ad at the second results page
    Given the customer has navigated to AliExpress home page
    When the customer searches for "Iphone" on AliExpress searchbox
    Then AliExpress 1° results page is correctly displayed
    When the customer clicks on "Next" button at AliExpress results page paginator
    Then AliExpress 2° results page is correctly displayed
    And a 2° ad is correctly displayed at AliExpress 2° results page
    When the customer clicks on 2° ad's details link
    Then the ad has at least 1 item to be bought
