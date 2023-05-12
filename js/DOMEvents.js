//adding new event
const btn = document.querySelector("#btn");
const Form = document.querySelector(".login-container");

btn.addEventListener("click", function (e) {
  e.preventDefault();
  // console.log("Button was clicked"); //sample
  Form.style.background = "black"; //change background color
});
