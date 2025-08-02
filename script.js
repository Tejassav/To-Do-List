// Get references to the HTML elements we need to interact with
const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

// Function to add a new task
function addTask() {
    // Check if the input box is empty
    if (inputBox.value === '') {
        alert("You must write something!");
    } else {
        // Create a new list item element
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;

        // Append the new list item to the list container
        listContainer.appendChild(li);

        // Create a span element for the close (delete) button
        let span = document.createElement("span");
        span.innerHTML = "\u00d7"; // This is the "x" character
        li.appendChild(span);
    }
    // Clear the input box after adding the task
    inputBox.value = "";
    // Save the updated list to local storage
    saveData();
}

// Add an event listener to the list container for clicks
listContainer.addEventListener("click", function(e) {
    // Check if the clicked element is a list item (li)
    if (e.target.tagName === "LI") {
        // Toggle the "checked" class to mark/unmark it as complete
        e.target.classList.toggle("checked");
        // Save the updated list to local storage
        saveData();
    } 
    // Check if the clicked element is the close span (SPAN)
    else if (e.target.tagName === "SPAN") {
        // Remove the parent list item
        e.target.parentElement.remove();
        // Save the updated list to local storage
        saveData();
    }
}, false);

// Function to save the list data to the browser's local storage
function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

// Function to show the tasks stored in local storage when the page loads
function showTask() {
    listContainer.innerHTML = localStorage.getItem("data");
}

// Call showTask() to display any saved data when the page first loads
showTask();