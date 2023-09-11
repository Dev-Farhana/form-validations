const name = document.getElementById('name');
const password = document.getElementById('password');

const form = document.getElementById('form');
const errorInp = document.getElementById('errorInp');
const errorPass = document.getElementById("errorPass");

form.addEventListener("submit", (e) => {
  let msg = [];
  if(name.value === "" || name.value === null){
    msg.push("Name is required! ");
    errorInp.style.display = "block";
  }

    if(password.value.length <= 6){
    msg.push("Password must be longer than 6 characters.");
    }

    if(password.value.length >= 15){
        msg.push("Password must be less than 16 characters.");
    }

    if(password.value === "password"){
        msg.push("Password can not be set as 'password' ");
    }
    
  if(msg.length > 0) {
        e.preventDefault()
        errorInp.innerHTML = `<span class="emoji">&#128530;</span> ${msg.join(", ")}`;
        errorPass.innerHTML= `<span class="emoji">&#x1F620;</span> ${msg.join(", ")}`;
   }
    
})