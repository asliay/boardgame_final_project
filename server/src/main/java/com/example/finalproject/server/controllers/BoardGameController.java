package com.example.finalproject.server.controllers;

import com.example.finalproject.server.models.BoardGame;
import com.example.finalproject.server.repositories.BoardGameRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
public class BoardGameController {

    @Autowired
    BoardGameRepository boardGameRepository;

    // INDEX

    @GetMapping(value = "/board-games")
    public ResponseEntity<List<BoardGame>> getAllBoardGames(
            @RequestParam(name = "playTime", required = false) Integer playTime,
            @RequestParam(name = "category", required = false) String category,
            @RequestParam(name = "numPlayers", required = false) Integer numPlayers
    ) {
        // Find by category, play time & number of players
        if (category !=null && playTime != null && numPlayers != null) {
            List<BoardGame> returnedGames =
                    boardGameRepository.findByMinPlayTimeLessThanEqualAndMaxPlayTimeGreaterThanEqualAndGameCategoryNameIgnoreCaseAndMinPlayersLessThanEqualAndMaxPlayersGreaterThanEqualOrderByRankAsc(playTime, playTime, category, numPlayers, numPlayers);
            return new ResponseEntity<>(returnedGames, HttpStatus.OK);
        }
        // Find by category and number of players
        if (category !=null && numPlayers != null) {
            List<BoardGame> returnedGames =
                    boardGameRepository.findByGameCategoryNameIgnoreCaseAndMinPlayersLessThanEqualAndMaxPlayersGreaterThanEqualOrderByRankAsc(category, numPlayers, numPlayers);
            return new ResponseEntity<>(returnedGames, HttpStatus.OK);
        }
        // Find by play time and number of players
        if (playTime != null && numPlayers != null) {
            List<BoardGame> returnedGames =
                    boardGameRepository.findByMinPlayTimeLessThanEqualAndMaxPlayTimeGreaterThanEqualAndMinPlayersLessThanEqualAndMaxPlayersGreaterThanEqualOrderByRankAsc(playTime,
                            playTime, numPlayers, numPlayers);
            return new ResponseEntity<>(returnedGames, HttpStatus.OK);
        }
        // Find by play time and category
        if (playTime !=null && category !=null) {
            List<BoardGame> returnedGames =
                    boardGameRepository.findByMinPlayTimeLessThanEqualAndMaxPlayTimeGreaterThanEqualAndGameCategoryNameIgnoreCaseOrderByRankAsc(playTime, playTime,
                            category);
            return new ResponseEntity<>(returnedGames, HttpStatus.OK);
        }
        // Find by category
        if (category !=null) {
            List<BoardGame> returnedGames =
                    boardGameRepository.findByGameCategoryNameIgnoreCaseOrderByRankAsc(category);
            return new ResponseEntity<>(returnedGames, HttpStatus.OK);
        }
        // Find by category
        if (playTime != null) {
            List<BoardGame> returnedGames =
                    boardGameRepository.findByMinPlayTimeLessThanEqualAndMaxPlayTimeGreaterThanEqualOrderByRankAsc(playTime, playTime);
            return new ResponseEntity<>(returnedGames, HttpStatus.OK);
        }
        // Find by number of players
        if (numPlayers != null) {
            List<BoardGame> returnedGames =
                    boardGameRepository.findByMinPlayersLessThanEqualAndMaxPlayersGreaterThanEqualOrderByRankAsc(numPlayers,
                            numPlayers);
            return new ResponseEntity<>(returnedGames,HttpStatus.OK);
        } // Find all board games
        List<BoardGame> allGames = boardGameRepository.findAll(Sort.by(Sort.Direction.ASC, "rank"));
        return new ResponseEntity<>(allGames, HttpStatus.OK);
    }

    // SHOW by ID

    @GetMapping(value = "/board-games/{id}")
    public ResponseEntity<Optional<BoardGame>> getBoardGameById(@PathVariable Long id) {
        Optional<BoardGame> boardGame = boardGameRepository.findById(id);
        return new ResponseEntity<>(boardGame, HttpStatus.OK);
    }

    // CREATE

    @PostMapping(value = "/board-games")
    public ResponseEntity<BoardGame> createBoardGame(@RequestBody BoardGame newBoardGame) {
        BoardGame createdBoardGame = boardGameRepository.save(newBoardGame);
        return new ResponseEntity<>(createdBoardGame, HttpStatus.CREATED);
    }

}
