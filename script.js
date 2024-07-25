document.addEventListener('DOMContentLoaded', () => {
    let countdownInterval;

    document.getElementById('setCountdown').addEventListener('click', () => {
        // Clear any existing countdown interval
        if (countdownInterval) {
            clearInterval(countdownInterval);
        }

        // Get user input
        const dateInput = document.getElementById('date').value;
        const timeInput = document.getElementById('time').value;

        // Validate input
        if (!dateInput || !timeInput) {
            alert('Please enter both date and time.');
            return;
        }

        // Create a new target date
        const countDownDate = new Date(`${dateInput}T${timeInput}`).getTime();

        // Start the countdown
        countdownInterval = setInterval(() => {
            // Get current date and time
            const now = new Date().getTime();

            // Calculate the remaining time
            const distance = countDownDate - now;

            // Time calculations
            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            // Update the countdown display
            document.getElementById('days').innerText = days;
            document.getElementById('hours').innerText = hours;
            document.getElementById('minutes').innerText = minutes;
            document.getElementById('seconds').innerText = seconds;

            // Check if countdown has ended
            if (distance < 0) {
                clearInterval(countdownInterval);
                document.getElementById('countdown').innerHTML = "EXPIRED";
            }
        }, 1000);
    });
});
