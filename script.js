document.addEventListener("DOMContentLoaded", function () {
    const revealButton = document.getElementById("revealButton");
    const message = document.getElementById("message");
    const buttonContainer = document.getElementById("buttonContainer");
    const yesButton = document.getElementById("yesButton");
    const noButton = document.getElementById("noButton");
    const contentContainer = document.getElementById("contentContainer");

    revealButton.addEventListener("click", function () {
        message.style.display = "block";
        buttonContainer.style.display = "flex";

        setTimeout(() => {
            message.classList.add("show");
        }, 100);
    });

    noButton.addEventListener("click", function () {
        let currentScale = parseFloat(yesButton.getAttribute("data-scale")) || 1;
        currentScale += 0.2;
        yesButton.style.transform = `scale(${currentScale})`;
        yesButton.setAttribute("data-scale", currentScale);
    });

    yesButton.addEventListener("click", function () {
        showFinalLoveMessage();
        createFloatingHearts();
    });

    function showFinalLoveMessage() {
        contentContainer.classList.add("blur-background");

        const loveMsg = document.createElement("div");
        loveMsg.classList.add("final-message");
        loveMsg.innerHTML = "You Made My Life Beautiful ❤️<br>Thank You So Much..... 💕 Happy Birthday  to you  <br>💙Aishu🧡";
        document.body.appendChild(loveMsg);
    }

    function createFloatingHearts() {
        setInterval(() => {
            const heart = document.createElement("div");
            heart.classList.add("heart");

            if (Math.random() < 0.5) {
                heart.classList.add("blue");
            }

            heart.style.left = Math.random() * 100 + "vw";
            heart.style.animationDuration = 3 + Math.random() * 2 + "s";

            document.body.appendChild(heart);

            setTimeout(() => {
                heart.remove();
            }, 5000);
        }, 300);
    }
});
