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
