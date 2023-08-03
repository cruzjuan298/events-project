const divRef = document.querySelector('div'); //div reference
const buttonsRef = document.querySelectorAll("button"); //button refrences. Multiple buttons, have to use a for loop to access all

//for loop to access all the button through buttonsRef
for (const button of buttonsRef){
    //event listener with the action of click and when done so, a function is called, using es6 syntax, so that the div background color is matched with the corresponding id.
    button.addEventListener("click", () => {
        divRef.style.backgroundColor = button.id;
        divRef.innerHTML = button.id;
        //colorless is not a color, so an exception has to be made
        if (button.id == "colorless"){
            divRef.style.backgroundColor = "white";
        } 
    })
}
