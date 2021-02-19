package com.example.finalproject.server.repositories;

import com.example.finalproject.server.models.BoardGameCategory;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BoardGameCategoryRepository  extends JpaRepository<BoardGameCategory, Long> {
}
