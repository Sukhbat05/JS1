const myNode = document.getElementById("MyNode");
myNode.innerText = "Hello DOM !";

document.querySelector("span").style.fontSize = "x-large";
document.querySelector("span").style.color = "red";

 const para = document.createElement("p")

 para.innerText = "This is paragraph";
 document.getElementById("myList").appendChild(para)