const card = document.getElementById("card");
const body = document.querySelector("body");
const randomize = document.getElementById("randomize");
const myNumArray = []; //this will be filled later

//made a card that will generate on load
const generateCard = () => {
  for (let i = 0; i < 76; i++) {
    const numbox = document.createElement("div");
    numbox.className = "numbox";
    numbox.innerText = i + 1;
    myNumArray.push(numbox.innerText); //I have to push the info into an array in order to reach it again
    card.appendChild(numbox);
  }
  //console.log(myNumArray); just checking
};

//just having fun, trying to display the called numbers

const displayLastNum = (newNum) => {
  const display = document.createElement("div");
  display.className = "display";
  display.innerText = newNum;
  body.appendChild(display);
};

///????let numboxes = document.querySelectorAll(".numbox"); how are there no nodes here?

//creating a random number to call later
const getRandomNum = () => {
  let newNum = Math.floor(Math.random() * 76) + 1;

  for (let i = 0; i < myNumArray.length; i++) {
    if (newNum === myNumArray.indexOf(myNumArray[i])) {
      numboxes.classList.add("highlight");
    }
  }
  displayLastNum(newNum);
};

//const match = () => {
//};

//Event Listeners
randomize.addEventListener("click", getRandomNum);
//randomize.addEventListener("click", match);
//things that happen as soon as loaded
window.onload = () => {
  generateCard();
};
