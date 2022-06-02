let colors = ['red', 'yellow', 'blue', 'green'],
    container = document.getElementById('container');
function createLights() {
    for (x = 0; x < colors.length; x++) {
        container.innerHTML += `<div class="ball ${colors[x]}" style='background-color:${colors[x]}'></div>`;
    }
    container.innerHTML += container.innerHTML;

}
createLights();
var balls = document.getElementsByClassName("ball");

function turn(value) {
    let classColor;
    if (value == "on") {
        for (x = 0; x < balls.length; x++) {
            classColor = balls[x].style.backgroundColor;
            balls[x].classList.add(`${classColor}`);
        }
    }
    else {
        for (x = 0; x < balls.length; x++) {
            balls[x].classList.remove("red", "blue", "green", "yellow");
        }
    }
}

function velocity(value) {
    for (x = 0; x < balls.length; x++) {
        balls[x].style.animationDuration = `${value}s`;
        if (balls[x].classList.contains('red') || balls[x].classList.contains('blue')) {
            balls[x].style.animationDelay = `${value}s`;
        }
    }
}