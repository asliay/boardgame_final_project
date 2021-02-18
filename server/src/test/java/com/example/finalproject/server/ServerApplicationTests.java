package com.example.finalproject.server;

import com.example.finalproject.server.models.BoardGame;
import com.example.finalproject.server.repositories.BoardGameRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
class ServerApplicationTests {

	@Autowired
	BoardGameRepository boardGameRepository;

	@Test
	void contextLoads() {
	}

	@Test
	void canCreateAndSave() {
		BoardGame catan = new BoardGame("Settlers of Catan", 1995, 3, 4, 120, "Strategy",
				"https://cf.geekdo-images.com/W3Bsga_uLP9kO91gZ7H8yw__thumb/img/8a9HeqFydO7Uun_le9bXWPnidcA=/fit-in/200x150/filters:strip_icc()/pic2419375.jpg",
				"https://images-na.ssl-images-amazon.com/images/I/81eKRDSc-PL._AC_SL1500_.jpg");
		boardGameRepository.save(catan);
	}

}
