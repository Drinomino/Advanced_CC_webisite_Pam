let mySlider = document.getElementById("mySlider")

mySlider.addEventListener("input", readFromSlider)

function readFromSlider(){
    console.log(mySlider.value)
    let myCurrentValue = document.getElementById("current-value")
    myCurrentValue.textContent = mySlider.value
    localStorage.setItem("input" ,mySlider.value)  
}