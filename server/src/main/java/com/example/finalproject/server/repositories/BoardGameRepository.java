package com.example.finalproject.server.repositories;

import com.example.finalproject.server.models.BoardGame;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface BoardGameRepository extends JpaRepository<BoardGame, Long> {

    // Playing Time Query
    List<BoardGame> findByPlayTimeLessThanEqual(int minutes);
    // By Category
    List<BoardGame> findByCategoryIgnoreCase(String category);
    // By Num Players
    List<BoardGame> findByMinPlayersLessThanEqualAndMaxPlayersGreaterThanEqual(int minPlayer, int maxPlayer );
    // COMBINED:
    // By Play Time & Category
    List<BoardGame> findByPlayTimeLessThanEqualAndCategoryIgnoreCase(int minutes, String category);
    List<BoardGame> findByPlayTimeLessThanEqualAndMinPlayersLessThanEqualAndMaxPlayersGreaterThanEqual(int minutes,
                                                                                                       int minPlayer, int maxPlayer);


}
