//variables
var clicks = 0; //increment this by one every click
var click_increment = 1; //how many clicks per click
//functions

function updateTotalClicks() {
    //updates the number of clicks
    var e = document.getElementById('total-clicks');
    // select the element with the class of total clicks
    // hint: document.getElementById to capture element with a specific id
    // update the html content of that element to watch the current clicks variables
    e.innerHTML = clicks;
}

//click events
document.querySelector('.add-click').onclick = function() {
    clicks += click_increment;
    updateTotalClicks(); //updates the text
    if (clicks > 5) {
        TODO;
        // if clicks === 50 add animationx``
    }
};

document.querySelector('.remove-click').onclick = function() {
    clicks -= parseFloat(click_increment);
    updateTotalClicks(); //updates the text
};

//Increase Click Increment
// Let's increase the amount of clicks!
document.getElementById('increase_clicks').onclick = function() {
    if (clicks >= 5) {
        var upgrade_cost = 5;
        clicks -= 5;
        updateTotalClicks();
        click_increment++;
        var clicksBeingAddedSpan = document.querySelector('.clicks-being-added');
        clicksBeingAddedSpan.innerHTML = click_increment;
    } else {
        alert('You need more clicks! You only have ' + clicks + ' clicks!');
    }
};
