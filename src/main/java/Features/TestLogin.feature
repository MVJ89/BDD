Feature: Login Module

Scenario: Verify invalid Login

Given User opened browser and hit valid URL
When User enters value in Email ID
And User enters value in Password
And User clicks on Login button
Then Error message should be displayed for Inavlid User ID or Password
