/*****************************************
File: asgn2_Nguyen.html
Author: Thuy Tien Nguyen
Assignment: 2
Create Date: 6/26/2019
Last Modified: 6/29/2019
****************************************/

var $ = function (id) 
{
    return document.getElementById(id);
}

var processInfo = function ()
{
	//Initialize variable to "N"
	var errorFoundFlag = "N";  
	
	//Initialize variable for date format
	var today = new Date();   
	var todaymm  = today.getMonth() + 1;
	var todaydd  = today.getDate();
	var todayyyy = today.getFullYear();
	var todayformatted = todaymm + '-' + todaydd + '-' + todayyyy;
	
	//get value from user
	var myFirstName = $("firstname").value;
	var myLastName = $("lastname").value;
	var myNumPets = $("numpets").value;
	
	//make myNumPets integer
	var myNumPetsInt = parseInt(myNumPets);
	
	//Initialize variable myPetInfo to null
	var myPetInfo = "";
	
	//check if myFirstName value is empty or not
	if (myFirstName == "")
	{
		$("firstname_error").innerHTML = "Please enter first name";
		errorFoundFlag = "Y";
	}
	else
	{
		$("firstname_error").innerHTML = "";
		errorFoundFlag = "N";
	}
	
	//check if myLastName value is empty or not	
	if (myLastName == "")
	{
		$("lastname_error").innerHTML = "Please enter last name";
		errorFoundFlag = "Y";
	}
	else
	{
		$("lastname_error").innerHTML = "";
		errorFoundFlag = "N";
	}
	
	//check if myNumPets value is empty or not OR it a valid number or not OR the value is in between 0-3
	if (myNumPets == "" || isNaN(myNumPets) || myNumPetsInt > 3)
	{
		if (isNaN(myNumPets) || myNumPetsInt > 3)
		{
			$("numpets_error").innerHTML = "Please enter the number of pets you have between 0-3";
			errorFoundFlag = "Y";
		}
		else
		{
			$("numpets_error").innerHTML = "Please enter the number of pets you have";
			errorFoundFlag = "Y";
		}
	}
    else
	{
		$("numpets_error").innerHTML = "";
		errorFoundFlag = "N";
	}
	
    //if no error found, process the for loop based on myNumPets entered and print out the text message
	if (errorFoundFlag == "N")
	{
	
	   for(counter = 1; counter <= myNumPetsInt; counter ++)
	   {
			myPetId = "pet" + counter;
			myPetName = $(myPetId).value;
            myPetInfo += " Your Pet #" + counter + " is named " + myPetName + ".";
  	   }
	   
	   //print text message after button is clicked
	   myText = "Your Name is listed as " + myLastName + ", " + myFirstName + " and today's date is " + todayformatted + "." + myPetInfo;
	   $("message").innerHTML = myText;
	}

}

window.onload = function () 
{
    $("mybutton").onclick = processInfo;
}
