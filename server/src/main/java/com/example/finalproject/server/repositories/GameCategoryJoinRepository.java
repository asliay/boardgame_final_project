package com.example.finalproject.server.repositories;

import com.example.finalproject.server.models.GameCategoryJoin;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface GameCategoryJoinRepository extends JpaRepository<GameCategoryJoin, Long> {


}
