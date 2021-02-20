package com.example.finalproject.server.controllers;

import com.example.finalproject.server.repositories.GameCategoryJoinRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class GameCategoryJoinController {

    @Autowired
    GameCategoryJoinRepository gameCategoryJoinRepository;
}
