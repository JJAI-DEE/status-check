function loadView(view, district) {
    fetch(view)
        .then(response => response.text())
        .then(data => {
            document.getElementById("buttonsContainer").style.display = "none"; // Hide buttons
            document.getElementById("content").innerHTML = data; // Show new view

            // Redirect with district parameter
            if (district) {
                window.location.href = `${view}?district=${encodeURIComponent(district)}`;
            }
        })
        .catch(error => console.error("Error loading view:", error));
}

