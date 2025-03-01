// Function to load view dynamically and replace buttons
function loadView(view) { // view =>> province.html
    fetch(view)
        .then(response => response.text())
        .then(data => {
            document.getElementById("buttonsContainer").style.display = "none"; // Hide buttons
            document.getElementById("content").innerHTML = data; // Show new view ==> province.html
        })
        .catch(error => console.error("Error loading view:", error));
}
