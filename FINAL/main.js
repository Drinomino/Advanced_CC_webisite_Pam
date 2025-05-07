let myDogBtn = document.getElementById("getDogBtn")
myDogBtn.addEventListener("click", getDogBtn)



async function getDogBtn(){
    try{
    console.log("random dog funtion")
    let response = await fetch("https://dog.ceo/api/breeds/image/random")
    //await has api info load before code running to next line

    console.log(response)

    let data = await response.json()
    let imgUrl = data.message
    console.log(imgUrl)

    let imgElement = document.getElementById("dogImg")
    imgElement.src = imgUrl
    }
    catch(error){
    console.log(error)
    let erMsg = document.getElementById("errorMsg")
    erMsg.textContent = "Sorry, the system is down. Try again Soon!"
    }

    
    
}