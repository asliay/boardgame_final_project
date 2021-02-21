package com.example.finalproject.server.client;
import com.example.finalproject.server.models.BoardGame;
import com.example.finalproject.server.models.Category;
import com.example.finalproject.server.secrets.Secrets;
import com.fasterxml.jackson.databind.DeserializationFeature;
import com.fasterxml.jackson.databind.JsonNode;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.datatype.jsr310.JavaTimeModule;
import org.springframework.stereotype.Component;
import org.springframework.web.client.RestTemplate;

import java.io.IOException;
import java.util.*;

@Component
public class Client {

    // Url and and Client_id for BGA API GET queries.
    Secrets secrets = new Secrets();
    String baseSearchURL   = "https://api.boardgameatlas.com/api/search?";
    String baseCategoryURL = "https://api.boardgameatlas.com/api/game/categories?";

    // Inin of object mapper to turn json string to JsonNode structure.
    private static ObjectMapper objectMapper = getDefaultObjectMapper();

    // Rest template for fetching from BGA API.
    private RestTemplate restTemplate = new RestTemplate();

    // Custom configuration for object mapper, ignores unknown properties in json.
    // Java time module in case we want to parse java times later.
    private static ObjectMapper getDefaultObjectMapper(){
        ObjectMapper defaultObjectMapper = new ObjectMapper();
        defaultObjectMapper.registerModule(new JavaTimeModule());
        defaultObjectMapper.configure(DeserializationFeature.FAIL_ON_UNKNOWN_PROPERTIES, false);
        return defaultObjectMapper;
    };

    // Parsing method for use on the returned JSON string from restTemplate.
    private static JsonNode parse(String src) throws IOException {
         return objectMapper.readTree(src);
    }

    // Gets a give number of board games from BGA by popularity.
    public HashMap<BoardGame, List<String>> getBoardGamesFromBGA(int numberOfGames) {

        JsonNode output = null;
        HashMap<BoardGame, List<String>> outputMap = new HashMap<>();

        String responseString =  restTemplate.getForObject(baseSearchURL +
                     "limit="+numberOfGames+"&order_by=popularity&fields=name," +
                     "year_published,min_players,max_players,max_playtime," +
                     "thumb_url,image_url,categories&client_id=" + secrets.getClient_id(), String.class);

        try {
            JsonNode node  = parse(responseString);
            JsonNode games = node.get("games");
            for (JsonNode j : games) {
                BoardGame bg = new BoardGame(j.get("name").asText(), j.get("year_published").asInt(),
                        j.get("min_players").asInt(), j.get("max_players").asInt(),
                        j.get("max_playtime").asInt(), j.get("thumb_url").asText(),
                        j.get("image_url").asText());
                List<JsonNode> catNodes = j.get("categories").findValues("id");
                ArrayList<String> catStrings = new ArrayList<>();
                for (JsonNode i : catNodes) {
                        catStrings.add(String.valueOf(i));
                }
                outputMap.put(bg, catStrings);
            }
        }
        catch (IOException e) {
            e.printStackTrace();
        }
        return outputMap;
    }

    // Generates categories list when given JSON string.
    private ArrayList<Category> generateCategories(String responseString){

        ArrayList<Category> categoriesOutput = new ArrayList<>();

        try {
            JsonNode node = parse(responseString);
            List<JsonNode> ids   = node.findValues("id");
            List<JsonNode> names = node.findValues("name");

            for(int i = 0; i < ids.size(); i++){
                Category category = new Category(ids.get(i).asText(), names.get(i).asText());
                categoriesOutput.add(category);
            }

        } catch (IOException e) {
            e.printStackTrace();
        }

        return categoriesOutput;
    }

    // Gets all categories from BGA API.
    public ArrayList<Category> getAllCatergories(){

        String responseString =  restTemplate.getForObject(baseCategoryURL +
                                 "client_id=" + secrets.getClient_id(), String.class);

        return generateCategories(responseString);
    }

}
