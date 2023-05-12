const Form = document.getElementById("myForm");
const Form2 = document.querySelector(".myForm");
const Inputs = document.querySelectorAll(".form-element");

const ul = document.querySelector(".items");

// console.log(ul); //target all items under "ul"

// ul.remove(); //remove all items

// ul.lastElementChild.remove(); //remove last item

// ul.firstElementChild.remove(); //remove first item

ul.firstElementChild.textContent = "PinoyFreeCoder"; //target first item and change value
ul.children[1].innerText = "Hello!"; //target by index and change value
ul.lastElementChild.innerHTML = "<h1>Big</h1>"; //target last element and change innerHTML

//target button element id="btn" and change color
const btn = document.querySelector("#btn");
btn.style.background = "red";
