# Projects related to DOM

## Project link

[click Here](https://stackblitz.com/~/github.com/Samuel100-web/javascript-learning)

## Project 1 Completed

```javascript
const buttons = document.querySelectorAll(".button")
const body = document.querySelector("body")

buttons.forEach(function(button){
    // console.log(button)
    button.addEventListener('click', function(e){
        // console.log(e)
        // console.log(e.target)
        if(e.target.id === "grey"){
            body.style.backgroundColor = e.target.id
        }
        else if(e.target.id === "white"){
            body.style.backgroundColor = e.target.id
        }
        else if(e.target.id === "blue"){
            body.style.backgroundColor = e.target.id
        }
        else if(e.target.id === "yellow"){
            body.style.backgroundColor = e.target.id
        }
        else if(e.target.id === "red"){
            body.style.backgroundColor = e.target.id
        }
        else if(e.target.id === "purple"){
            body.style.backgroundColor = e.target.id
        }
    })
});

```

```HTML Code
<body>
    <nav>
        <a href="/" aria-current="page">Home</a>
        <a href="https://github.com/Samuel100-web" target="_blank">Sam Github</a>
    </nav>
    <div class="canvas">
        <h2>Color Scheme Switcher</h2>
        <span class="button" id="grey"></span>
        <span class="button" id="white"></span>
        <span class="button" id="blue"></span>
        <span class="button" id="yellow"></span>
        <span class="button" id="red"></span>
        <span class="button" id="purple"></span>
        <h3>
            Try clicking on one of the colors above
            <span>to change the background color of this page</span>
        </h3>
    </div>
</body>
<script src="colorChanger.js"></script>
```

```CSS Code

body, h2, h3, nav, a {
    margin: 0;
    padding: 0;
    font-family: 'Arial', sans-serif;
}

/* Body styles */
body {
    background-color: #f0f0f0;
    color: #333;
    line-height: 1.6;
}

/* Navigation styles */
nav {
    background-color:rgb(198, 74, 226);
    padding: 15px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
}

nav a {
    color: white;
    text-decoration: none;
    padding: 10px 15px;
    border-radius: 5px;
    transition: background-color 0.3s ease;
    background-color: black;
}

nav a:hover {
    background-color: white;
    color: black
}

/* Canvas styles */
.canvas {
    text-align: center;
    padding: 50px 20px;
    background-color: black;
    border-radius: 10px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    margin: 20px auto;
    max-width: 600px;
}

.canvas h2 {
    font-size: 2.5em;
    margin-bottom: 20px;
    color:rgb(190, 11, 235);
}

.canvas h3 {
    font-size: 1.2em;
    color: white;
}

/* Button styles */
.button {
    display: inline-block;
    width: 50px;
    height: 50px;
    margin: 10px;
    border-radius: 50%;
    cursor: pointer;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

#grey {
    background-color: #7d7d7d;
}

#white {
    background-color: #ffffff;
    border: 2px solid #ccc;
}

#blue {
    background-color: #3498db;
}

#yellow {
    background-color: #f1c40f;
}

#red {
    background-color: #FF0000;
}

#purple {
    background-color: #800080;
}

.button:hover {
    transform: scale(1.1);
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
}
```

## Project 2 Completed

```JavaScript Code
const form = document.querySelector('form')

//this usecase will give you empty value so please not use out side the function

// const height = parseInt(document.querySelector("#height").value)
// const weight = parseInt(document.querySelector("#weight").value)

form.addEventListener('submit', function(e){
    e.preventDefault()
    const height = parseInt(document.querySelector("#height").value)
    const weight = parseInt(document.querySelector("#weight").value)
    const results = document.querySelector("#results")

    if(height === '' || height < 0 || isNaN(height))
    {
        results.innerHTML = `Plese give a valid Height ${height}`
    }
    else if(weight === '' || weight < 0 || isNaN(weight))
    {
        results.innerHTML = `Plese give a valid Weight ${weight}`
    }else
    {
        const bmi = (weight/ ((height * height)/10000)).toFixed(2)
        //show the result
        results.innerHTML = `<span>${bmi}</span>`
    }
})
```

```HTML Code
<body>
    <nav>
        <a href="/" aria-current="page">Home</a>
        <a href="https://github.com/Samuel100-web" target="_blank">Sam Github</a>
    </nav>
    <div class="container">
        <h1>BMI Calculator</h1>
        <form>
            <p><label>Height in CM:</label><input type="text" id="height"></p>
            <p><label>Weight in KG:</label><input type="text" id="weight"></p>
            <button>Calculate</button>
            <div id="results"></div>
            <div id="weight-guide">
                <h3>BMI Weight Guide</h3>
                <p>Under Weight = Less than 18.6</p>
                <p>Normal Range = 18.6 and 24.9</p>
                <p>Over Weight = Greater than 24.9</p>
            </div>
        </form>
    </div>
</body>
<script src="heightWeightCalculator.js"></>
```

```CSS Code
/* Reset some default styles */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Arial', sans-serif;
    background-color: #f4f4f4;
    color: #333;
    line-height: 1.6;
}

/* Navigation styles */
nav {
    background-color:rgb(198, 74, 226);
    padding: 15px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
}

nav a {
    color: white;
    text-decoration: none;
    padding: 10px 15px;
    border-radius: 5px;
    transition: background-color 0.3s ease;
    background-color: black;
}

nav a:hover {
    background-color: white;
    color: black
}

/* Container styles */
.container {
    max-width: 600px;
    margin: 50px auto;
    padding: 20px;
    background: black;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

h1 {
    text-align: center;
    margin-bottom: 20px;
    color: purple;
}

/* Form styles */
form {
    display: flex;
    flex-direction: column;
}

form p {
    margin-bottom: 15px;
}

label {
    font-weight: bold;
    margin-bottom: 5px;
    display: block;
    color: white;
}

input[type="text"] {
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 16px;
}

button {
    padding: 10px;
    background-color: purple;
    color: white;
    border: none;
    border-radius: 5px;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.3s;
}

button:hover {
    background-color: white;
    color: black
}

/* Results and weight guide styles */
#results {
    margin-top: 20px;
    font-size: 18px;
    text-align: center;
    color: white;
}

#weight-guide {
    margin-top: 30px;
    padding: 15px;
    background-color: #e7f3fe;
    border-left: 6px solid #2196F3;
}

#weight-guide h3 {
    margin-bottom: 10px;
    color: #2196F3;
}

#weight-guide p {
    margin: 5px 0;
}
```

# Project 3 Completed

```JavaScript Code
const clock = document.getElementById('clock')



setInterval(function(){
    let date = new Date()
    // console.log(date.toLocaleTimeString())
    clock.innerHTML = date.toLocaleTimeString()
}, 1000)
```

```HTML Code
<nav>
        <a href="/" aria-current="page">Home</a>
        <a href="https://github.com/Samuel100-web" target="_blank">Sam Github</a>
    </nav>
    <div class="container">
        <div id="banner"><span>Your Local Time</span></div>
        <div id="clock"></div>
    </div>
    <script src="digitalClock.js"></script>
```

```CSS Code
body {
    font-family: 'Arial', sans-serif;
    background-color: #282c34;
    color: #ffffff;
    margin: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
}

nav {
    position: absolute;
    top: 20px;
    left: 20px;
}

nav a {
    color: #61dafb;
    text-decoration: none;
    margin-right: 15px;
    font-size: 18px;
    transition: color 0.3s;
}

nav a:hover {
    color: #21a1f1;
}

.container {
    text-align: center;
}

#banner {
    font-size: 24px;
    margin-bottom: 20px;
    font-weight: bold;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}

#clock {
    font-size: 60px;
    font-weight: bold;
    background: linear-gradient(90deg, #ff7e5f, #feb47b);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: glow 1.5s infinite alternate;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 0 20px rgba(255, 126, 95, 0.5);
}

@keyframes glow {
    0% {
        text-shadow: 0 0 5px rgba(255, 126, 95, 0.7), 0 0 10px rgba(255, 126, 95, 0.5);
    }
    100% {
        text-shadow: 0 0 20px rgba(255, 126, 95, 1), 0 0 30px rgba(255, 126, 95, 0.7);
    }
}
```

## Project 4 Completed

```JavaScript Code
let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector("#subt");
const userInput = document.querySelector("#guessField");
const guessSlot = document.querySelector(".guesses");
const lastResult = document.querySelector(".lastResult");
const loworHi = document.querySelector(".loworHi");
const startOver = document.querySelector(".resultParas");

const p = document.createElement("p");

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
  submit.addEventListener("click", function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    // console.log(guess);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert("Plese Enter a valid Number");
  } else if (guess < 1) {
    alert("Please Enter More than 1");
  } else if (guess > 100) {
    alert("Please Enter your Number Less than 100");
  } else if (guess == "") {
    alert("Please Enter a Number");
  } else {
    prevGuess.push(guess);

    if (numGuess === 10) {
      displayGuess(guess);
      displayMessage(`Game Over. Random number was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === randomNumber) 
  {
    displayMessage(`You guessed it right!`);
    endGame();
  } else if (guess < randomNumber)
  {
    displayMessage(`Number is Tooooo Low`);
  }else if(guess > randomNumber)
  {
    displayMessage(`Number is tooo high`);
  }
}

