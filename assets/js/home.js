// Function to get the current time and display a greeting in French
function displayGreeting() {
    const now = new Date();
    const hours = now.getHours();
    let greeting;

    if (hours < 18 && hours >= 6) {
        greeting = "Bonjour"; // Good morning
    } else {
        greeting = "Bonsoir"; // Good evening
    }

    document.getElementById('greeting').textContent = greeting + ", I am Jianing";
}

// Call the function to display the greeting
document.addEventListener('DOMContentLoaded', displayGreeting);