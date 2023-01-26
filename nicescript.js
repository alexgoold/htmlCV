function MakeTextRed(){
    if (document.getElementById("FirstText").style.color == 'red'){
        document.getElementById("FirstText").style.color = 'blue'
        document.getElementById("button1").textContent = "Red"
    }
    else{
        document.getElementById("FirstText").style.color = 'red'
        document.getElementById("button1").textContent = "Blue"
    }
}