

package com.example.finalproject.server.components;

import com.example.finalproject.server.models.BoardGame;
import com.example.finalproject.server.repositories.BoardGameRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

@Component
public class DataLoader implements ApplicationRunner {

    @Autowired
    BoardGameRepository boardGameRepository;

    public DataLoader() {

    }

    public void run(ApplicationArguments args) {

        BoardGame catan = new BoardGame("Settlers of Catan", 1995, 3, 4, 120, "Strategy");
        boardGameRepository.save(catan);
        BoardGame coup = new BoardGame("Coup", 2012, 2, 6, 15, "Party");
        boardGameRepository.save(coup);
        BoardGame gloomhaven = new BoardGame("Gloomhaven", 2017, 1, 4, 120, "Strategy");
        boardGameRepository.save(gloomhaven);
        BoardGame codenames = new BoardGame("Codenames", 2015, 2, 8, 15, "Party");
        boardGameRepository.save(codenames);
        BoardGame unfair = new BoardGame("Unfair", 2017, 2, 5, 125, "Strategy");
        boardGameRepository.save(unfair);
        BoardGame ticketToRide = new BoardGame("Ticket to Ride", 2004, 2, 5, 60, "Family");
        boardGameRepository.save(ticketToRide);
        BoardGame pandemic = new BoardGame("Pandemic", 2008, 2, 4, 45, "Strategy");
        boardGameRepository.save(pandemic);
        BoardGame wingspan = new BoardGame("Wingspan", 2019, 1, 5, 70, "Strategy");
        boardGameRepository.save(wingspan);


        //Bill
        BoardGame carcassonne       = new BoardGame("Carcassonne", 2000, 2, 5, 45, "Family");
        BoardGame dominion          = new BoardGame("Dominion", 2008, 2, 4, 30, "Strategy");
        BoardGame dixit             = new BoardGame("Dixit", 2008, 3 , 6, 30, "Party");
        BoardGame arkhamHorrorThird = new BoardGame("Arkham Horror Third Edition", 2018, 1, 6, 108, "Thematic");
        BoardGame sevenWonders      = new BoardGame("7 Wonders", 2010, 2 , 7, 30, "Family");
        BoardGame trivialPursuit    = new BoardGame("Trivial Pursuit", 1979, 2, 24, 45, "Party");
        BoardGame terraformingMars  = new BoardGame("Terraforming Mars", 2016, 1, 5, 120, "Strategy");

        boardGameRepository.save(carcassonne);
        boardGameRepository.save(dominion);
        boardGameRepository.save(dixit);
        boardGameRepository.save(arkhamHorrorThird);
        boardGameRepository.save(sevenWonders);
        boardGameRepository.save(trivialPursuit);
        boardGameRepository.save(terraformingMars);

        //Kurt
        BoardGame explodingKittens = new BoardGame("Exploding Kittens", 2015, 2, 5, 15, "Party");
        boardGameRepository.save(explodingKittens);

        BoardGame deadOfWinter = new BoardGame("Dead of Winter", 2014, 2, 5, 120, "Thematic");
        boardGameRepository.save(deadOfWinter);

        BoardGame secretHitler = new BoardGame("Secret Hitler", 2016, 5, 10, 45, "Party");
        boardGameRepository.save(secretHitler);

        BoardGame oneNightUltimateWerewolf = new BoardGame("One Night Ultimate Werewolf", 2014, 3, 10, 10, "Party");
        boardGameRepository.save(oneNightUltimateWerewolf);

        BoardGame wavelength = new BoardGame("Wavelength", 2019, 2, 12, 45, "Party");
        boardGameRepository.save(wavelength);

        BoardGame monopoly = new BoardGame("Monopoly", 1933, 2, 8, 180, "Family");
        boardGameRepository.save(monopoly);




        // Saerlaith

        BoardGame root = new BoardGame("Root", 2018, 2, 4, 90, "Strategy");
        boardGameRepository.save(root);

        BoardGame scythe = new BoardGame("Scythe", 2016, 1, 5, 115, "Strategy");
        boardGameRepository.save(scythe);

        BoardGame risk = new BoardGame("Risk", 1959, 2, 6, 120, "Family");
        boardGameRepository.save(risk);

        BoardGame mysterium = new BoardGame("Mysterium", 2015, 2, 7, 42, "Family");
        boardGameRepository.save(mysterium);

        BoardGame kingOfTokyo = new BoardGame("King of Tokyo", 2011, 2, 6, 30, "Family");
        boardGameRepository.save(kingOfTokyo);

        BoardGame loveLetter = new BoardGame("Love Letter", 2012, 2, 4, 20, "Family");
        boardGameRepository.save(loveLetter);

        BoardGame talesOfTheArabianNights = new BoardGame("Tales of the Arabian Nights", 2009, 1, 6, 120, "Thematic");
        boardGameRepository.save(talesOfTheArabianNights);
    }








}
