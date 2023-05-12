//target elements of form with id=myForm
const Form = document.getElementById("myForm");

//target elements of form with id=myForm using jquery
const Form2 = document.querySelector("#myForm");

//target elements of form with jquery using class
const Inputs = document.querySelectorAll(".form-element");

console.log(Form);
console.log(Form2);
console.log(Inputs);

//loop each elements of Inputs array
Inputs.forEach(function (input) {
  console.log(input);
});

/*
//browser data
console.log(window);
*/
