package Pages;

import java.io.IOException;
import java.util.concurrent.TimeUnit;


import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;

import com.Baseclass.BaseClass;

public class LoginPage extends BaseClass{
	By MyAccount= By.xpath("//a[@class='dropdown-toggle']");
	By Login=By.xpath("//*[@id='top-links']/ul/li[2]/ul/li[2]/a");
	By Email=By.name("email");
	By Password=By.name("password");
	By Submit=By.xpath("//*[@type='submit']");

	public void url() throws InterruptedException, IOException
	{
	  launchBrowser("chrome");
		Thread.sleep(5000);
	}
	public void Login()
	{
		website("http://opencart.abstracta.us/");
		System.out.println(wb.getTitle());
	}

	public void LoginDetails(String user, String pass) throws InterruptedException
	{
		wb.findElement(MyAccount).click();
		wb.findElement(Login).click();
		wb.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
		wb.findElement(By.xpath("//button[@id='details-button']")).click();
		wb.findElement(By.xpath("//a[@class='small-link']")).click();
		wb.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
		wb.findElement(Email).sendKeys(user);
		wb.findElement(Password).sendKeys(pass);
		wb.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
	}
	public void submit(String source) throws IOException, InterruptedException
	{
		WebElement l5=wb.findElement(Submit);
		Actions a=new Actions(wb);
		a.moveToElement(l5).click().perform();
		wb.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
		Screenshot("src\\test\\resources\\Screenshot\\"+source+".png");
		Thread.sleep(3000);
		wb.close();
	}
}