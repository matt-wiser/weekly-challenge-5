var currentDate = moment().format("dddd MMMM Do");

document.getElementById("currentDay").textContent = currentDate;

const currentHour = moment().hour();
let textAreas = document.getElementsByTagName("textarea");
// convert HTML collection of textAreas into an array
textAreas = [].slice.call(textAreas);

function assessHour() {
    textAreas.forEach(element => {
        console.log(element.dataset.hour);
        if (element.dataset.hour < currentHour) {
            element.classList.add("past");
        }
        else if (element.dataset.hour > currentHour) {
            element.classList.add("future");
        }
        else {
            element.classList.add("present");
        }

    });
}

console.log(currentHour);
assessHour();
