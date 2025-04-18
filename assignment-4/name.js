
let userInput = document.getElementById("inputBox")

let myButton = document.getElementById("myButton")
myButton.addEventListener("click",buttonClicked)

function buttonClicked(){
    console.log('user clicked button')
    console.log(userInput.value)
    localStorage.setItem("input1",userInput.value)
}

