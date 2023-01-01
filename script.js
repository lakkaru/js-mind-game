//enabling strict mode
"use strict";
//creating a array for images
const imageArray = [
  { name: "bird", image: "images/bird.png" },
  { name: "bunny", image: "images/bunny.png" },
  { name: "fox", image: "images/fox.png" },
  { name: "lion", image: "loin/bird.png" },
  { name: "mouse", image: "images/mouse.png" },
  { name: "owl", image: "images/owl.png" },
  { name: "bird", image: "images/bird.png" },
  { name: "bunny", image: "images/bunny.png" },
  { name: "fox", image: "images/fox.png" },
  { name: "lion", image: "loin/bird.png" },
  { name: "mouse", image: "images/mouse.png" },
  { name: "owl", image: "images/owl.png" },
];
const choosenCards = [];

//assigning images to grid cards
const grid = document.querySelector("#grid");

//suffling the images
imageArray.sort(() => 0.5 - Math.random());
// console.log(imageArray);

function createGrid() {
  imageArray.forEach((image, index) => {
    let card = document.createElement("img");
    card.setAttribute("src", "images/question.jpeg");
    card.setAttribute("id", index); //what is data-id?
    card.setAttribute("class", "image");
    card.addEventListener("click", flipCard);
    grid.appendChild(card);
  });
}
createGrid();

//flipping card to image
function flipCard() {
  const cardId = this.getAttribute("id");
  choosenCards.push(cardId);
  //   console.log(choosenCards);
  this.setAttribute("src", imageArray[cardId].image);
}
