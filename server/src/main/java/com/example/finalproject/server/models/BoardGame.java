package com.example.finalproject.server.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import org.hibernate.annotations.Cascade;

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


    @Column
    private String thumbnailURL;

    @Column
    private String boxImageURL;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @OneToMany(mappedBy="boardGame")
    @JsonIgnoreProperties({"boardGame"})
    private List<GameCategoryJoin> gameCategoryJoins;

    @ManyToMany
    @JsonIgnoreProperties({"ownedGames"})
    @Cascade(org.hibernate.annotations.CascadeType.SAVE_UPDATE)
    @JoinTable(
            name = "users_boardgames_owned",
            joinColumns = {
                    @JoinColumn(
                            name = "game_id",
                            nullable = false,
                            updatable = false
                    )
            },
            inverseJoinColumns = {
                    @JoinColumn(
                            name = "user_id",
                            nullable = false,
                            updatable = false
                    )
            }
    )
    private List<User> ownedBy;

    @ManyToMany
    @JsonIgnoreProperties({"wishList"})
    @Cascade(org.hibernate.annotations.CascadeType.SAVE_UPDATE)
    @JoinTable(
            name = "users_boardgames_wish",
            joinColumns = {
                    @JoinColumn(
                            name = "game_id",
                            nullable = false,
                            updatable = false
                    )
            },
            inverseJoinColumns = {
                    @JoinColumn(
                            name = "user_id",
                            nullable = false,
                            updatable = false
                    )
            }
    )
    private List<User> wantedBy;

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
        this.gameCategoryJoins = new ArrayList<>();
        this.ownedBy = new ArrayList<>();
        this.wantedBy = new ArrayList<>();
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


    public List<GameCategoryJoin> getGameCategoryJoins() {
        return gameCategoryJoins;
    }

    public void setGameCategoryJoins(List<GameCategoryJoin> gameCategoryJoins) {
        this.gameCategoryJoins = gameCategoryJoins;
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

    public List<User> getOwnedBy() {
        return ownedBy;
    }

    public void setOwnedBy(List<User> ownedBy) {
        this.ownedBy = ownedBy;
    }

    public List<User> getWantedBy() {
        return wantedBy;
    }

    public void setWantedBy(List<User> wantedBy) {
        this.wantedBy = wantedBy;
    }
}

