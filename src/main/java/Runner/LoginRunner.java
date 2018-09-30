package Runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
//@CucumberOptions(features = {"classpath:Features/TestLogin.feature"},glue = {"stepDefinition"})
//above is for single feature file


@CucumberOptions(features = {"classpath:Features/TestDataDrivenLogin.feature","classpath:Features/TestLogin.feature"},glue = {"stepDefinition"},format = {"html:test-output"})
//above is for three feature file with TestDataDriven runs for two feature file and TestLogin for one Feature file.
// format = {"html:test-output"} this is for reporting.
public class LoginRunner {

	
}
