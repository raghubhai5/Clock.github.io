var secondHand = document.getElementById('second-hand');
var minutehand = document.getElementById('minute-hand');
var hourhand = document.getElementById('hour-hand');

function clockTick() {
    var date = new Date();
    var seconds = date.getSeconds() / 60;
    var minutes = (seconds + date.getMinutes()) / 60;
    var hours = (minutes + date.getHours()) / 12;


    rotateClockHand(secondHand, seconds);
    rotateClockHand(minutehand, minutes);
    rotateClockHand(hourhand, hours);

}

function rotateClockHand(element, rotation) {
    element.style.setProperty('--rotate', rotation * 360);
}

setInterval(clockTick, 1000);