package stepDefinition;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;

public class LoginPage {

	WebDriver driver;

	@Given("^User opened browser and hit valid URL$")
	public void launchBrowserAndHitURL() {
		// http://demo.automationtesting.in/SignIn.html

		System.setProperty("webdriver.chrome.driver", "D:\\3 RI Selenium\\Chrome Driver\\chromedriver.exe");

		driver = new ChromeDriver();
		driver.get("http://demo.automationtesting.in/SignIn.html");
		driver.manage().window().maximize();
		// driver.manage().timeouts().implicitlyWait(5, TimeUnit.SECONDS);

	}

	@When("^User enters value in Email ID$")
	public void enterValueInEmailField() {

		driver.findElement(By.xpath("//input[@placeholder='E mail']")).sendKeys("ABC");

	}

	@When("^User enters value in Password$")
	public void enterValueInPasswordField() {

		driver.findElement(By.xpath("//input[@placeholder='Password']")).sendKeys("XYZ");

	}

	@When("^User clicks on Login button$")
	public void enterButton() {
		driver.findElement(By.id("enterbtn")).click();
	}

	@Then("^Error message should be displayed for Inavlid User ID or Password$")
	public void verifyErrorMessage() {

		// Explicit Wait below steps
		//in this Explicit wait, we can tell util run particular step for mentioned time

		WebDriverWait wait = new WebDriverWait(driver, 10);
		wait.until(ExpectedConditions.visibilityOf(driver.findElement(By.id("errormsg"))));
		Assert.assertTrue(driver.findElement(By.id("errormsg")).isDisplayed());

	}

	@When("^User enters multiple values in Email\"(.*)\"$")
	public void enterParaEmail(String emailID) {
		
		driver.findElement(By.xpath("//input[@placeholder='E mail']")).sendKeys(emailID);

	}

	@When("^User enters multiple values in Password\"(.*)\"$")
	public void enterParaPassword(String password) {

		driver.findElement(By.xpath("//input[@placeholder='Password']")).sendKeys(password);
		
		
	}
}
