package com.example.finalproject.server.repositories;

import com.example.finalproject.server.models.Credential;
import com.example.finalproject.server.models.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {

    User findByCredentialEmailAndCredentialPassword(String email, String password);
}
