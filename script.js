//enabling strict mode
"use strict";
// creating imageArray for cards
const imageArray = [
  { name: "bird", image: "images/bird.png" },
  { name: "bunny", image: "images/bunny.png" },
  { name: "fox", image: "images/fox.png" },
  { name: "lion", image: "images/lion.png" },
  { name: "mouse", image: "images/mouse.png" },
  { name: "owl", image: "images/owl.png" },
  { name: "bird", image: "images/bird.png" },
  { name: "bunny", image: "images/bunny.png" },
  { name: "fox", image: "images/fox.png" },
  { name: "lion", image: "images/lion.png" },
  { name: "mouse", image: "images/mouse.png" },
  { name: "owl", image: "images/owl.png" },
];
console.log(imageArray);

//Getting grid
const grid = document.querySelector("#grid");

// Shuffling images
imageArray.sort(() => 0.5 - Math.random());
// console.log(imageArray);

// Creating grid cards for images in imageArray
// Populating the cards with question image
// Adding click event listnert to card
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

// Getting clicked card id
// Assigning image to the card from image array
// Disable click event on selected card
// Getting clicked image names  from image array to selectedImages
let selectedImages = [];
let selectedCards = [];
let score = 0;
function flipCard() {
  const cardId = this.getAttribute("id");
  this.setAttribute("src", imageArray[cardId].image);
  this.removeEventListener("click", flipCard);
  selectedImages.push(imageArray[cardId].name);
  selectedCards.push(cardId);
  //   console.log(selectedImages);
  console.log(selectedCards);

  // Compairing images when two images clicked
  if (selectedImages.length == 2) {
    // why use ===
    let image1 = selectedImages[0];
    let image2 = selectedImages[1];
    // If images are matched, assign tick image to both cards
    //Disable clicking
    if (image1 == image2) {
      //   console.log("matched");
      // .5 second delay
      setTimeout(function () {
        selectedCards.forEach((cardId) => {
          let selectedCard = document.getElementById(cardId);
          selectedCard.setAttribute("src", "images/tick.png");
        });
        //initializing selected arrays
        selectedImages.length = 0;
        selectedCards.length = 0;
        // Increase score by 100/6
        score += Math.round(100 / 6);
        document.querySelector("#score").innerHTML = "<span>Your score is " + score +"</span>";
      }, 500);
    } else {
      setTimeout(function () {
        selectedCards.forEach((cardId) => {
          let selectedCard = document.getElementById(cardId);
          selectedCard.setAttribute("src", "images/question.jpeg");
          selectedCard.addEventListener("click", flipCard);
          
        });
        // Decrease score by 2
        if (score!=0) {
            score += -2;
          }
        document.querySelector("#score").innerHTML = "<span>Your score is " + score +"</span>";
        //initializing selected arrays
        selectedImages.length = 0;
        selectedCards.length = 0;
      }, 500);
    }
  }
}

// Else wait One second and assign question mark image again
// Enable click event on cards
