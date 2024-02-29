document.addEventListener('DOMContentLoaded', function () {
    // Function to update the countdown
    function updateCountdown() {
        // Set the date we're counting down to (replace with your giveaway end date)
        const countdownDate = new Date('March 1, 2024 00:00:00 GMT+00:00').getTime();
        const now = new Date().getTime();
        const distance = countdownDate - now;

        // Calculate days, hours, minutes, and seconds
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Display the countdown
        document.getElementById('countdown').innerHTML =
            `${days}d ${hours}h ${minutes}m ${seconds}s`;

        // If the countdown is over, reset it
        if (distance < 0) {
            clearInterval(countdownInterval);
            setTimeout(updateCountdown, 1000); // Restart the countdown after 1 second
        }
    }

    // Initial call to start the countdown
    updateCountdown();

    // Update the countdown every 1 second
    const countdownInterval = setInterval(updateCountdown, 1000);
});
