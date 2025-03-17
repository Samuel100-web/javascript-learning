// Generate a random color

const randomColor = function(){
    const hax = "0123456789ABCDEF"
    let color = "#"
    for(let i = 0; i < 6; i++){
        color += hax[Math.floor(Math.random() * 16)]
    }
    return color;
}
let intervalId;
const startChangingColor = function(){  

    changeBgColor = function(){
        document.body.style.backgroundColor = randomColor()
    }    
    if(!intervalId){
        intervalId = setInterval(changeBgColor, 1000) 
    }
};

const stopChangingColor = function(){
    clearInterval(intervalId)
    intervalId = null;
}

document.querySelector('#start').addEventListener('click', startChangingColor)
document.querySelector('#stop').addEventListener('click', stopChangingColor)