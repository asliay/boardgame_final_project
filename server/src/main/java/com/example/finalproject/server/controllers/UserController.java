package com.example.finalproject.server.controllers;

import com.example.finalproject.server.models.BoardGame;
import com.example.finalproject.server.models.Credential;
import com.example.finalproject.server.models.User;
import com.example.finalproject.server.repositories.CredentialRepository;
import com.example.finalproject.server.repositories.UserRepository;
import com.fasterxml.jackson.databind.DeserializationFeature;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.datatype.jsr310.JavaTimeModule;
import org.apache.velocity.exception.ResourceNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.util.List;
import java.util.Optional;

@RestController
public class UserController {

    @Autowired
    UserRepository userRepository;

    @Autowired
    CredentialRepository credentialRepository;

    // Inin of object mapper to turn json string to JsonNode structure.
    private static ObjectMapper objectMapper = getDefaultObjectMapper();

    // Custom configuration for object mapper, ignores unknown properties in json.
    // Java time module in case we want to parse java times later.
    private static ObjectMapper getDefaultObjectMapper(){
        ObjectMapper defaultObjectMapper = new ObjectMapper();
        defaultObjectMapper.configure(DeserializationFeature.FAIL_ON_UNKNOWN_PROPERTIES, false);
        return defaultObjectMapper;
    };

    // Parsing method for use on the returned JSON string from restTemplate.
    private static JsonNode parse(String src) throws IOException {
        return objectMapper.readTree(src);
    }

    @GetMapping("/users")
    public ResponseEntity<List<User>> getAllUsers() {
//        System.out.println("hi!");
        return new ResponseEntity<>(userRepository.findAll(), HttpStatus.OK);
    }

    // Checking User Credentials and returning User
    @PostMapping("/login")
    public ResponseEntity<User> getUserByCredentials(@RequestBody String input) {
        System.out.println(input);
        User foundUser = new User();
        try {
            JsonNode node = parse(input);
            String email = node.get("userName").asText();
            String password = node.get("password").asText();
            foundUser = userRepository.findByCredentialEmailAndCredentialPassword(email, password);

        } catch (IOException e) {
            e.printStackTrace();
        }
        return new ResponseEntity<>(foundUser, HttpStatus.OK);
    }


    @GetMapping("/users/{id}")
    public ResponseEntity<Optional<User>> getUser(@PathVariable Long id) {
        return new ResponseEntity<>(userRepository.findById(id), HttpStatus.OK);
    }



    @PostMapping("/users")
    public ResponseEntity<String> createUserWithCredential(@RequestBody String input) {

        try {
            JsonNode node = parse(input);
            Credential cr = new Credential(node.get("email").asText(), node.get("password").asText());
            User user     = new User(node.get("firstName").asText(), node.get("lastName").asText(),
                                    node.get("dob").asText());
            userRepository.save(user);
            user.setCredential(cr);
            cr.setUser(user);
            userRepository.save(user);

        } catch (IOException e) {
            e.printStackTrace();
        }

        return  new ResponseEntity<>(HttpStatus.CREATED);

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
        if (targetList.equalsIgnoreCase("removeOwn")){
            user.removeGameFromOwnedList(game);
        } else if (targetList.equalsIgnoreCase("wish")){
            user.removeGameFromWishList(game);
        }
        final User updatedUser = userRepository.save(user);
        return new ResponseEntity<>(updatedUser, HttpStatus.OK);
    }
}
