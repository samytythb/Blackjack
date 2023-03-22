let sum = 0;
let message = "";
let hasBlackJack = false;
let isAlive = false;
let messageEl = document.getElementById("message-el");
let cardEl = document.getElementById("card-el");
let sumEl = document.getElementById("sum-el");
let cards = [];
let player = {
  name: "Minh Duc",
  chips: 200,
};
let playerEl = document.getElementById("player-el");
playerEl.textContent = player.name + ": $" + player.chips;
function randomCard() {
  let newCard = Math.floor(Math.random() * 13 + 1);
  if (newCard > 10) {
    return 10;
  } else if (newCard === 1) {
    return 11;
  } else {
    return newCard;
  }
}
function createCard() {
  if (isAlive === true && hasBlackJack === false) {
    let card = randomCard();
    sum += card;
    cards.push(card);
    renderGame();
  }
}
function startGame() {
  isAlive = true;
  let firstCard = randomCard();
  let secondCard = randomCard();
  cards = [firstCard, secondCard];
  sum = firstCard + secondCard;
  renderGame();
}
function renderGame() {
  cardEl.textContent = "Card : ";
  for (let idx = 0; idx < cards.length; idx++) {
    cardEl.textContent += cards[idx] + " ";
  }
  sumEl.textContent = "Sum : " + sum;
  if (sum <= 20) {
    message = "Do you want to draw a new card?";
  } else if (sum === 21) {
    message = "You're got Blackjack!";
    hasBlackJack = true;
  } else {
    message = "You're out the game!";
    isAlive = false;
  }
  messageEl.textContent = message;
}
