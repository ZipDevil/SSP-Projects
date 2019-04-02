var timeElement = document.querySelector('h2'),
    start = document.querySelector('#start'),
    stop = document.querySelector('#stop'),
    clear = document.querySelector('#clear'),
    seconds = 0,
    minutes = 0,
    hours = 0,
    t;

function add() {
    // update JS
    seconds++;
    if (seconds >= 60) {
        seconds = 0;
        minutes++;
        if (minutes >= 60) {
            minutes = 0;
            hours++;
        }
    }

    // update html
    timeElement.textContent =
        (hours ? (hours > 9 ? hours : '0' + hours) : '00') +
        ':' +
        (minutes ? (minutes > 9 ? minutes : '0' + minutes) : '00') +
        ':' +
        (seconds > 9 ? seconds : '0' + seconds);

    timer();
}

function timer() {
    t = setTimeout(add, 1000);
}

/* Start button */
start.onclick = timer;

/* Stop button */
stop.onclick = function() {
    clearTimeout(t);
};

/* Clear button */
clear.onclick = function() {
    timeElement.textContent = '00:00:00';
    seconds = 0;
    minutes = 0;
    hours = 0;
};
