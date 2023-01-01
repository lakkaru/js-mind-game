//enabling strict mode
"use strict"
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

//assigning images to grid cards
const grid = document.querySelector("#grid");

function createGrid() {
  imageArray.forEach((image, index) => {
    let card = document.createElement("img");
    card.setAttribute("src", "images/question.jpeg");
    card.setAttribute("id", index); //what is data-id?
    card.setAttribute("class", "image");
    grid.appendChild(card);
  });
}
createGrid();

