package com.example.finalproject.server.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import org.hibernate.annotations.Cascade;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Entity
@Table(name="users")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name="first_name")
    private String firstName;

    @Column(name = "last_name")
    private String lastName;

//    @Column
//    private int age;

    @Column(name="d.o.b.")
    private String dob;

    @Column
    private String email;

    @ManyToMany
    @JsonIgnoreProperties({"ownedBy", "wantedBy"})
    @Cascade(org.hibernate.annotations.CascadeType.SAVE_UPDATE)
    @JoinTable(
            name = "users_boardgames_owned",
            joinColumns = {
                    @JoinColumn(
                            name = "user_id",
                            nullable = false,
                            updatable = false
                    )
            },
            inverseJoinColumns = {
                    @JoinColumn(
                            name = "game_id",
                            nullable = false,
                            updatable = false
                    )
            }
    )
    private List<BoardGame> ownedGames;

    @ManyToMany
    @JsonIgnoreProperties({"wantedBy", "ownedBy"})
    @Cascade(org.hibernate.annotations.CascadeType.SAVE_UPDATE)
    @JoinTable(
            name = "users_boardgames_wish",
            joinColumns = {
                    @JoinColumn(
                            name = "user_id",
                            nullable = false,
                            updatable = false
                    )
            },
            inverseJoinColumns = {
                    @JoinColumn(
                            name = "game_id",
                            nullable = false,
                            updatable = false
                    )
            }
    )
    private List<BoardGame> wishList;

    public User(String firstName, String lastName, String dob, String email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.dob = dob;
        this.email = email;
        this.ownedGames = new ArrayList();
        this.wishList = new ArrayList();
    }

    public User() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

//    public int getAge() {
//        return age;
//    }
//
//    public void setAge(int age) {
//        this.age = age;
//    }

    public String getDob() {
        return dob;
    }

    public void setDob(String dob) {
        this.dob = dob;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public List<BoardGame> getOwnedGames() {
        return ownedGames;
    }

    public void setOwnedGames(List<BoardGame> ownedGames) {
        this.ownedGames = ownedGames;
    }

    public List<BoardGame> getWishList() {
        return wishList;
    }

    public void setWishList(List<BoardGame> wishList) {
        this.wishList = wishList;
    }

    public void addGameToOwnedList(BoardGame boardGame){
        this.ownedGames.add(boardGame);
    }

    public void removeGameFromOwnedList(BoardGame boardGame){
        this.ownedGames.remove(boardGame);
    }

    public void addGameToWishList(BoardGame boardGame){
        this.wishList.add(boardGame);
    }

    public void removeGameFromWishList(BoardGame boardGame){
        this.wishList.remove(boardGame);
    }
}
