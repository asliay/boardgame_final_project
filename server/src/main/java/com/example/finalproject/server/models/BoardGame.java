package com.example.finalproject.server.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

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

    @OneToMany(mappedBy="boardGame")
    @JsonIgnoreProperties({"boardGame"})
    private List<BoardGameCategory> boardGameCategories;

    @Column
    private String thumbnailURL;

    @Column
    private String boxImageURL;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    public BoardGame(String name, int releaseYear, int minPlayers, int maxPlayers, int playTime,
                     String thumbnailURL,
                     String boxImageURL) {
        this.name = name;
        this.releaseYear = releaseYear;
        this.minPlayers = minPlayers;
        this.maxPlayers = maxPlayers;
        this.playTime = playTime;
        this.thumbnailURL = thumbnailURL;
        this.boxImageURL = boxImageURL;
        this.boardGameCategories = new ArrayList<>();
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

    public List<BoardGameCategory> getBoardGameCategoryList() {
        return boardGameCategories;
    }

    public void setBoardGameCategoryList(List<BoardGameCategory> boardGameCategories) {
        this.boardGameCategories = boardGameCategories;
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

