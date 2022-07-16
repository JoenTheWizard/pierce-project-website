let MenubarElem = document.getElementById("menubarID");

//This function will open the menu bar (from button click)
function openMenubar() {
	MenubarElem.style.width = "250px";
}

//This function will close the menu bar (from close menu button)
function closeMenubar() {
	MenubarElem.style.width = "0px";
}

var myIndex = 0;
slide();

function slide() {
  var i;
  var x = document.getElementsByClassName("textboxshowcase");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {
	  myIndex = 1
  }    
  x[myIndex-1].style.display = "block";  
  //5s intervals
  setTimeout(slide, 5000); 
}
