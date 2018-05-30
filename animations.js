var partyButton = document.getElementById("partyButton");
var allTheThings = document.getElementsByClassName("allTheThings");

function partyTime() {
    for (var i = 0; i < allTheThings.length; i++) {
        allTheThings[i].style.visibility = "visible";
    }
}
partyButton.addEventListener('click', partyTime);



var manattee = document.getElementById("manattee");
var xcord = 800;
var ycord = 250;
var xmov = 2;
var ymov = 1;
var id = setInterval(moveManattee, 2);

function moveManattee() {
    if (xcord > 1050 || xcord < 180) {
        xmov = -xmov;
    }
    if (ycord > 440 || ycord < 130) {
        ymov = -ymov;
    }
    xcord = xcord + xmov;
    ycord = ycord + ymov;
    manattee.style.top = ycord + 'px';
    manattee.style.left = xcord + 'px';

}

var border = document.getElementById("container");
var id = setInterval(changeBorderColor, 5000);

function changeBorderColor() {
    border.style.borderBottomColor = "purple";
    border.style.borderLeftColor = "blue";
    border.style.borderTopColor = "green";
    border.style.borderRightColor = "yellow";

}

var discoball = document.getElementById("discoBall");
var container = document.getElementById("container");
var movemouse = document.getElementById("movemouse");
container.addEventListener("mousemove", moveDiscoBall);

function moveDiscoBall(event) {
    var xPosition = event.clientX - container.getBoundingClientRect().left - (discoball.clientWidth / 2);
    var yPosition = event.clientY - container.getBoundingClientRect().top - (discoball.clientHeight / 2);
    discoball.style.left = xPosition + "px";
    discoball.style.top = yPosition + "px";
}
var galaxy = document.getElementById("galaxyBackground");
var click = document.getElementById("click");

function invertGalaxy(event) {
    if (galaxy.style.filter = "invert(100%)") {
        galaxy.style.filter = "invert(0%)";
    } else if (galaxy.style.filter = "invert(100%)") {
        galaxy.style.filter = "invert(0%)";
    }
}
container.addEventListener("click", invertGalaxy);


window.addEventListener("keydown", moveSquirrel);
var squirrel = document.getElementById("squirrel");
var squirreltop = 10
var squirrelleft = 10

function moveSquirrel(event) {
    if (event.key === "ArrowUp") {
        squirreltop = squirreltop - 20;
        squirrel.style.top = squirreltop + "px";
        squirrelleft = squirrelleft + 20;
        squirrel.style.left = squirrelleft + "px";
    } else if (event.key === "ArrowDown") {
        squirreltop = squirreltop + 20;
        squirrel.style.top = squirreltop + "px";
        squirrelleft = squirrelleft + 20;
        squirrel.style.left = squirrelleft + "px";
    } else if(event.key === "ArrowLeft") {
        squirreltop = squirreltop - 0;
        squirrel.style.top = squirreltop + "px";
        squirrelleft = squirrelleft - 20;
        squirrel.style.left = squirrelleft + "px";
    }
    else if (event.key === "ArrowRight") {
        squirreltop = squirreltop + 0;
        squirrel.style.top = squirreltop + "px";
        squirrelleft = squirrelleft + 20;
        squirrel.style.left = squirrelleft + "px";
    }
}
