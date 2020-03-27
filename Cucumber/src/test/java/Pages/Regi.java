package Pages;

import java.io.IOException;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;

import com.Baseclass.BaseClass;

public class Regi extends BaseClass {
	//Registration task Locators
	By MyAccount= By.xpath("//a[@class='dropdown-toggle']");
	By Register= By.linkText("Register");
	By First= By.id("input-firstname");
	By Last=By.id("input-lastname");
	By Email=By.id("input-email");
	By Telephone=By.id("input-telephone");
	By Fax=By.id("input-fax");
	By Company=By.id("input-company");
	By Add1=By.id("input-address-1");
	By Add2=By.id("input-address-1");
	By City=By.id("input-city");
	By Postcode=By.id("input-postcode");
	By Country=By.id("input-country");
	By Region=By.id("input-zone");
	By Password=By.id("input-password");
	By confirm=By.id("input-confirm");
	By yes=By.xpath("(//input[@name='newsletter'])[1]");
	By checkbox=By.xpath("//input[@type='checkbox']");
	By submit=By.xpath("//input[@type='submit']");

 
	// To launch the Browser
	public void web() throws InterruptedException, IOException
	{
		launchBrowser("chrome");
		Thread.sleep(5000);
	}
	//To launch the Home Page
	public void Reg()
	{
		wb.get("http://opencart.abstracta.us/");
		System.out.println(wb.getTitle());
	}
	//To give Registration Details
	public void RegDetails(String first,String last,String email,String telephone,String address,String city,String post,String country,String region,String password) throws InterruptedException
	{
		wb.findElement(MyAccount).click();
		wb.findElement(Register).click();
		wb.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
		wb.findElement(By.xpath("//button[@id='details-button']")).click();
		wb.findElement(By.xpath("//a[@class='small-link']")).click();
		wb.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
		wb.findElement(First).sendKeys(first);
		wb.findElement(Last).sendKeys(last);
		wb.findElement(Email).sendKeys(email);
		wb.findElement(Telephone).sendKeys(telephone);
		//wb.findElement(Fax).sendKeys("23456789");
		//wb.findElement(Company).sendKeys("cognizant");
		wb.findElement(Add1).sendKeys(address);
		//wb.findElement(Add2).sendKeys("cuddalore");
		wb.findElement(City).sendKeys(city);
		wb.findElement(Postcode).sendKeys(post);
		wb.findElement(Country).click();
		wb.findElement(Country).sendKeys(country);
		wb.findElement(Country).click();
		Thread.sleep(5000);
		wb.findElement(Region).click();
		wb.findElement(Region).sendKeys(region);
		wb.findElement(Region).click();
		Thread.sleep(5000);
		wb.findElement(Password).sendKeys(password);
		wb.findElement(confirm).sendKeys(password);
		wb.findElement(checkbox).click();
		wb.findElement(yes).click();

	}
	//To take Screenshot and close the Browser
	public void submit(String source) throws InterruptedException, IOException
	{
		WebElement l5=wb.findElement(submit);
		Actions a=new Actions(wb);
		a.moveToElement(l5).click().perform();
		wb.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
		Screenshot("src\\test\\resources\\Screenshot\\"+source+".png");
		Thread.sleep(3000);
		wb.close();
	}
	
}
