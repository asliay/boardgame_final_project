package com.example.finalproject.server.repositories;

import com.example.finalproject.server.models.BoardGame;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface BoardGameRepository extends JpaRepository<BoardGame, Long> {

    // Playing Time Query
    List<BoardGame> findByPlayTimeLessThanEqual(int minutes);

    // By Category Name
     List<BoardGame> findByGameCategoryNameIgnoreCase(String categoryName);

    // By Num Players
    List<BoardGame> findByMinPlayersLessThanEqualAndMaxPlayersGreaterThanEqual(int minPlayer, int maxPlayer );

    // COMBINED:
    // By Play Time & Category Name
    List<BoardGame> findByPlayTimeLessThanEqualAndGameCategoryNameIgnoreCase(int minutes,
                                                                                           String category);
    // By Play Time & Num Players
    List<BoardGame> findByPlayTimeLessThanEqualAndMinPlayersLessThanEqualAndMaxPlayersGreaterThanEqual(int minutes, int minPlayer, int maxPlayer);

    // By Category Name & Num Players
    List<BoardGame> findByGameCategoryNameIgnoreCaseAndMinPlayersLessThanEqualAndMaxPlayersGreaterThanEqual(String category, int minPlayer, int maxPlayer);

    // By Play Time & Category & Num Players
    List<BoardGame> findByPlayTimeLessThanEqualAndGameCategoryNameIgnoreCaseAndMinPlayersLessThanEqualAndMaxPlayersGreaterThanEqual(int minutes, String category, int minPlayer, int maxPlayer);



}
