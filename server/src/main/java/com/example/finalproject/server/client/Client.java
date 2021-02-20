package com.example.finalproject.server.client;
import com.example.finalproject.server.models.BoardGame;
import com.example.finalproject.server.secrets.Secrets;
import com.fasterxml.jackson.databind.DeserializationFeature;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.datatype.jsr310.JavaTimeModule;
import org.springframework.stereotype.Component;
import org.springframework.web.client.RestTemplate;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

@Component
public class Client {

    // Url and and Client_id for BGA API GET queries.
    Secrets secrets = new Secrets();
    String baseURL = "https://api.boardgameatlas.com/api/search?" ;

    // Inin of object mapper to turn json string to JsonNode structure.
    private static ObjectMapper objectMapper = getDefaultObjectMapper();

    // Custom configuration for object mapper, ignores unknown properties in json.
    // Java time module in case we want to parse times later.
    private static ObjectMapper getDefaultObjectMapper(){
        ObjectMapper defaultObjectMapper = new ObjectMapper();
        defaultObjectMapper.registerModule(new JavaTimeModule());
        defaultObjectMapper.configure(DeserializationFeature.FAIL_ON_UNKNOWN_PROPERTIES, false);
        return defaultObjectMapper;
    };

    // Parsing method for use on the returned json string from restTemplate.
    public static JsonNode parse(String src) throws IOException {
         return objectMapper.readTree(src);
    }

    // Method for getting top 10 games from BGA.
    public ArrayList<BoardGame> getTopTenGames() {

        ArrayList<BoardGame> boardGamesOuput = new ArrayList<>();

        RestTemplate restTemplate = new RestTemplate();

        String responseString = restTemplate.getForObject(baseURL +
                        "limit=10&order_by=popularity&fields=name,year_published," +
                        "min_players,max_players,max_playtime,thumb_url,image_url" +
                        "&client_id=" + secrets.getClient_id(),
                        String.class);

        System.out.println(responseString);

        try {
            JsonNode node = parse(responseString);
            List<JsonNode> names         = node.findValues("name");
            List<JsonNode> releaseYears  = node.findValues("year_published");
            List<JsonNode> minPlayers    = node.findValues("min_players");
            List<JsonNode> maxPlayers    = node.findValues("max_players");
            List<JsonNode> playTimes     = node.findValues("max_playtime");
            List<JsonNode> thumbnailUrls = node.findValues("thumb_url");
            List<JsonNode> boxImageUrls  = node.findValues("image_url");

            for(int i = 0; i < names.size(); i++){
                BoardGame bg = new BoardGame(names.get(i).asText(), releaseYears.get(i).asInt(),
                                            minPlayers.get(i).asInt(), maxPlayers.get(i).asInt(),
                                            playTimes.get(i).asInt(), thumbnailUrls.get(i).asText(),
                                            boxImageUrls.get(i).asText());
                boardGamesOuput.add(bg);
            }

        } catch (IOException e) {
            e.printStackTrace();
        }

        return boardGamesOuput;

    }

}
