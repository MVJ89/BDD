$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Features/TestDataDrivenLogin.feature");
formatter.feature({
  "line": 1,
  "name": "Login Module",
  "description": "",
  "id": "login-module",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Login test with test data",
  "description": "",
  "id": "login-module;login-test-with-test-data",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "User opened browser and hit valid URL",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User enters multiple values in Email\"\u003cemail\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User enters multiple values in Password\"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User clicks on Login button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Error message should be displayed for Inavlid User ID or Password",
  "keyword": "Then "
});
formatter.examples({
  "line": 12,
  "name": "",
  "description": "",
  "id": "login-module;login-test-with-test-data;",
  "rows": [
    {
      "cells": [
        "email",
        "password"
      ],
      "line": 14,
      "id": "login-module;login-test-with-test-data;;1"
    },
    {
      "cells": [
        "ABC",
        "XYZ"
      ],
      "line": 15,
      "id": "login-module;login-test-with-test-data;;2"
    },
    {
      "cells": [
        "123",
        "456"
      ],
      "line": 16,
      "id": "login-module;login-test-with-test-data;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 15,
  "name": "Login test with test data",
  "description": "",
  "id": "login-module;login-test-with-test-data;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "User opened browser and hit valid URL",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User enters multiple values in Email\"ABC\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User enters multiple values in Password\"XYZ\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User clicks on Login button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Error message should be displayed for Inavlid User ID or Password",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPage.launchBrowserAndHitURL()"
});
formatter.result({
  "duration": 16821577579,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ABC",
      "offset": 37
    }
  ],
  "location": "LoginPage.enterParaEmail(String)"
});
formatter.result({
  "duration": 443802237,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "XYZ",
      "offset": 40
    }
  ],
  "location": "LoginPage.enterParaPassword(String)"
});
formatter.result({
  "duration": 246871085,
  "status": "passed"
});
formatter.match({
  "location": "LoginPage.enterButton()"
});
formatter.result({
  "duration": 181019140,
  "status": "passed"
});
formatter.match({
  "location": "LoginPage.verifyErrorMessage()"
});
formatter.result({
  "duration": 211957685,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Login test with test data",
  "description": "",
  "id": "login-module;login-test-with-test-data;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "User opened browser and hit valid URL",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User enters multiple values in Email\"123\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User enters multiple values in Password\"456\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User clicks on Login button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Error message should be displayed for Inavlid User ID or Password",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPage.launchBrowserAndHitURL()"
});
formatter.result({
  "duration": 8053747769,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123",
      "offset": 37
    }
  ],
  "location": "LoginPage.enterParaEmail(String)"
});
formatter.result({
  "duration": 302073969,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "456",
      "offset": 40
    }
  ],
  "location": "LoginPage.enterParaPassword(String)"
});
formatter.result({
  "duration": 150616639,
  "status": "passed"
});
formatter.match({
  "location": "LoginPage.enterButton()"
});
formatter.result({
  "duration": 218418689,
  "status": "passed"
});
formatter.match({
  "location": "LoginPage.verifyErrorMessage()"
});
formatter.result({
  "duration": 286497393,
  "status": "passed"
});
formatter.uri("Features/TestLogin.feature");
formatter.feature({
  "line": 1,
  "name": "Login Module",
  "description": "",
  "id": "login-module",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Verify invalid Login",
  "description": "",
  "id": "login-module;verify-invalid-login",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "User opened browser and hit valid URL",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User enters value in Email ID",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User enters value in Password",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User clicks on Login button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Error message should be displayed for Inavlid User ID or Password",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPage.launchBrowserAndHitURL()"
});
formatter.result({
  "duration": 8894984080,
  "status": "passed"
});
formatter.match({
  "location": "LoginPage.enterValueInEmailField()"
});
formatter.result({
  "duration": 283353433,
  "status": "passed"
});
formatter.match({
  "location": "LoginPage.enterValueInPasswordField()"
});
formatter.result({
  "duration": 333447789,
  "status": "passed"
});
formatter.match({
  "location": "LoginPage.enterButton()"
});
formatter.result({
  "duration": 298679480,
  "status": "passed"
});
formatter.match({
  "location": "LoginPage.verifyErrorMessage()"
});
formatter.result({
  "duration": 349920107,
  "status": "passed"
});
});