document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("revealButton").addEventListener("click", function() {
        let message = document.getElementById("message");
        message.style.display = "block";  // Ensure it's visible
        setTimeout(() => {
            message.classList.add("show"); // Apply fade-in effect
        }, 100); // Small delay for smooth transition
    });
});
