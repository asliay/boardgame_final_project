package com.example.finalproject.server;

import com.example.finalproject.server.models.BoardGame;

import com.example.finalproject.server.models.User;
import com.example.finalproject.server.repositories.BoardGameRepository;
import com.example.finalproject.server.repositories.UserRepository;
import com.example.finalproject.server.models.Category;
import com.example.finalproject.server.repositories.CategoryRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import static org.junit.jupiter.api.Assertions.assertEquals;

@SpringBootTest
class ServerApplicationTests {

	@Autowired
	BoardGameRepository boardGameRepository;

	@Autowired
	CategoryRepository categoryRepository;

	@Autowired
	UserRepository userRepository;

	@Test
	void contextLoads() {
	}

	@Test
	void canCreateAndSave() {
		BoardGame catan = new BoardGame("Settlers of Catan", 1995, 3, 4, 120,
				"https://cf.geekdo-images.com/W3Bsga_uLP9kO91gZ7H8yw__thumb/img/8a9HeqFydO7Uun_le9bXWPnidcA=/fit-in/200x150/filters:strip_icc()/pic2419375.jpg",
				"https://images-na.ssl-images-amazon.com/images/I/81eKRDSc-PL._AC_SL1500_.jpg", 2, "Stuff");
		boardGameRepository.save(catan);
	}

	@Test
	void canGetCategoryFromGame(){
		BoardGame catan = new BoardGame("Settlers of Catan", 1995, 3, 4, 120,
				"https://cf.geekdo-images.com/W3Bsga_uLP9kO91gZ7H8yw__thumb/img/8a9HeqFydO7Uun_le9bXWPnidcA=/fit-in/200x150/filters:strip_icc()/pic2419375.jpg",
				"https://images-na.ssl-images-amazon.com/images/I/81eKRDSc-PL._AC_SL1500_.jpg", 1, "other things");
		boardGameRepository.save(catan);

		Category family = new Category("7rV11PKqME", "Family");
		categoryRepository.save(family);


	}

	@Test
	void canCreateAndSaveNewUser(){
		long originalCount = userRepository.count();
		User bobAdams = new User( "Bob", "Adams", "1985-10-20", "bob.adams@gmail.com");
		userRepository.save(bobAdams);
		long newCount = userRepository.count();
		assertEquals(0, originalCount);
		assertEquals(1, newCount);
	}

	@Test
	void canRemoveGameFromUser(){
		User bobAdams = new User( "Bob", "Adams", "1985-10-20", "bob.adams@gmail.com");
		userRepository.save(bobAdams);
		BoardGame catan = new BoardGame("Settlers of Catan 3", 1995, 3, 4, 120,
				"https://cf.geekdo-images.com/W3Bsga_uLP9kO91gZ7H8yw__thumb/img/8a9HeqFydO7Uun_le9bXWPnidcA=/fit-in/200x150/filters:strip_icc()/pic2419375.jpg",
				"https://images-na.ssl-images-amazon.com/images/I/81eKRDSc-PL._AC_SL1500_.jpg", 1, "other things");
		boardGameRepository.save(catan);
		bobAdams.addGameToOwnedList(catan);
		BoardGame wavelength = new BoardGame("Wavelength", 2019, 2, 12, 45,
				"https://cf.geekdo-images.com/z4fbPdmJg_5yphJEvql4ZA__thumb/img/bxLuHVLF-Y06jWRSKA-tuQ3YYcE=/fit-in/200x150/filters:strip_icc()/pic4552862.png",
				"https://images-na.ssl-images-amazon.com/images/I/91QcesYc0CL._AC_SL1500_.jpg", 13, "seed placeholder");
		boardGameRepository.save(wavelength);
		bobAdams.addGameToOwnedList(wavelength);
		userRepository.save(bobAdams);
		int arraySizeAfterInsertion = bobAdams.getOwnedGames().size();
		bobAdams.removeGameFromOwnedList(wavelength);
		userRepository.save(bobAdams);
		assertEquals(2, arraySizeAfterInsertion);
		assertEquals(1,bobAdams.getOwnedGames().size());
	}

}
