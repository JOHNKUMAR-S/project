package stepDefinition;

import Pages.Regi;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class RegisterInvalidRegion {
	Regi r=new Regi();
	@Given("^user opens the opencart webpage$")
	public void user_opens_the_opencart_webpage() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    r.web();
	}

	@When("^the user clicks to create registration webpage$")
	public void the_user_clicks_to_create_registration_webpage() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    r.Reg();
	}

	@Then("^the user gives invalid phone the(.*)and(.*)and(.*)and(.*)and(.*)and(.*)and(.*)and(.*)and(.*)and(.*)$")
	public void the_user_gives_invalid_phone(String first,String last,String email,String telephone,String address,String city,String post,String country,String region,String password) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    r.RegDetails(first, last, email, telephone, address, city, post, country, region, password);
	}

	@Then("^the user click on (.*) to creates a new account$")
	public void the_user_click_on_testcase_to_creates_a_new_account(String source) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	   r.submit(source);
	}


}
