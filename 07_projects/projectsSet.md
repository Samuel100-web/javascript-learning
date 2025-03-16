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

