console.info("Hello JS")
document.getElementById("myHeading").innerHTML = "Tyrese Fairweather";
document.querySelector("nav>ul>li").setAttribute("class", "currentPage");
//document.querySelector("nav ul li a").setAttribute("href", "https://www.google.co.uk");

let colourButtons = document.querySelectorAll(".colPicker");
console.dir(colourButtons);

for(let i=0; i < colourButtons.length; i++)
{
    colourButtons[i].style.backroundColor = "grey";
}

document.getElementById("myTestBtn").addEventListener("click", function(){
    console.info("hi i was clicked");
});

let redBtn = document.querySelector(".red");
redBtn.addEventListener("click", function(){
    document.body.setAttribute("class", "redBack");
})

let greenBtn = document.querySelector(".green");
greenBtn.addEventListener("click", function(){
    document.body.setAttribute("class", "greenBack");
})

let blueBtn = document.querySelector(".blue");
blueBtn.addEventListener("click", function(){
    document.body.setAttribute("class", "blueBack");
})

