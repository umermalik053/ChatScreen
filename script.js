

let messages = document.getElementsByClassName("messagelist")[0];
let input = document.getElementById("message");
let button = document.getElementById("send");


let userPrompt = prompt("Enter Your Name");
document.getElementById("userName").innerHTML = userPrompt;






// const previousmessage = [
//   {
//     key: "user-message",
//     text: "Hello!",
//   },
//   {
//     key: "bot",
//     text: "Hi!",
//   },
//   {
//     key: "user-message",
//     text: "How are you!",
//   },
//   {
//     key: "bot",
//     text: "I am Fine, What About you",
//   },
// ];

// for (let i = 0; i < previousmessage.length; i++) {
//   messages.innerHTML += `<li class=${previousmessage[i].key}>${previousmessage[i].text}</li>`;
// }

function sendmessage() {
  messages.innerHTML += `<li class="user-message">${input.value}</li>`;
  setTimeout(reply(), 1000);
  input.value = "";
}

button.addEventListener("click", sendmessage);

function reply() {
  var user = input.value;
  user = user.toLowerCase();
  user = user.replace(/\s+/g, "");
  console.log(user);
  if (user == "hello" || user == "hi") {
    messages.innerHTML += `<li class="bot">Hello! How are you</li>`;
  } else if (user == "salam" || user == "assalamualikum" || user == "Adaab") {
    messages.innerHTML += `<li class="bot">Walikum_Salam! kia Haal hai aap kai janab</li>`;
  } else if (user == "iamfine" || user == "iamgood") {
    messages.innerHTML += `<li class="bot">Ohh great What's your Name?</li>`;
  } else if (
    user == "maitheek" ||
    user == "maibilkultheek" ||
    user == "theek"
  ) {
    messages.innerHTML += `<li class="bot">achaa hai aap ka name kia hai janab</li>`;
  } else if (
    user == "umer" ||
    user == "wasi" ||
    user == "hasnain" ||
    user == "fareed"
  ) {
    messages.innerHTML += `<li class="bot">Beautiful Name! what is your Age? </li>`;
  } else if (user == "hamza" || user == "tahir" || user == "faizan") {
    messages.innerHTML += `<li class="bot">mast name hai wesy kia age hai aap ki</li>`;
  } else if (user > 0 && user < 18) {
    messages.innerHTML += `<li class="bot">you are a child </li>`;
  } else if (user >= 18) {
    messages.innerHTML += `<li class="bot">you are adult</li>`;
  } else {
    const dummytext = [
      {
        key: "bot",
        text: "I am sorry I don't understand what you are saying. Please try again!",
      },
      {
        key: "bot",
        text: "aap china chalay jain mujhay aap ki bath samjh nahi arahi",
      },
      {
        key: "bot",
        text: "chalo bht khel lia ab jao kam karo apna",
      },
      {
        key: "bot",
        text: "Farigh ho kia bhai",
      },
      {
        key: "bot",
        text: "mujhay samjh nahi arahi aap ki bath byy",
      },
      {
        key: "bot",
        text: "mujhay nend arahi hai may chala sonay",
      },
    ];

    let random = Math.round(Math.random() * dummytext.length);

    messages.innerHTML += `<li class=${dummytext[random].key}>${dummytext[random].text}</li>`;
  }
}
