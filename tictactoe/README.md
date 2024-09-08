# Spring Boot Tic-Tac-Toe Game

This project is a simple implementation of the classic Tic-Tac-Toe game using Spring Boot for the backend and HTML/CSS/JavaScript for the frontend.

## Features

- Two-player Tic-Tac-Toe game
- Player name input
- Responsive game board
- Winner announcement with confetti animation
- Play again functionality

## Technologies Used

- Backend: Spring Boot 2.x
- Frontend: HTML5, CSS3, JavaScript
- Build Tool: Maven

## Setup and Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/tictactoe-spring-boot.git
   ```

2. Navigate to the project directory:
   ```bash
   cd tictactoe-spring-boot
   ```

3. Build the project:
   ```bash
   mvn clean install
   ```

4. Run the application:
   ```bash
   mvn spring-boot:run
   ```

5. Open a web browser and go to `http://localhost:8080` to play the game.

## How to Play

1. Enter the names for Player 1 (X) and Player 2 (O).
2. Click the "Start Game" button.
3. Players take turns clicking on an empty cell to make their move.
4. The game announces the winner or a draw when the game ends.
5. Click "Play Again" to start a new game.

## Project Structure

- `src/main/java/com/example/tictactoe/`: Java source files
  - `controller/`: REST API controllers
  - `model/`: Game logic and data models
- `src/main/resources/static/`: Frontend files
  - `index.html`: Main HTML file
  - `styles.css`: CSS styles
  - `script.js`: JavaScript for game logic

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is open source and available under the [MIT License](LICENSE).
