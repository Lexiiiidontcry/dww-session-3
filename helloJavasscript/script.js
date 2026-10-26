console.log ("Hello World!");

// we target the button  element//
//let = let's create a variable//
//html elements related to the text//
let button = document.querySelector("#button-name");
let inputName = document.querySelector("#input-name");

//html elements related to color//
let buttonColor = document.querySelector("#button-color");
let inputColor = document.querySelector("#input-color");

//html elements related to target//
let target = document.querySelector("#target");

console.log(button);


//we listent to the click on the button//
button.addEventListener("click", function() {

    //amd then we do something when the button is clicked//
    console.log("inputname.value");

    //we replace the content of the target with the one from the input//
    target.innerHTML = inputName.value;

})

// we listen to the click of the color button//
buttonColor.addEventListener("click", function () {
    //we get the color value and then we update the title color//
    
    target.style.color=inputColor.value;

 })


 /*
        ##############################

                 TO DO LIST

        ##############################
 */

//1 - create the variables to target the elements//
let buttonToDo = document.querySelector("#todo-button");
let inputToDo = document.querySelector("#todo-input");
let ToDo = document.querySelector("#toDo");

//2 - we listen to the click on the button//
buttonToDo.addEventListener("click", function() {
    //3 - we get the input value//
    let currentToDo = inputToDo.value;

    //4 - we create a list element//
    //we use the backticks (`) to create a literal template within a ;itteral template we can mix html and js//
    let newLiElement =`<li>${currentToDo}</li>` 

    //5 - we add it inside the ul element//
    ToDo.innerHTML = newLiElement;
})