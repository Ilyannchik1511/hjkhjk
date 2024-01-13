
// let user = {
//   name: "",
//   age: "",
//   city: "",
//   email: "",
//   number: "",
// };


let result = document.getElementsByClassName("result")[0];
let consoleInput = document.querySelector("#input");

let mode = "";

consoleInput.addEventListener("keydown", startApp);

// All comamnd 
function startApp(event) {
  // here start create commands 
  if (event.keyCode === 13) {
    // vilid commands
    if (consoleInput.value.trim() === "$start") {
      mode = "start"
      result.textContent = "Let's begin!";
      setTimeout(() => {
        result.textContent = " ";
      consoleInput.value = " ";
      }, 600);
    } else if (consoleInput.value.trim() === "$help" && mode === "start") {
      let commands = document.createElement("pre");
      const result = document.querySelector(".result");
      commands.classList.add("command__item");
      result.textContent = " ";
      consoleInput.value = " "
      commands.innerHTML = `
        <div style="display: flex; flex-direction: column; gap: 6px;"> 
        <div class="command__item" style="display: flex; gap: 9px; align-items: center;  margin: 1px; padding: 0;"><span class="command__item-span" style="font-size: 19px; font-weight: 600; color: #fff;">$start</span>Start the project</div>
        <div class="command__item" style="display: flex; gap: 9px; align-items: center;  margin: 1px; padding: 0;"><span class="command__item-span" style="font-size: 19px; font-weight: 600; color: #fff;">$help</span>To view the full list of commands</div>
        <div class="command__item" style="display: flex; gap: 9px; align-items: center;  margin: 1px; padding: 0;"><span class="command__item-span" style="font-size: 19px; font-weight: 600; color: #fff;">$clear</span>Clear the line and the result</div>
        <div class="command__item" style="display: flex; gap: 9px; align-items: center;  margin: 1px; padding: 0;"><span class="command__item-span" style="font-size: 19px; font-weight: 600; color: #fff;">$cls</span>This is a short clear command</div>
        <div class="command__item" style="display: flex; gap: 9px; align-items: center;  margin: 1px; padding: 0;"><span class="command__item-span" style="font-size: 19px; font-weight: 600; color: #fff;">$getIP</span>Get my IP address</div>
        </div>
      `;
      
      result.appendChild(commands);
    } else if (consoleInput.value.trim() === "$getIP" && mode === "start") {
      const ipInfoApi = 'https://ipinfo.io/json';

      fetch(ipInfoApi)
        .then(response => response.json())
        .then(data => {
        result.textContent = 'IP Address: ' + Math.floor(Math.random() * 256) + '.' +
         Math.floor(Math.random() * 256) + '.' +
         Math.floor(Math.random() * 256) + '.' +
         Math.floor(Math.random() * 256); // data.ip;
      consoleInput.value = "";
        })
        .catch(error => console.error('Error fetching IP:', error));
    } else if (consoleInput.value.trim() === "$clear" || consoleInput.value.trim() === "$cls" && mode === "start") {
      consoleInput.value = ""
      result.textContent = " ";
    } else {
      setTimeout(() => {
        notCorrectCommand()
      }, 100);
    }
}
}
// Error command 
function notCorrectCommand(event) {
  result.textContent = "Not correct command!";
  setTimeout(() => {
    result.textContent = "";
  consoleInput.value = "";
  event.prevent
  }, 3000);
}



// function generateCard() {
//   let card = document.createElement("div");
//   card.classList.add("card");
//   let name = document.createElement("h2");
//   name.classList.add("card__name");
//   name.textContent = "Name: " + user.name;
//   let age = document.createElement("h3");
//   age.classList.add("card__age");
//   age.textContent = "Age: " + user.age;
//   let city = document.createElement("h3");
//   city.classList.add("card__city");
//   city.textContent = "City: " + user.city;
//   let email = document.createElement("h3");
//   email.classList.add("card__email");
//   email.textContent = "Email: " + user.email;
//     let number = document.createElement("h3");
//     number.classList.add("card__number");
//     number.textContent = "Number: " + user.number;
//   card.appendChild(name);
//   card.appendChild(email);
//   card.appendChild(number);
//   card.appendChild(city);
//   card.appendChild(age);
//   result.appendChild(card);
// }

// function saveCard() {
//   localStorage.setItem("users", JOSN.stringify(user));
// }

// function clearUserData() {
//   user = {
//     name: "",
//     age: "",
//     city: "",
//     email: "",
//     number: "",
//   };
// }


