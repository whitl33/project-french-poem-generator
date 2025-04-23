function displayPoem(response){
new Typewriter('#poem', {
  strings: response.data.answer,
  autoStart: true,
  cursor:"",
  delay:5

});
}


function poemGenerate(event){
event.preventDefault();
let instructionsInput = document.querySelector("#user-instructions");
let apiKey = "o55206ae8847051e1ff334btaf13bafe";
let prompt = `Generate a short french poem about ${instructionsInput.value}`;
let context = "user instructions: You are a romantic poem expert and love to write short poems. Your mission is to generate a 4 line poem in basic HTML with a <br/> after each line. Do not show the html before or after the poem. Do not add a title. Just the poem. Sign the poem  with 'SheCodes AI' inside a <strong> element at the end of the poem only. Make sure to follow the user instructions";

let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

axios.get(apiUrl).then(displayPoem);


}


let poemFormElement= document.querySelector("#poem-generator");
poemFormElement.addEventListener("submit",poemGenerate);