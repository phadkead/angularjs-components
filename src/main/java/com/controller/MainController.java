package com.controller;

import java.util.List;

import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.model.Player;
import com.repository.PlayerRepository;

@RestController
@RequestMapping("players")
public class MainController {
	
	@Autowired
	PlayerRepository repository;
	
	
	@RequestMapping(value="/", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	public List<Player> getAllPlayers(){
		return repository.findAll();
	}
	
	@RequestMapping(value="/{id}", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	public Player getPlayer(@PathVariable String id){
		return repository.findById(new ObjectId(id));
	}
	
	@RequestMapping(method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	public List<Player> getAllPlayersByTournamentPlayed(@RequestParam String tournament){
		return repository.findBytournaments(tournament);
	}
	
}
