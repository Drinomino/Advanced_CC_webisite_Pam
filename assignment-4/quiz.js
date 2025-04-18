let input1 = localStorage.getItem("input1")
let val1 = document.getElementById("val1")
val1.textContent = input1

function goNext() {
  
  window.location.href = 'start.html';

}
// const images = {
//   corgi: "corgi.webp",
//   goldenretriever: "golden.webp",
//   bordercollie: "bordercollie.webp",
//   doberman: "doberman.jpg",
//   Yorkie: "yorki.webp"
// };

const score = {
    corgi: 0,
    goldenretriever: 0,
    bordercollie: 0,
    doberman: 0,
    Yorkie: 0
  };
  
  const results = {
    corgi: "You're a silly british corgi lad! Happy and silly.",
    goldenretriever: "You’re Golden Retriever! You enjoy the simpler things in life, love your family, and stay loyal to those around you.",
    bordercollie: "You’re a Border Collie – You are driven by your work and love grass.",
    doberman:"You’re a Doberman. You come off as intimidating, and enjoy the darker things in life.",
    Yorkie:"You’re a Yorkie. You love to be pampered, and all things pretty and sheek."
  };
  
  function addScore(type) {
    score[type] += 1;
    console.log(score); // You can remove this in final version
  }
  
  function showResult() {
    const topResult = Object.keys(score).reduce((a, b) => score[a] > score[b] ? a : b);
    const resultText = results[topResult];
    // const imageUrl = images[topResult];

  //  localStorage
  const quizResult = {
    type: topResult,
    description: resultText,
    date: new Date().toISOString()
  };
  
    document.getElementById('quiz').style.display = 'none';
    document.getElementById('result').style.display = 'block';
    document.getElementById('result').textContent = resultText;
    // document.getElementById('result-image').src = imageUrl;
    document.getElementById('nextBtn').style.display = 'block';
  }
  
  function handleClick(button) {
    button.classList.add('clicked');
  }