# Flag Guessing Game
The Flag Guessing Game is designed to test and expand players’ knowledge of the flags of the world's most populous countries. The game aims to be both educational and entertaining, encouraging players to connect visual symbols (flags) with geographic locations. By interacting with the map, players reinforce their awareness of countries' positions globally and build memory associations between flags and specific nations.

## Here is the game link:

https://gmt-458-web-gis.github.io/geogame-umutiik/

## How the Game Works
### 1.Starting the Game:

When the player first opens the site, they are greeted by a homepage featuring the game's title, a brief description, and a "Play Game" button.
Clicking "Play Game" hides the homepage and loads the game interface.
### 2.Game Interface:

Flag Display: A random flag from a pre-selected list of the 20 most populous countries appears on the right side of the screen.

Map with Pins: An interactive world map displays pins on these 20 countries.

Score Display: Shows the player’s score on the right, updating with each correct answer.

### 3.Gameplay:

Objective: The player’s task is to identify the country associated with the displayed flag by clicking the correct pin on the map.

Scoring: If the player clicks the correct pin on the first attempt, they earn 10 points, and the game moves to the next flag.

If the attempt is incorrect, they get a next flag. The player has the right to answer incorrectly 2 times in total. On the third wrong answer the game ends and returns to the main screen.

Time : The time defined to complete the game is 3 minutes.

### 4.End of Game:

After 20 rounds, the game shows a final message with the player’s total score.

The player is then redirected back to the homepage, where they can restart the game if desired.

--------------------------------------------------------------------------------

## Game Requirements:
### 1. Homepage Layout:
Title of the game ("Flag Guessing Game") displayed prominently.

Description: "Test your knowledge of the world's most populous countries by identifying their flags. Click on the correct country pin for each flag to earn points."

A "Play Game" button that, when clicked, hides the homepage and starts the game on a new page.

### 2. Game Page Layout:
Map: Displays an interactive world map where pins are placed on specific countries.

Flag Display Area: Shows the flag image of the country the player must identify.

Message Display: Displays messages like "Correct! You earned points" or "Incorrect! Try again" based on the player's answer.

Score Tracker: Shows the player’s current score on the same side as the flag area.

Game Over Screen: At the end of the game, displays "Game over! Your final score is: [score]" before redirecting the player back to the homepage.

## Frontend User Flow:
Upon loading the site, the homepage with the title, description, and "Play Game" button is shown.

Clicking "Play Game" loads the game page where the player sees a flag and can click country pins on the map.

Correct answers award points, while incorrect answers allow multiple attempts.

At the end of the game, the player is shown their final score and redirected back to the homepage.

----------------------------------------------------------------------

## JavaScript Library Used
### Leaflet.js was used as the main JavaScript library in this project for the following reasons:

Interactive Map: Leaflet provides a simple and effective way to create an interactive world map. It allows the addition of markers (pins) to specific coordinates for each country.

Event Handling: Leaflet supports events such as click on map markers, which allows us to check if the player clicked on the correct country.

Customization: Leaflet’s tile layers and customization options make it easy to create visually appealing maps without heavy configuration, keeping the code lightweight and responsive.

https://leafletjs.com/

-----------------------------------------------------------------------

## Describing Three Event Handlers

### 1.Start Game Event Handler:

**Trigger:** Clicking the "Play Game" button (id="startButton").

**Action:** Randomizes the order of the countries using shuffleArray.
Hides the homepage (`id="homePage"`) and stops the intro video.
Displays the game page (`id="gamePage"`) and initializes the game using `initGame()`, setting up the map, markers, countdown, and displaying the first flag.

### 2.Marker Click Event Handler:

