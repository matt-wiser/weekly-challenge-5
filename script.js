var currentDate = moment().format("dddd MMMM Do");

document.getElementById("currentDay").textContent = currentDate;

const currentHour = moment().hour();
let textAreas = document.getElementsByTagName("textarea");
// convert HTML collection of textAreas into an array
textAreas = [].slice.call(textAreas);

// checks the assigned hour of all text areas against the current hour and assigns a color based on time
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

// populates textareas based on previously saved information
function populateTextAreas() {
    textAreas.forEach(element => {
        const savedInfo = localStorage.getItem(element.dataset.hour);
        if (savedInfo) {
            element.value = savedInfo
        }
    });
}

// saves localStorage key value pair based on current textarea value when save is clicked
function saveBtnClick(event) {
    const textArea = $(event.target).siblings("textarea")[0];
    localStorage.setItem(textArea.dataset.hour, textArea.value);
}

// runs populateTextAreas to populate textareas with saved localStorage information
populateTextAreas();

// run assess hour function to color code text areas based on time
assessHour();

// attach an event handler to saveBtn clicks to save data to local storage
$(".saveBtn").click(saveBtnClick);
