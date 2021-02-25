package com.example.finalproject.server.repositories;

import com.example.finalproject.server.models.BoardGame;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface BoardGameRepository extends JpaRepository<BoardGame, Long> {

    // Playing Time Query
    List<BoardGame> findByMinPlayTimeLessThanEqualAndMaxPlayTimeGreaterThanEqualOrderByRankAsc(int minPlayTime,
                                                                                               int maxPlayTime);

    // By Category Name
     List<BoardGame> findByGameCategoryNameIgnoreCaseOrderByRankAsc(String categoryName);

    // By Num Players
    List<BoardGame>
    findByMinPlayersLessThanEqualAndMaxPlayersGreaterThanEqualOrderByRankAsc(int minPlayer,
                                                                             int maxPlayer );

    // COMBINED:
    // By Play Time & Category Name
    List<BoardGame>
    findByMinPlayTimeLessThanEqualAndMaxPlayTimeGreaterThanEqualAndGameCategoryNameIgnoreCaseOrderByRankAsc(int minPlayTime,
                                                                              int maxPlayTime,
                                                                              String category);
    // By Play Time & Num Players
    List<BoardGame>
    findByMinPlayTimeLessThanEqualAndMaxPlayTimeGreaterThanEqualAndMinPlayersLessThanEqualAndMaxPlayersGreaterThanEqualOrderByRankAsc(int minPlayTime,
                                                                                                        int maxPlayTime,
                                                                                                        int minPlayer,
                                                                                                        int maxPlayer);

    // By Category Name & Num Players
    List<BoardGame>
    findByGameCategoryNameIgnoreCaseAndMinPlayersLessThanEqualAndMaxPlayersGreaterThanEqualOrderByRankAsc(String category,
                                                                                                          int minPlayer,
                                                                                                          int maxPlayer);

    // By Play Time & Category & Num Players
    List<BoardGame>
    findByMinPlayTimeLessThanEqualAndMaxPlayTimeGreaterThanEqualAndGameCategoryNameIgnoreCaseAndMinPlayersLessThanEqualAndMaxPlayersGreaterThanEqualOrderByRankAsc(int minPlayTime,
                                                                                                                       int maxPlayTime,
                                                                                                                       String category,
                                                                                                                       int minPlayer,
                                                                                                                       int maxPlayer);



}
