Feature: Login Module

Scenario Outline: Login test with test data


Given User opened browser and hit valid URL
When User enters multiple values in Email"<email>"
And User enters multiple values in Password"<password>"
And User clicks on Login button
Then Error message should be displayed for Inavlid User ID or Password

Examples: 

|email|password|
|ABC|XYZ|
|123|456|

