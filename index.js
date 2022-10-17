const card = document.getElementById("card");
const body = document.querySelector("body");
const randomize = document.getElementById("randomize");
const myNumArray = []; //this will be filled later.... these are numbers
const numbox = document.querySelectorAll("div .numbox"); // this is is the index
//need to find a way to target individual index of created cards
//made a card that will generate on load
const generateCard = () => {
  for (let i = 0; i < 76; i++) {
    const numbox = document.createElement("div");
    numbox.classList = "numbox";
    numbox.innerText = i + 1;
    myNumArray.push(numbox.innerText); //I have to push the info into an array in order to reach it again
    card.appendChild(numbox);
  }
  //console.log(myNumArray); just checking
};
//display called numbers
const calledNumDisplay = () => {
  const tracker = document.getElementById("tracker");
  //const linebreak = document.createElement("br");
  for (let i = 0; i < calledArray.length; i++) {
    tracker.innerText = calledArray.join("\n");
  }
};
//just having fun, trying to display the called numbers
const display = document.querySelector("input");
const calledArray = [];

const displayLastNum = (newNum) => {
  display.value = newNum;
  calledArray.push(newNum);
  calledNumDisplay();
  return newNum;
};
console.log(calledArray);

const doTheseMatch = () => {
  let output = calledArray.filter(function (obj) {
    return numbox.indexOf(obj) - 1;
  });
  for (let i = 0; i < numbox.length; i++) {
    if (output[i - 1] == numbox[i]) {
      numbox[i].classList.add("highlight");
    }
  }
  console.log(output);
};

//creating a random number to call later
const getRandomNum = () => {
  let newNum = Math.floor(Math.random() * 76) + 1;
  if (!calledArray.includes(newNum)) {
    displayLastNum(newNum);
    doTheseMatch();
    //return newNum;
  } else if (calledArray.length < 76) {
    return getRandomNum();
  } else {
    //would like to display the end of num to user
    console.log("no more num");
  }
};

//const match = () => {
//};

//Event Listeners
randomize.addEventListener("click", getRandomNum);
//randomize.addEventListener("click", match);
//things that happen as soon as loaded
window.onload = () => {
  generateCard();
  console.log(numbox);
};
