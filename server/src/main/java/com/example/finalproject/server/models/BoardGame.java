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

    @Column(name = "play_time")
    private int playTime;

    @Column
    private String category;

    @Column
    private String thumbnailURL;

    @Column
    private String boxImageURL;


    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    public BoardGame(String name, int releaseYear, int minPlayers, int maxPlayers, int playTime, String category,
                     String thumbnailURL,
                     String boxImageURL) {
        this.name = name;
        this.releaseYear = releaseYear;
        this.minPlayers = minPlayers;
        this.maxPlayers = maxPlayers;
        this.playTime = playTime;
        this.category = category;
        this.thumbnailURL = thumbnailURL;
        this.boxImageURL = boxImageURL;
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

    public int getPlayTime() {
        return playTime;
    }

    public void setPlayTime(int playTime) {
        this.playTime = playTime;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public String getThumbnailURL() {
        return thumbnailURL;
    }

    public void setThumbnailURL(String thumbnailURL) {
        this.thumbnailURL = thumbnailURL;
    }

    public String getBoxImageURL() {
        return boxImageURL;
    }

    public void setBoxImageURL(String boxImageURL) {
        this.boxImageURL = boxImageURL;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }
}

