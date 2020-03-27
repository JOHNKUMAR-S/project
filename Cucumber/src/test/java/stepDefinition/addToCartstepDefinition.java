package stepDefinition;



import Pages.addToCart;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class addToCartstepDefinition {
	
	addToCart cart=new addToCart();
	
	@Given("^the user launches the web application$")
	public void the_user_launches_the_web_application() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		  cart.url();
	}

	@When("^the user launch the opencart$")
	public void the_user_launch_the_opencart() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		 cart.homepage();
	}

	@Then("^the user search for the products$")
	public void the_user_search_for_the_products() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		 cart.actions();
	}

	@Then("^click on add to cart$")
	public void click_on_add_to_cart() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    cart.addcart();
	}
}
