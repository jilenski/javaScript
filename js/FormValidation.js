const Username = document.querySelector("#username");
const Password = document.querySelector("#password");
const Msg = document.querySelector("#msg");

btn.addEventListener("click", function (e) {
  e.preventDefault();

  if (Username.value.length === 0 || Password.value.length === 0) {
    console.log("False");
    Msg.innerHTML = "<h4 class='error'>Please fill in all fields</h4>";

    setTimeout(() => document.querySelector(".error").remove(), 3000);
  } else {
    console.log("True");
    Form.submit();
  }
});