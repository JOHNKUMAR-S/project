package com.Baseclass;

import java.io.File;
import java.io.IOException;
import java.util.concurrent.TimeUnit;

import org.apache.commons.io.FileUtils;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

public class BaseClass {
	
	public static WebDriver wb;
	public void launchBrowser(String browserName) throws IOException{
		
		if(browserName.equals("chrome")){
			
			System.setProperty("webdriver.chrome.driver", "src\\test\\resources\\Driver\\chromedriver_80.exe");
			wb = new ChromeDriver();
		}
		
		else if(browserName.equals("firefox")){
			System.setProperty("webdriver.gecko.driver", "src\\test\\resources\\Driver\\geckodriver7.exe");
			wb = new FirefoxDriver();
		}
		wb.manage().window().maximize();
		wb.manage().deleteAllCookies();
		wb.manage().timeouts().pageLoadTimeout(40, TimeUnit.SECONDS);
		wb.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
	}
	public void website(String url)
	{
		
		wb.get(url);
		
	}
	public static void Screenshot(String path) throws IOException {
		TakesScreenshot ts=(TakesScreenshot)wb;
		File f=ts.getScreenshotAs(OutputType.FILE);
		FileUtils.copyFile(f, new File(path));
	}
	


}
