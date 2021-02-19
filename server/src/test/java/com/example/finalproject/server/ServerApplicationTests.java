package com.example.finalproject.server;

import com.example.finalproject.server.models.BoardGame;
import com.example.finalproject.server.models.BoardGameCategory;
import com.example.finalproject.server.models.CategoryType;
import com.example.finalproject.server.repositories.BoardGameCategoryRepository;
import com.example.finalproject.server.repositories.BoardGameRepository;
import com.example.finalproject.server.repositories.CategoryTypeRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
class ServerApplicationTests {

	@Autowired
	BoardGameRepository boardGameRepository;

	@Autowired
	CategoryTypeRepository categoryTypeRepository;

	@Autowired
	BoardGameCategoryRepository boardGameCategoryRepository;

	@Test
	void contextLoads() {
	}

	@Test
	void canCreateAndSave() {
		BoardGame catan = new BoardGame("Settlers of Catan", 1995, 3, 4, 120,
				"https://cf.geekdo-images.com/W3Bsga_uLP9kO91gZ7H8yw__thumb/img/8a9HeqFydO7Uun_le9bXWPnidcA=/fit-in/200x150/filters:strip_icc()/pic2419375.jpg",
				"https://images-na.ssl-images-amazon.com/images/I/81eKRDSc-PL._AC_SL1500_.jpg");
		boardGameRepository.save(catan);
	}

	@Test
	void canGetCategoryFromGame(){
		BoardGame catan = new BoardGame("Settlers of Catan", 1995, 3, 4, 120,
				"https://cf.geekdo-images.com/W3Bsga_uLP9kO91gZ7H8yw__thumb/img/8a9HeqFydO7Uun_le9bXWPnidcA=/fit-in/200x150/filters:strip_icc()/pic2419375.jpg",
				"https://images-na.ssl-images-amazon.com/images/I/81eKRDSc-PL._AC_SL1500_.jpg");
		boardGameRepository.save(catan);

		CategoryType family = new CategoryType("7rV11PKqME", "Family");
		categoryTypeRepository.save(family);

		BoardGameCategory bgc1 = new BoardGameCategory(catan, family);
		boardGameCategoryRepository.save(bgc1);
	}

}
