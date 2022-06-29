let MenubarElem = document.getElementById("menubarID");

//This function will open the menu bar (from button click)
function openMenubar()
{
	MenubarElem.style.width = "250px";
}

//This function will close the menu bar (from close menu button)
function closeMenubar()
{
	MenubarElem.style.width = "0px";
}

//This function returns the date and sets it to the <p> element at the footer
function getDate()
{
	var date = new Date();
	document.getElementById("dateNow").innerHTML = `Created by Joe Nicola<br>${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`;
}
getDate();