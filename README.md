## GMT458 Web GIS GeoGame
### Game Requirements:
#### 1. Homepage Layout:
Title of the game ("Flag Guessing Game") displayed prominently.

Description: "Test your knowledge of the world's most populous countries by identifying their flags. Click on the correct country pin for each flag to earn points."

A "Play Game" button that, when clicked, hides the homepage and starts the game on a new page.

#### 2. Game Page Layout:
Map: Displays an interactive world map where pins are placed on specific countries.

Flag Display Area: Shows the flag image of the country the player must identify.

Message Display: Displays messages like "Correct! You earned points" or "Incorrect! Try again" based on the player's answer.

Score Tracker: Shows the player’s current score on the same side as the flag area.

Game Over Screen: At the end of the game, displays "Game over! Your final score is: [score]" before redirecting the player back to the homepage.

### Frontend User Flow:
Upon loading the site, the homepage with the title, description, and "Play Game" button is shown.

Clicking "Play Game" loads the game page where the player sees a flag and can click country pins on the map.

Correct answers award points, while incorrect answers allow multiple attempts.

At the end of the game, the player is shown their final score and redirected back to the homepage.

### JavaScript Library Used
#### Leaflet.js was used as the main JavaScript library in this project for the following reasons:

Interactive Map: Leaflet provides a simple and effective way to create an interactive world map. It allows the addition of markers (pins) to specific coordinates for each country.

Event Handling: Leaflet supports events such as click on map markers, which allows us to check if the player clicked on the correct country.

Customization: Leaflet’s tile layers and customization options make it easy to create visually appealing maps without heavy configuration, keeping the code lightweight and responsive.

