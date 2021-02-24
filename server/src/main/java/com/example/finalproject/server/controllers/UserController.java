package com.example.finalproject.server.controllers;

import com.example.finalproject.server.models.BoardGame;
import com.example.finalproject.server.models.User;
import com.example.finalproject.server.repositories.UserRepository;
import org.apache.velocity.exception.ResourceNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
public class UserController {

    @Autowired
    UserRepository userRepository;

    @GetMapping("/users")
    public ResponseEntity<List<User>> getAllUsers() {
        return new ResponseEntity<>(userRepository.findAll(), HttpStatus.OK);
    }

    @GetMapping("/users/{id}")
    public ResponseEntity<Optional<User>> getUser(@PathVariable Long id) {
        return new ResponseEntity<>(userRepository.findById(id), HttpStatus.OK);
    }

    @PostMapping("/users")
    public ResponseEntity<User> createUser(@RequestBody User user) {
        userRepository.save(user);
        return new ResponseEntity<>(user, HttpStatus.CREATED);
    }

    @PutMapping("/users/{id}")
    public ResponseEntity<User> addGameToUserList(
            @RequestParam(name = "targetList", required = false) String targetList,
            @PathVariable Long id,
            @RequestBody BoardGame game
    ) throws ResourceNotFoundException {
        User user = userRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("User not found for this id :: " + id));
        targetList.trim();
        if (targetList.equalsIgnoreCase("own")){
            user.addGameToOwnedList(game);
        } else if (targetList.equalsIgnoreCase("wish")){
            user.addGameToWishList(game);
        }
        final User updatedUser = userRepository.save(user);
        return new ResponseEntity<>(updatedUser, HttpStatus.OK);
    }


    @PutMapping("/users/{id}/remove-game")
    public ResponseEntity<User> removeGameFromUserList(
            @RequestParam(name = "targetList", required = false) String targetList,
            @PathVariable Long id,
            @RequestBody BoardGame game
    ) throws ResourceNotFoundException {
        User user = userRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("User not found for this id :: " + id));
        targetList.trim();
        if (targetList.equalsIgnoreCase("own")){
            user.removeGameFromOwnedList(game);
        } else if (targetList.equalsIgnoreCase("wish")){
            user.removeGameFromWishList(game);
        }
        final User updatedUser = userRepository.save(user);
        return new ResponseEntity<>(updatedUser, HttpStatus.OK);
    }
}
