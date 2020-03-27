package TestRunner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)  //To run with cucumber class
@CucumberOptions(
		features = {"Feature\\My Test.Feature"},
		plugin = {"pretty", "html:reports/cucumber-html-report","json:reports/cucumber-html-report/jsonreport","com.cucumber.listener.ExtentCucumberFormatter:reports/Extentreports/Extentreport.html"},
		tags = {"@TC_01_Opencart,@TC_02_Opencart,@TC_03_Opencart,@TC_04_Opencart,@TC_05_Opencart,@TC_06_Opencart"},
		glue = {"stepDefinition"}, //Name of step defnition
		monochrome = true
		)

public class OpencartTestRunner {


}
