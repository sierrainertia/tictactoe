// store game status
const gameStatus = document.querySelector(".gameStatus");

// variable to store games state active or inactive
let gameActive = true;

//variable to store current player
let currentPlayer = "X";

// store game state
let gameState = ("", "", "", "", "", "", "", "", "");

// messages the player might recieve
const winnerMessage = () => `${currentPlayer} Kick all the butt and WON!`;
const drawMessage = () => `Better play again, it's DRAW`;
const currentPlayerTurn = () => `${currentPlayer} GOOOOOO it's your turn!!!`;

// set message to let players know whose turn it is
statusDisplay.innerHTML = currentPlayerTurn();
function handleCellPlayed() {}
function handlePlayerChange() {}
function handleResultValidation() {}
function handleCellClick(clickedCellEvent) {
  // save clicked cell
  const clickedCell = clickedCellEvent.target;
  //  use cell index to find where cell is on grid
  const clickedCellIndex = parseInt(
    clickedCell.getAttribute("data-cell-index")
  );

  //   check if cell has already been used
  if (gameState[clickedCellIndex] !== "" || !gameActive) {
    return;
  }

  // if the cell isn't taken/game not active than continue on with move
  handleCellPlayed(clickedCell, clickedCellIndex);
  handleResultValidation();
}
function handleRestartGame() {}

//add event listener to cells and restart button
document
  .querySelectorAll(".cell")
  .forEach((cell) => cell.addEventListener("click", handleCellClick));
document
  .querySelector(".gameRestart")
  .addEventListener("click", handleRestartGame);
