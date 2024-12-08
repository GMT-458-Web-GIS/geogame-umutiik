# Flag Guessing Game
The Flag Guessing Game is designed to test and expand players’ knowledge of the flags of the world's most populous countries. The game aims to be both educational and entertaining, encouraging players to connect visual symbols (flags) with geographic locations. By interacting with the map, players reinforce their awareness of countries' positions globally and build memory associations between flags and specific nations.
 
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

### 1.Start Game Event Handler​:

**Trigger:** Clicking the "Play Game" button (id="startButton").

**Action:** Randomizes the order of the countries using shuffleArray.
Hides the homepage (`id="homePage"`) and stops the intro video.
Displays the game page (`id="gamePage"`) and initializes the game using `initGame()`, setting up the map, markers, countdown, and displaying the first flag.

### 2.Marker Click Event Handler​:

**Trigger:** Clicking a marker on the map (assigned dynamically for each country's coordinates).

**Action:** Calls `checkAnswer(index)` to verify if the clicked marker corresponds to the current country.
Updates the score and displays a message indicating whether the guess was correct or incorrect. If incorrect, the player has up to three attempts.
Advances to the next round or ends the game if all countries have been guessed.

### 3.Pop-Up Control Event Handlers​:

**Trigger:**
Clicking the "How to Play" button (`id="howToPlayButton"`) displays the instructions pop-up.
Clicking the close button (`id="closePopup"`) or outside the pop-up closes it.

**Action:** Controls the visibility of the "How to Play" pop-up by toggling its display property to flex or none.

----------------------------------------------------------------------------


## Game Interface and Backend:

![Geogame](https://github.com/user-attachments/assets/208e94ae-4ca6-408b-bfe5-24350cc59f5a)

