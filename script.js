const countries = [
    { name: "India", flag: "india.png", coordinates: [20.5937, 78.9629] },
    { name: "China", flag: "china.png", coordinates: [35.8617, 104.1954] },
    { name: "United States", flag: "usa.png", coordinates: [37.0902, -95.7129] },
    { name: "Indonesia", flag: "indonesia.png", coordinates: [-0.7893, 113.9213] },
    { name: "Pakistan", flag: "pakistan.png", coordinates: [30.3753, 69.3451] },
    { name: "Brazil", flag: "brazil.png", coordinates: [-14.2350, -51.9253] },
    { name: "Nigeria", flag: "nigeria.png", coordinates: [9.0820, 8.6753] },
    { name: "Bangladesh", flag: "bangladesh.png", coordinates: [23.685, 90.3563] },
    { name: "Russia", flag: "russia.png", coordinates: [61.5240, 105.3188] },
    { name: "Mexico", flag: "mexico.png", coordinates: [23.6345, -102.5528] },
    { name: "Japan", flag: "japan.png", coordinates: [36.2048, 138.2529] },
    { name: "Philippines", flag: "philippines.png", coordinates: [12.8797, 121.7740] },
    { name: "Egypt", flag: "egypt.png", coordinates: [26.8206, 30.8025] },
    { name: "Vietnam", flag: "vietnam.png", coordinates: [14.0583, 108.2772] },
    { name: "Ethiopia", flag: "ethiopia.png", coordinates: [9.1450, 40.489673] },
    { name: "Germany", flag: "germany.png", coordinates: [51.1657, 10.4515] },
    { name: "Turkey", flag: "turkey.png", coordinates: [38.9637, 35.2433] },
    { name: "Iran", flag: "iran.png", coordinates: [32.4279, 53.6880] },
    { name: "Thailand", flag: "thailand.png", coordinates: [15.8700, 100.9925] },
    { name: "United Kingdom", flag: "uk.png", coordinates: [55.3781, -3.4360] },
];

let score = 0;
let currentCountryIndex = 0;
let attempts = 0;
let map;
let currentBuffer = null;
let countdownTimer;
let timeRemaining = 120;

// Pop-up için değişkenler
const howToPlayButton = document.getElementById('howToPlayButton');
const howToPlayPopup = document.getElementById('howToPlayPopup');
const closePopup = document.getElementById('closePopup');

// Pop-up'ı açma işlevi
howToPlayButton.addEventListener('click', () => {
    howToPlayPopup.style.display = 'flex';
});

// Pop-up'ı kapatma işlevi
closePopup.addEventListener('click', () => {
    howToPlayPopup.style.display = 'none';
});

// Pop-up dışına tıklanınca kapat
window.addEventListener('click', (event) => {
    if (event.target === howToPlayPopup) {
        howToPlayPopup.style.display = 'none';
    }
});

// Oyunu başlatma
document.getElementById("startButton").addEventListener("click", () => {
    shuffleArray(countries);
    document.getElementById("homePage").style.display = "none";
    const introVideo = document.getElementById("introVideo");
    if (introVideo) {
        introVideo.pause();
        introVideo.currentTime = 0;
    }

    document.getElementById("gamePage").style.display = "block";
    initGame();
});

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function initGame() {
    score = 0;
    currentCountryIndex = 0;
    timeRemaining = 120;

    map = L.map('map').setView([20, 0], 2);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
    }).addTo(map);

    countries.forEach((country, index) => {
        const marker = L.marker(country.coordinates).addTo(map);
        marker.on('click', () => checkAnswer(index));
    });

    startCountdown();
    displayCurrentFlag();
}

function startCountdown() {
    const countdownElement = document.getElementById('countdown');
    countdownElement.textContent = `Time Remaining: ${timeRemaining}`;
    
    countdownTimer = setInterval(() => {
        timeRemaining--;
        countdownElement.textContent = `Time Remaining: ${timeRemaining}`;
        
        if (timeRemaining <= 0) {
            clearInterval(countdownTimer);
            endGameDueToTime();
        }
    }, 1000);
}

function displayCurrentFlag() {
    const flagContainer = document.getElementById('flagContainer');
    flagContainer.innerHTML = "";
    const flagElement = document.createElement("img");
    flagElement.src = countries[currentCountryIndex].flag;
    flagElement.alt = "flag";
    flagElement.className = "flag-icon";
    flagContainer.appendChild(flagElement);

    document.getElementById('message').textContent = "";
}

function checkAnswer(selectedIndex) {
    const messageElement = document.getElementById('message');
    if (currentBuffer) {
        currentBuffer.remove();
    }

    if (selectedIndex === currentCountryIndex) {
        score += 10 - (attempts * 5);
        messageElement.textContent = "Correct! You earned " + (10 - (attempts * 5)) + " points.";
        attempts = 0;
        setTimeout(nextRound, 2000);
    } else {
        attempts++;
        if (attempts === 3) {
            messageElement.textContent = "Incorrect! The correct answer was " + countries[currentCountryIndex].name;
            attempts = 0;
            setTimeout(nextRound, 2000);
        } else {
            messageElement.textContent = "Incorrect! Try again.";
        }
    }
    document.getElementById('score').textContent = "Score: " + score;
}

function nextRound() {
    if (currentBuffer) {
        currentBuffer.remove();
    }

    if (currentCountryIndex >= countries.length - 1) {
        showEndScreen("🎉 Congratulations! 🎉", `Your final score is: ${score}`);
    } else {
        currentCountryIndex++;
        displayCurrentFlag();
    }
}

function endGameDueToTime() {
    clearInterval(countdownTimer);
    showEndScreen("Game Over! Time is up!", `Your final score is: ${score}`);
}

function showEndScreen(title, message) {
    document.getElementById("gamePage").style.display = "none";
    const endScreen = document.getElementById("endScreen");
    endScreen.style.display = "flex";

    const endMessage = document.getElementById("endMessage");
    endMessage.innerHTML = `
        <h1>${title}</h1>
        <p>${message}</p>
        <button id="restartButton">Play Again</button>
    `;

    document.getElementById("restartButton").addEventListener("click", () => {
        location.reload();
    });
}
