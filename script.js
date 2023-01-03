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

//Getting number of correctly selected cells
let correctlySelected = 0;
let selectedImages = [];
let selectedCards = [];
let score = 0;
// Shuffling images
imageArray.sort(() => 0.5 - Math.random());

// Creating grid cards for images in imageArray
function createGrid() {
  imageArray.forEach((image, index) => {
    let card = document.createElement("img");
    card.setAttribute("src", "images/question.jpeg"); // Populating the cards with question image
    card.setAttribute("id", index); //what is data-id?
    card.setAttribute("class", "image");
    card.addEventListener("click", flipCard); // Adding click event listnert to card
    grid.appendChild(card);
  });
}
createGrid();

function flipCard() {
  const cardId = this.getAttribute("id"); // Getting clicked card id
  this.setAttribute("src", imageArray[cardId].image); // Assigning image to the card from image array
  this.removeEventListener("click", flipCard); // Disable click event on selected card
  selectedImages.push(imageArray[cardId].name);
  selectedCards.push(cardId); // Getting clicked image names  from image array to selectedImages
  //  console.log(selectedCards);

  // Compairing images when two images are clicked
  if (selectedImages.length == 2) {    // why use ===
    let image1 = selectedImages[0];
    let image2 = selectedImages[1];
    // If images are matched, assign tick image to both cards

    if (image1 == image2) {
      // .5 second delay for image memorizing
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
        document.querySelector("#score").innerHTML =
          "Your score is " + score + ".";
        correctlySelected += 2;
        // console.log(correctlySelected);

        if (correctlySelected == 12) {
          document.getElementById("play_again").style.display = "block";
        }
      }, 500);
    } else {
      // Else wait 0.5 second and assign question mark image again
      setTimeout(function () {
        selectedCards.forEach((cardId) => {
          let selectedCard = document.getElementById(cardId);
          selectedCard.setAttribute("src", "images/question.jpeg");
          selectedCard.addEventListener("click", flipCard); // Enable click event on cards
        });
        // Decrease score by 2
        if (score != 0) {
          score += -2;
        }
        document.querySelector("#score").innerHTML =
          "<span>Your score is " + score + "</span>";
        //initializing selected arrays
        selectedImages.length = 0;
        selectedCards.length = 0;
      }, 500);
    }
  }
}

// Reloading the page
function reload() {
    location.reload();
}