function displayGuess(guess) {
  userInput.value = '';
  guessSlot.innerHTML += `${guess}, `;
  numGuess++;
  lastResult.innerHTML = `${11 - numGuess}`;
}

function displayMessage(message) {
  loworHi.innerHTML = `<h2>${message}</h2>`
}

function endGame() {
  userInput.value = ''; 
  userInput.setAttribute('disabled', '');
  p.classList.add('button')
  p.innerHTML = `<h2 id="newGame">Start New Game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

function newGame() {
  const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click', function(e){
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = []
    numGuess = 1
    guessSlot.innerHTML = ''
    lastResult.innerHTML = `${11 - guess}`;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);
    playGame = true;
  })
}

```

```HTML Code
<nav>
        <a href="/" aria-current="page">Home</a>
        <a href="https://github.com/Samuel100-web" target="_blank">Sam Github</a>
    </nav>
    <div id="wrapper">
            <h1>Number Guessing Game</h1>
            <p>Try and guess a randum number between 1 and 100.</p>
            <p>You have 10 attempts to guess the right number.</p>
            <br>
        <form class="form">
            <label for="guessField" id="guess">Guess a Number</label>
            <input type="text" id="guessField" class="guessField">
            <input type="submit" id="subt" value="Submit Guess" class="guessSubmit">        
        </form>
        <div class="resultParas">
            <p>Previous Guess: <span class="guesses"></span></p>
            <p>Guesses Remaining: <span class="lastResult">10</span></p>
            <p class="loworHi"></p>
        </div>
    </div>

    <script src="guessthenumber.js"></script>
```

```CSS Code
/* General Reset */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

/* Body Styles */
body {
    font-family: 'Arial', sans-serif;
    background-color: black;
    color: #fff;
}

/* Navigation Styles */
nav {
    background-color: gray;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 15px 0;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1000;
}

nav a {
    color: white;
    text-decoration: none;
    font-size: 18px;
    padding: 10px 15px;
    transition: background-color 0.3s, color 0.3s;
}

nav a:hover {
    background-color: #444;
    color: #ffcc00;
}

/* Wrapper Styles */
#wrapper {
    margin-top: 80px; /* To avoid content being hidden behind the fixed nav */
    text-align: center;
    padding: 20px;
}

h1 {
    font-size: 2.5em;
    margin-bottom: 20px;
    color: #fff;
}

p {
    font-size: 1.2em;
    margin-bottom: 15px;
}

/* Form Styles */
.form {
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    padding: 20px;
    display: inline-block;
}

label {
    font-size: 1.2em;
    margin-bottom: 10px;
    display: block;
}

input[type="text"] {
    width: 100%;
    padding: 10px;
    margin-bottom: 15px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 1em;
}

input[type="submit"] {
    background-color: #28a745;
    color: white;
    border: none;
    padding: 10px 15px;
    border-radius: 4px;
    font-size: 1em;
    cursor: pointer;
    transition: background-color 0.3s;
}

input[type="submit"]:hover {
    background-color: #218838;
}

/* Result Paragraphs Styles */
.resultParas {
    margin-top: 20px;
    font-size: 1.2em;
}

.resultParas p {
    margin: 5px 0;
}

.guesses {
    font-weight: bold;
    color: #007bff;
}

.lastResult {
    font-weight: bold;
    color: #dc3545;
}

.loworHi {
    font-weight: bold;
    color: #ffcc00;
}
```

