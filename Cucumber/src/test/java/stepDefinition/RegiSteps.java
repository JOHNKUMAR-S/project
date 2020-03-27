package stepDefinition;

import Pages.Regi;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class RegiSteps {
	Regi r=new Regi();

	@Given("^the user Opens the opencart webpage$")
	public void the_user_Opens_the_opencart_webpage() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    r.web();
	}

	@When("^the user opens the registration webpage$")
	public void the_user_opens_the_registration_webpage() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    r.Reg();
	}

	@Then("^the user fiils the (.*)and(.*)and(.*)and(.*)and(.*)and(.*)and(.*)and(.*)and(.*)and(.*)$")
	public void the_user_fiils_the_first_last_email_telephone_address_city_pincode_country_region_password(String first,String last,String email,String telephone,String address,String city,String post,String country,String region,String password) throws InterruptedException  {
	    // Write code here that turns the phrase above into concrete actions
	    r.RegDetails(first,last,email,telephone,address,city,post,country,region,password);
	}

	@Then("^the user clicks on (.*) to create a new account$")
	public void the_user_clicks_on_register_to_create_a_new_account(String source) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    r.submit(source);
	}
}
