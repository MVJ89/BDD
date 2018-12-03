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
|def|mno|

#mangeshjagrut@gmail.com  pwd : Demo123 [http://demo.automationtesting.in/Index.html]
#Above last section is called as 'Scenario outline' which is represented by keyword 'Examples'
#Run this Feature file by RMC -> Run As-> Cucumber Feature
#There are a few secondary keywords as well:

# 'Background' keyword - used when the same set of given statements are repeated 
# in each scenario of the feature file.

# """ (Doc Strings)
# | (Data Tables)
# @ (Tags)
# # (Comments)