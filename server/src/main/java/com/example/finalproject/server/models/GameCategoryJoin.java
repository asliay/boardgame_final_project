package com.example.finalproject.server.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;

@Entity
@Table(name = "game_category_joins")
public class GameCategoryJoin {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "board_game_id", nullable = false)
    @JsonIgnoreProperties({"gameCategoryJoins"})
    private BoardGame boardGame;

    @ManyToOne
    @JoinColumn(name = "category_id", nullable = false)
    @JsonIgnoreProperties({"gameCategoryJoins"})
    private Category category;

    public GameCategoryJoin(BoardGame boardGame, Category category) {
        this.boardGame = boardGame;
        this.category = category;
    }

    public GameCategoryJoin() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public BoardGame getBoardGame() {
        return boardGame;
    }

    public void setBoardGame(BoardGame boardGame) {
        this.boardGame = boardGame;
    }

    public Category getCategory() {
        return category;
    }

    public void setCategory(Category category) {
        this.category = category;
    }
}
