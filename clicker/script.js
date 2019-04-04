//variables
var accumulatedClicks = 0; //increment this by one every click
var click_increment = 1; //how many clicks are added
//functions

function updateAccumulatedClicksOnScreen() {
    // This function updates the html content for the element that has the text: "Accumulated Clicks: " and some number
    // puseodocode:
    // select the html element with the id of accumulated-clicks
    // make a variable named accumulatedClickElement that references that element
    // update the html content of accumulatedClickElement to reflect the number of accumulatedClicks
    // we can use the variable accumulatedClicks to reflect the number of clicks we've accumulated
    // hint: document.getElementById to capture element with a specific id https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById
    // hint: checkout element.innerHTML : https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML
}

//click events
document.getElementById('add-click').onclick = function() {
    // here we are adding an onclick event listener
    // we first select  an element with an Id of 'add-click'
    // we then set the 'onclick' property to that element
    // the 'onclick' property will have a value that is a function
    // that function will run when a click event is registered on the element we are selecting
    // We are already selecting the element!
    // We just need to write our function that will run when the selected element is clicked
    // pseudocode:
    // Increment the accumulatedClicks clicks variable by how many clicks we should add
    // run our function that will update the html content of the element that has the id of "accumulated-clicks"
};

document.getElementById('remove-click').onclick = function() {
    // here we are adding an onclick event listener
    // we first select  an element with an Id of 'add-click'
    // we then set the 'onclick' property to that element
    // the 'onclick' property will have a value that is a function
    // that function will run when a click event is registered on the element we are selecting
    // We are already selecting the element!
    // We just need to write our function that will run when the selected element is clicked
    // pseudocode:
    // Decrement the accumulatedClicks clicks variable by how many clicks we should add
    // run our function that will update the html content of the element that has the id of "accumulated-clicks"
};

//Increase Click Increment
// Let's increase the amount of clicks!
document.getElementById('increase-clicks').onclick = function() {
    if (accumulatedClicks >= 5) {
        accumulatedClicks -= 5;
        updateAccumulatedClicksOnScreen();
        click_increment++;
        var clicksBeingAddedSpan = document.getElementById('clicks-being-added');
        clicksBeingAddedSpan.innerHTML = click_increment;
    } else {
        // alert the user that the user doesn't have enough clicks!
    }
};

// bonus 1
// Have the function that runs when the 'add-click' event listener fires change the
// font to comic sands if there are 20 accumulated clicks

// bonus 2!
// write a function that clears all accumulated clicks
function clearAllClicks() {}
