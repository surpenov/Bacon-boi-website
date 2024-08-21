function myFunction() {
    document.getElementById("demo").style.fontSize = "30px"; 
    document.getElementById("demo").style.color = "white";
    document.getElementById("demo").style.backgroundColor = "#12391e";        
}

  function myFunction2() { 
    document.getElementById("demo2").innerHTML = "I live in 11 Moffitt Place, Mangere East, Auckland";
}


  function myFunction3Answer() {
    document.getElementById("demo3").innerHTML = "2 buddy";
}

function myFunction3Revert() {
    document.getElementById("demo3").innerHTML = "What's 1+1?";
}  


const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'indigo'];
let colorIndex = 0;

function changeColor() {
  const button = document.getElementById("colorButton");

    // Change to the next color in the array
    colorIndex = (colorIndex + 1) % colors.length;
    button.style.backgroundColor = colors[colorIndex];
}