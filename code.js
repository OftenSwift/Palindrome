

function strings() {

  var str1 = document.getElementById("pal").value;
  var str1 = str1.toLowerCase(); var splitString = str1.split("");
  var reverseString = splitString.reverse();
  var joinString = reverseString.join("");
// this is just what you showed us pretty much tried to get it to change and work differently or all at once then it just all messes up or nothing works
// dont understand how to change the code to my own if thats the way its done to do it
  if (str1 == joinString) {
    document.getElementById("updated").innerHTML = "Hey you got a Palindrome congrats try another!!";

    document.getElementById("img").src = "istockphoto-1175303918-612x612.jpg";


   
   
    //let img = document.createElement("imgs");
   //img.src = 'istockphoto-1175303918-612x612.jpg';
    //document.getElementById("body").appendChild(img);

  }
  else {
    document.getElementById("updated").innerHTML = "Aww this Is not a Palindrome maybe the next one.";
  }

 
}
