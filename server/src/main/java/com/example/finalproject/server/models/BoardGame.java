package com.example.finalproject.server.models;

import javax.persistence.*;

@Entity
@Table(name = "board_games")
public class BoardGame {

    @Column
    private String name;

    @Column(name = "release_year")
    private int releaseYear;

    @Column(name = "min_players")
    private int minPlayers;

    @Column(name = "max_players")
    private int maxPlayers;

    @Column(name = "min_play_time")
    private int minPlayTime;

    @Column(name = "max")
    private int maxPlayTime;

    @Column
    private String category;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    public BoardGame(String name, int releaseYear, int minPlayers, int maxPlayers, int minPlayTime, int maxPlayTime, String category) {
        this.name = name;
        this.releaseYear = releaseYear;
        this.minPlayers = minPlayers;
        this.maxPlayers = maxPlayers;
        this.minPlayTime = minPlayTime;
        this.maxPlayTime = maxPlayTime;
        this.category = category;
    }

    public BoardGame() {
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getReleaseYear() {
        return releaseYear;
    }

    public void setReleaseYear(int releaseYear) {
        this.releaseYear = releaseYear;
    }

    public int getMinPlayers() {
        return minPlayers;
    }

    public void setMinPlayers(int minPlayers) {
        this.minPlayers = minPlayers;
    }

    public int getMaxPlayers() {
        return maxPlayers;
    }

    public void setMaxPlayers(int maxPlayers) {
        this.maxPlayers = maxPlayers;
    }

    public int getMinPlayTime() {
        return minPlayTime;
    }

    public void setMinPlayTime(int minPlayTime) {
        this.minPlayTime = minPlayTime;
    }

    public int getMaxPlayTime() {
        return maxPlayTime;
    }

    public void setMaxPlayTime(int maxPlayTime) {
        this.maxPlayTime = maxPlayTime;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }
}

