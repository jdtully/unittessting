function changeCurrentPlayer(currentPlayer) {
  if (currentPlayer === "blue") {
    currentPlayer = "red";
  } else {
    currentPlayer = "blue";
  }
  return currentPlayer;
}
module.exports = changeCurrentPlayer