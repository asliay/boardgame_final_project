package com.example.finalproject.server.repositories;

import com.example.finalproject.server.models.CategoryType;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CategoryTypeRepository extends JpaRepository<CategoryType, Long> {
}
