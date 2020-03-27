package Pages;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;

public class addToCart {
	WebDriver driver;
	By Myaccount=By.xpath("//*[@id=\"top-links\"]/ul/li[2]/a/span[1]");
	By login=By.xpath("//*[@id=\"top-links\"]/ul/li[2]/ul/li[2]/a");
	By Email=By.id("input-email");
	By password=By.id("input-password");
	By loginbtn=By.xpath("//*[@id=\"content\"]/div/div[2]/div/form/input");
	By phones=By.xpath("//*[@id=\"menu\"]/div[2]/ul/li[6]/a");
	By addtocart=By.xpath("//*[@id=\"content\"]/div[2]/div[1]/div/div[2]/div[2]/button[1]/span");
	By cart=By.xpath("//*[@id=\"top-links\"]/ul/li[4]/a/span");
	By item=By.xpath("//*[@id=\"content\"]/form/div/table/tbody/tr/td[2]/a");
	By product=By.xpath("//*[@id=\"content\"]/div[2]/div[1]/div/div[2]/div[1]/h4/a");
	By Quantity=By.xpath("//*[@id=\"content\"]/form/div/table/tbody/tr/td[4]/div/input");
	By button=By.xpath("//*[@id=\"content\"]/form/div/table/tbody/tr/td[4]/div/span/button[1]");
	
	public void url() { // url for launch the chrome
		System.setProperty("webdriver.chrome.driver",  "src\\test\\resources\\Driver\\chromedriver_80.exe");
		driver = new ChromeDriver();
		driver.manage().window().maximize();
		driver.manage().timeouts().implicitlyWait(50, TimeUnit.SECONDS);
		
	}
	public void homepage() //using webdriver get visting the testing website
	{
		driver.get("http://opencart.abstracta.us/");
		System.out.println(driver.getTitle());
	}
	public void actions() throws InterruptedException 
	{
		driver.findElement(Myaccount).click();
		WebElement link =driver.findElement(Myaccount); 
		WebElement link2=driver.findElement(login);
		Actions action = new Actions(driver);
		action.moveToElement(link);
		action.moveToElement(link2).click().perform();
		driver.findElement(By.xpath("//button[@id='details-button']")).click();
		driver.findElement(By.xpath("//a[@class='small-link']")).click();
		driver.findElement(Email).sendKeys("tsuriyakumarr@gmail.com");
		driver.findElement(password).sendKeys("suriya123");
		Thread.sleep(5000);
		driver.findElement(loginbtn).click();
		Thread.sleep(5000);
		driver.findElement(phones).click();
		JavascriptExecutor js =(JavascriptExecutor) driver ;
		js.executeScript("window.scrollBy(0,5000)");
		
		}
	
	
	public void addcart() throws InterruptedException {
		driver.findElement(addtocart).click();
		Thread.sleep(2000);
		driver.close();
	}

	
}