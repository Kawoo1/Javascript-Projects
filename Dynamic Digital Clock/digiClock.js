/*
  This file was authored by: Kyle Shanahan
  This file is the javascript file for the Dynamic Digital Clock. A simple program that creates a more animated type of clock which updates time every second.
*/
// Create a function to update the clock
function updateClock() {
    // Get the current time
    var now = new Date();
    
    // Extract hours, minutes, and seconds
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();
    
    // Format hours, minutes, and seconds to always have two digits
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    
    // Construct the time string
    var timeString = hours + ':' + minutes + ':' + seconds;
    
    // Get the element with id 'clock'
    var clockElement = document.getElementById('clock');
    
    // Update the innerHTML of the element
    if(clockElement) {
        clockElement.innerHTML = timeString;
    }
}

// Call the updateClock function every second
setInterval(updateClock, 1000);
