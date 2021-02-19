package com.example.finalproject.server.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name="categories")
public class CategoryType {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name="bga_id")
    private String bgaId;

    @Column
    private String name;

    @OneToMany(mappedBy="categoryType")
    @JsonIgnoreProperties({"categoryType"})
    private List<BoardGameCategory> boardGameCategories;

    public CategoryType(String bgaId, String name) {
        this.bgaId = bgaId;
        this.name = name;
        this.boardGameCategories = new ArrayList<>();
    }

    public CategoryType() {
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

    public List<BoardGameCategory> getBoardGameCategories() {
        return boardGameCategories;
    }

    public void setBoardGameCategories(List<BoardGameCategory> boardGameCategories) {
        this.boardGameCategories = boardGameCategories;
    }
}