**Trigger:** Clicking a marker on the map (assigned dynamically for each country's coordinates).

**Action:** Calls `checkAnswer(index)` to verify if the clicked marker corresponds to the current country.
Updates the score and displays a message indicating whether the guess was correct or incorrect. If incorrect, the player has up to three attempts.
Advances to the next round or ends the game if all countries have been guessed.

### 3.Pop-Up Control Event Handlers:

**Trigger:**
Clicking the "How to Play" button (`id="howToPlayButton"`) displays the instructions pop-up.
Clicking the close button (`id="closePopup"`) or outside the pop-up closes it.

**Action:** Controls the visibility of the "How to Play" pop-up by toggling its display property to flex or none.

----------------------------------------------------------------------------

## Closures

### 1.Dynamic Event Binding for Markers:

```ruby
marker.on('click', () => checkAnswer(index));
```
The closure ensures that each marker retains a reference to its correct country index, enabling accurate checks when the player clicks a marker.

### 2.Countdown Timer:

```ruby
countdownTimer = setInterval(() => {
    timeRemaining--;
    countdownElement.textContent = `Time Remaining: ${timeRemaining}`;
    if (timeRemaining <= 0) {
        clearInterval(countdownTimer);
        endGameDueToTime();
    }
}, 1000);
```
The closure ensures that the countdown timer dynamically updates the remaining time and invokes `endGameDueToTime()` when time is up.

### 3.Score and Attempts Management:

```ruby
function checkAnswer(selectedIndex) {
    if (selectedIndex === currentCountryIndex) {
        score += 10 - (attempts * 5);
        ...
    } else {
        attempts++;
        ...
    }
}
```
The closure allows `checkAnswer` to access and update the current game state (`score and attempts`) without requiring global variables or passing them as parameters.

----------------------------------------------------------------------------------------
## Benefits of ChatGPT and Chat URL:

I used ChatGPt to add some details to the basic structure of my page. It was especially helpful in terms of library usage, pop-up design, countdown timer, and hint usage.

https://chatgpt.com/share/6755dac1-03ec-800e-a052-58f87dc46dc5

-----------------------------------------------------------------------------------------

## Interacting with the DOM

In the Flag Guessing Game, the code interacts extensively with the DOM to manage game flow, update the UI dynamically, and provide an engaging user experience.

### 1. Handling Navigation Between Pages:

Toggles the visibility of the home page (`id="homePage"`) and game page (`id="gamePage"`) when the game starts.

```ruby
document.getElementById("homePage").style.display = "none";
document.getElementById("gamePage").style.display = "block";
```
Purpose: Ensures a seamless transition between the introductory section and the gameplay section.

### 2. Updating the Flag to Be Guessed:

Dynamically creates an <img> element for the current country's flag and adds it to the DOM.

```ruby
const flagContainer = document.getElementById('flagContainer');
flagContainer.innerHTML = "";
const flagElement = document.createElement("img");
flagElement.src = countries[currentCountryIndex].flag;
flagElement.alt = "flag";
flagElement.className = "flag-icon";
flagContainer.appendChild(flagElement);
```
Purpose: Displays the new flag to the player at the start of each round.

### 3. Adding Markers to the Map:

Adds markers to the Leaflet map and attaches click event listeners to them.

```ruby
const marker = L.marker(country.coordinates).addTo(map);
marker.on('click', () => checkAnswer(index));
```
Purpose: Provides an interactive way for players to select countries on the map.

### 4. Updating the Score and Messages:

Updates the score display and shows feedback messages (e.g., "Correct!" or "Incorrect!") in response to user actions.

```ruby
document.getElementById('score').textContent = "Score: " + score;
document.getElementById('message').textContent = "Correct! You earned " + (10 - (attempts * 5)) + " points.";
```

Purpose: Keeps the player informed of their progress and provides immediate feedback.

### 5. Countdown Timer:

Updates the countdown timer every second by modifying the text content of the countdown display.

```ruby
const countdownElement = document.getElementById('countdown');
countdownElement.textContent = `Time Remaining: ${timeRemaining}`;
```
Purpose: Creates a sense of urgency and motivates the player to act quickly.

### 6. Displaying the End Screen:

Shows the end screen with a dynamic message and a "Play Again" button after the game ends. Creates a new event listener for the restart button to reload the game.

```ruby
const endScreen = document.getElementById("endScreen");
endScreen.style.display = "flex";
const endMessage = document.getElementById("endMessage");
endMessage.innerHTML = `
    <h1>${title}</h1>
    <p>${message}</p>
    <button id="restartButton">Play Again</button>
`;
```
Purpose: Provides closure to the gameplay and encourages replayability.


## Game Interface and Backend:

![Geogame](https://github.com/user-attachments/assets/208e94ae-4ca6-408b-bfe5-24350cc59f5a)


