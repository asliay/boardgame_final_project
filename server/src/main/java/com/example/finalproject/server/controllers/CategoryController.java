package com.example.finalproject.server.controllers;

import com.example.finalproject.server.models.BoardGame;
import com.example.finalproject.server.models.Category;
import com.example.finalproject.server.repositories.CategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Optional;

@RestController
public class CategoryController {

    @Autowired
    CategoryRepository categoryRepository;

    // INDEX

    @GetMapping(value = "/categories")
    public ResponseEntity<List<Category>> getAllCategories(
            @RequestParam(name = "category", required = false) String categoryName
    ) {
        // find categories by board game name
//        if (categoryName != null) {
//            List<Category> returnedCategories =
//                    categoryRepository.findByGameCategoryJoinsBoardGameNameIgnoreCase(categoryName);
//            return new ResponseEntity<>(returnedCategories, HttpStatus.OK);
//        }
        // find all categories
        List<Category> allCategories = categoryRepository.findAll();
        return new ResponseEntity<>(allCategories, HttpStatus.OK);
    }

    // Get Category by database ID

    @GetMapping(value = "/categories/{id}")
    public ResponseEntity<Optional<Category>> getCategoryById(@PathVariable Long id) {
        Optional<Category> category = categoryRepository.findById(id);
        return new ResponseEntity<>(category, HttpStatus.OK);
    }
}
