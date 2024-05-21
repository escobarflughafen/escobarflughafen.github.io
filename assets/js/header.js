// Function to get the current time and display a greeting in French
function displayGreeting() {
    const now = new Date();
    const hours = now.getHours();
    let greeting;

    if (hours < 12 && hours >= 6) {
        greeting = "bonjour"; // Good morning
    }
    else if (hours < 18) {
        greeting = "bonjour"; // Good afternoon
    }
    else {
        greeting = "bonsoir"; // Good evening
    }

    document.getElementById('greeting').textContent = greeting + ", i am jianing";
}

// Call the function to display the greeting
document.addEventListener('DOMContentLoaded', displayGreeting);