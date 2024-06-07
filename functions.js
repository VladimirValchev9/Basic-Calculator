const screen = document.getElementById("display");

function addToDisplay(symbol){
    screen.value+=symbol;
}

function cleanDisplay(){
    screen.value="";
}

function calculate(){
    screen.value=eval(display.value);
}