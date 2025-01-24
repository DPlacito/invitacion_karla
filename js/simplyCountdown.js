
// Set the date to count down to (format: year, month (zero-based), day, hours, minutes, seconds)
var countDownDate = new Date("2024-04-26T17:30:00").getTime();

// Update the countdown every 1 second
var countdownFunction = setInterval(function() {
  // Get the current date and time
  var now = new Date().getTime();

  // Calculate the time remaining until the countdown date
  var timeRemaining = countDownDate - now;

  // Calculate days, hours, minutes, and seconds
  var days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
  var hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);
  
  var hoursText = hours === 1 ? 'Hora' : 'Horas';
  var daysText = days === 1 ? 'Día' : 'Días';
  var minutesText = minutes === 1 ? 'Minuto' : 'Minutos';
  var secondsText = seconds === 1 ? 'Segundo' : 'Segundos';
  // Display the result in the corresponding elements
  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;
  document.getElementById("hours-text").innerHTML = hoursText;
  document.getElementById("days-text").innerHTML = daysText;
  document.getElementById("minutes-text").innerHTML = minutesText;
  document.getElementById("seconds-text").innerHTML = secondsText;

  // If the countdown is over, stop updating it
  if (timeRemaining < 0) {
    clearInterval(countdownFunction);
    document.getElementById("days").innerHTML = "0";
    document.getElementById("hours").innerHTML = "0";
    document.getElementById("minutes").innerHTML = "0";
    document.getElementById("seconds").innerHTML = "0";
  }
}, 1000);