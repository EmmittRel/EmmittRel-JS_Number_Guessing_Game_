// For Generating the Numbers
function generate() {
    required_number = Math.round(10 * Math.random());
    console.log("The number is: " + required_number);
    h3 = document.querySelector("#sub_head");
    // InnerHTML for allowing reading and replacing everything within a given DOM element.
    h3.innerHTML = "Try to guess the number between 0 and 10.";
  }

  // For Checking the validity
  function check() {
    var guess = document.querySelector("#input_number").value;

    if (guess == "") {
      h3.innerHTML = "Type a guess in the box below!";
    } else {
      if (required_number == guess) {
        h3.innerHTML = "Awesome! That's Bullseye! Try Next Number";
      } else if (guess < required_number) {
        h3.innerHTML = "Too low...guess higher!";
      } else if (guess > required_number) {
        h3.innerHTML = "Too high...guess lower!";
      }
    }
  }

  // If Quit Button is pressed then it shows the required number for guessing
  function reveal() {
    h3.innerHTML =
      "Too bad! The number was " + required_number + ". Try Another Number!";
  }