package com.example.finalproject.server.repositories;

import com.example.finalproject.server.models.Category;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CategoryRepository extends JpaRepository<Category, Long> {

    List<Category> findByGameCategoryJoinsBoardGameNameIgnoreCase(String boardGame);
}
