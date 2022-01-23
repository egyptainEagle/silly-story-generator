const langs = document.querySelector("input[name='ukus']");
const generateBtn = document.querySelector(".randomize");
const storyP = document.querySelector(".story");
const customNameInput = document.getElementById("customname");
const nameToLookFor = document.getElementById("customvar");
let   nameInput = `Florence|Florence Nightingale(?= )`;
let nameSearcher = new RegExp (`${nameInput}`,"g");

// Intialize:
{
nameToLookFor.value = "Florence OR Florence Nightingale";
customNameInput.value = "Lamb Woman";

}

function Generate(){
 //Checks for custom name:
  if (customNameInput.value.length !== 0){
     storyP.textContent = storyP.textContent.replace(nameSearcher,customNameInput.value);
  }
 console.log(nameInput)
}
generateBtn.addEventListener("click", Generate);
function changeCustomVar(){
 nameInput = nameToLookFor.value;
 nameSearcher = new RegExp (`${nameInput}(?= )`,"g");
}
nameToLookFor.addEventListener("keyup", changeCustomVar)


