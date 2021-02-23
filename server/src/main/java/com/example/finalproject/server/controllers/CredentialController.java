package com.example.finalproject.server.controllers;

import com.example.finalproject.server.models.Credential;
import com.example.finalproject.server.repositories.CredentialRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class CredentialController {

    @Autowired
    CredentialRepository credentialRepository;

    @GetMapping(value = "/credentials")
    public ResponseEntity<List<Credential>> getAllCredentials() {
        List<Credential> allCredentials = credentialRepository.findAll();
        return new ResponseEntity<>(allCredentials, HttpStatus.OK);
    }




}
