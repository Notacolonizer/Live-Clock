function updateClock() {

    const now = new Date();

    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    // AM or PM
    const ampm = hours >= 12 ? "PM" : "AM";

    // Convert to 12-hour time
    hours = hours % 12;

    if (hours === 0) {
        hours = 12;
    }

    // Add leading zeros
    minutes = String(minutes).padStart(2, "0");
    seconds = String(seconds).padStart(2, "0");

    // Display time
    document.getElementById("clock").textContent =
        `${hours}:${minutes}:${seconds} ${ampm}`;


    // Display date
    const date = now.toLocaleDateString("en-CA", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
    });

    document.getElementById("date").textContent = date;
}


// Run immediately
updateClock();

// Update every second
setInterval(updateClock, 1000);


if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
        navigator.serviceWorker.register("./service-worker.js")
            .then(() => console.log("Service worker registerted"))
            .catch(error => console.error("Service worker failed:", error));
    });
}
