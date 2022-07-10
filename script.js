var currentDate = moment().format("dddd MMMM Do");

document.getElementById("currentDay").textContent = currentDate;

var currentHour = moment().hour();
var hourbefore = moment().isBefore(currentHour)
var hourafter = moment().isAfter(currentHour)

console.log(hourbefore, hourafter)