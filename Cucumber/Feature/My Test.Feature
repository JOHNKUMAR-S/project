@OpenCart
Feature: OpenCart Website    
@TC_01_Opencart
Scenario Outline: To Register in the opencart   
Given the user Opens the opencart webpage
When the user opens the registration webpage
Then the user fiils the <first> and <last>and <email>and<telephone>and<address>and<city>and<post>and<country>and<region>and<password>
Then the user clicks on <register> to create a new account
    
Examples:    
|first|last|email|telephone|address|city|post|country|region|password|register|
|john|kumar|jk97@gmail.com|23456789|berlin street|chennai|600002|India|Tamil|johnkumar|register1|
|mukund|kumar|mukundkumar90@gmail.com|23458796|indira street|chennai|600065|India|Tamil|mukundkumar97|register2|
|Shreyas|iyer|shreyas20@gmail.com|23905678|bose street|chennai|600078|India|Tamil|shreyas13|register3|
    
@TC_02_Opencart
Scenario Outline: To Login in the Opencart
Given the user launch the chrome application
When the user opens the opencart webpage
Then the user login using <username> and <password>
Then click on the <login> button user nagivate to the next page
    
Examples:
|username|password|login|
|jk97@gmail.com|johnkumar|login1|
|mukundkumar90@gmail.com|mukundkumar97|login2|
|shreyas20@gmail.com|shreyas13|login3|
    
@TC_03_Opencart 
Scenario Outline: To Login with invalid details    
Given the user launch the app
When the user opens the login page
Then the user giving invalid details <user> and <pass>
Then click on <login> appropriate error message is displayed
    
Examples:
|user|pass|login|
|jk97@gmail.com|johnkumqr|testcase1|
  
@TC_04_Opencart
Scenario Outline: To Register with invalid email details   
Given the user open the opencart webpage
When the user open the registration webpage
Then the user gives the <first> and <last>and <email>and<telephone>and<address>and<city>and<post>and<country>and<region>and<password>
Then the user click on <register> to create a new account
    
Examples:   
|first|last|email|telephone|address|city|post|country|region|password|register|
|john|kumar|aki5l.gmail.com|23456789|ganhi street|chennai|600002|India|Tamil|password|testcase2|
   
@TC_05_Opencart    
Scenario Outline: To Register with invalid region
Given user opens the opencart webpage
When the user clicks to create registration webpage
Then the user gives invalid phone the <first> and <last>and <email>and<telephone>and<address>and<city>and<post>and<country>and<region>and<password>
Then the user click on <register> to creates a new account
    
Examples:
|first|last|email|telephone|address|city|post|country|region|password|register|
|akil|kumar|akil2@gmail.com|2345907b|ganhi street|chennai|600002|India|Indonesia|password|testcase3|
    
@TC_06_Opencart
Scenario: To add to cart
Given the user launches the web application
When the user launch the opencart
Then the user search for the products
Then click on add to cart
