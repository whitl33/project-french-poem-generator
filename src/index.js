function poemGenerate(event){
event.preventDefault();


new Typewriter('#poem', {
  strings: "Sous le pont Mirabeau coule la Seine, Et nos amours.",
  autoStart: true,
  cursor:"",
  delay:5

});
}


let poemFormElement= document.querySelector("#poem-generator");
poemFormElement.addEventListener("submit",poemGenerate);