package com.example.finalproject.server.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import org.hibernate.annotations.Cascade;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name="categories")
public class Category {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;


    @Column(name="bga_id")
    private String bgaId;

    @Column
    private String name;

    @ManyToMany
    @JsonIgnoreProperties({"gameCategories", "ownedBy", "wantedBy"})
    @Cascade(org.hibernate.annotations.CascadeType.SAVE_UPDATE)
    @JoinTable(
            name = "boardgames_categories_join",
            joinColumns = {
                    @JoinColumn(
                            name = "category_bga_id",
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
    private List<BoardGame> boardGames;

    public Category(String bgaId, String name) {
        this.bgaId = bgaId;
        this.name = name;
    }

    public Category() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getBgaId() {
        return bgaId;
    }

    public void setBgaId(String bgaId) {
        this.bgaId = bgaId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public List<BoardGame> getBoardGames() {
        return boardGames;
    }

    public void setBoardGames(List<BoardGame> boardGames) {
        this.boardGames = boardGames;
    }
}
