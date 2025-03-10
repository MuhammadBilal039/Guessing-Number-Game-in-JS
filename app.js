let randomNumber = Math.floor(Math.random() * 10) + 1;
// Math.floor() always rounds a number down to the nearest integer,
// while Math.round() rounds a number to the nearest integer, either up or down, depending on the decimal part

let userGuessNumber = 0;
let chances = 0;

while (userGuessNumber !== randomNumber) {
  userGuessNumber = Number(prompt('Enter Guessing Number between 1 and 10'));
  chances++;

  if (
    isNaN(userGuessNumber) ||
    userGuessNumber < 0 ||
    userGuessNumber === 0 ||
    userGuessNumber > 10
  ) {
    alert('Please Enter the valid guessing number between 1 and 10');
    continue;
  } else if (userGuessNumber > randomNumber) {
    alert('You Guess the Number Too High! Try Again');
  } else if (userGuessNumber < randomNumber) {
    alert('You Guess the Number Too Low! Try Again');
  } else {
    alert(`Congratulation! You Guess the Number in ${chances} chances`);
  }
}
alert('Thank You for Playing!');
