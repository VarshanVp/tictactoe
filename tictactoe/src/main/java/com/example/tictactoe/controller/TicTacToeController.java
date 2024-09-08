package com.example.tictactoe.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example.tictactoe.model.TicTacToeGame;
import java.util.List;
import java.util.Arrays;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/tictactoe")
public class TicTacToeController {

    @Autowired
    private TicTacToeGame game;

    @PostMapping("/move")
    public String makeMove(@RequestParam int row, @RequestParam int col) {
        if (game.makeMove(row, col)) {
            if (game.checkWin()) {
                return "Player " + (game.getCurrentPlayer() == 'X' ? 'O' : 'X') + " wins!";
            } else if (game.isBoardFull()) {
                return "It's a draw!";
            } else {
                return "Move successful";
            }
        } else {
            return "Invalid move";
        }
    }

    @GetMapping("/board")
    public List<String> getBoard() {
        char[][] board = game.getBoardState();
        return Arrays.stream(board)
                     .map(String::new)
                     .collect(Collectors.toList());
    }

    @PostMapping("/reset")
    public String resetGame() {
        game = new TicTacToeGame();
        return "Game reset";
    }
}