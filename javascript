let hunger = 100;
let sleep = 100;
let fun = 100;
 
const hungerBar = document.querySelector(".hunger");
const sleepBar = document.querySelector(".sleep");
const funBar = document.querySelector(".fun");
const message = document.getElementById("message");
 
const foodBtn = document.getElementById("food");
const sleepBtn = document.getElementById("sleep");
const playBtn = document.getElementById("play");
 
const chatBox = document.getElementById("chat-box");
const chatInput = document.getElementById("chat-input");
const sendBtn = document.getElementById("send-btn");
 
function update() {
  hungerBar.style.width = hunger + "%";
  sleepBar.style.width = sleep + "%";
  funBar.style.width = fun + "%";
 
  hungerBar.classList.toggle("low", hunger < 30);
  sleepBar.classList.toggle("low", sleep < 30);
  funBar.classList.toggle("low", fun < 30);
 
  if (hunger < 30) {
    message.textContent = "Ik heb honger";
  } else if (sleep < 30) {
    message.textContent = "Ik ben moe";
  } else if (fun < 30) {
    message.textContent = "Ik wil spelen";
  } else {
    message.textContent = "Het gaat goed";
  }
}
 
foodBtn.onclick = () => {
  hunger += 5;
  if (hunger > 100) hunger = 100;
  update();
};
 
sleepBtn.onclick = () => {
  sleep += 5;
  if (sleep > 100) sleep = 100;
  update();
};
 
playBtn.onclick = () => {
  fun += 5;
  if (fun > 100) fun = 100;
  update();
};
 
sendBtn.onclick = () => {
  if (chatInput.value === "") return;
 
  chatBox.innerHTML += "<p>Jij: " + chatInput.value + "</p>";
  chatInput.value = "";
 
  setTimeout(() => {
    chatBox.innerHTML += "<p>Tamagotchi: Hoi!</p>";
  }, 500);
};
 
setInterval(() => {
  hunger--;
  sleep--;
  fun--;
  if (hunger < 0) hunger = 0;
  if (sleep < 0) sleep = 0;
  if (fun < 0) fun = 0;
  update();
}, 2000);
 
update();
 
