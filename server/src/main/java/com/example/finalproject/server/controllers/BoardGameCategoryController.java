package com.example.finalproject.server.controllers;

import com.example.finalproject.server.repositories.BoardGameCategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class BoardGameCategoryController {

    @Autowired
    BoardGameCategoryRepository boardGameCategoryRepository;
}
