package com.example.finalproject.server.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;

@Entity
@Table(name = "board_game_categories")
public class BoardGameCategory {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "board_game_id", nullable = false)
    @JsonIgnoreProperties({"boardGameCategories"})
    private BoardGame boardGame;

    @ManyToOne
    @JoinColumn(name = "category_type_id", nullable = false)
    @JsonIgnoreProperties({"boardGameCategories"})
    private CategoryType categoryType;

    public BoardGameCategory(BoardGame boardGame, CategoryType categoryType) {
        this.boardGame = boardGame;
        this.categoryType = categoryType;
    }

    public BoardGameCategory() {
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

    public CategoryType getCategoryType() {
        return categoryType;
    }

    public void setCategoryType(CategoryType categoryType) {
        this.categoryType = categoryType;
    }
}
