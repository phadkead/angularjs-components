package com.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.model.Player;
import com.repository.PlayerRepository;

@RestController
@RequestMapping("players")
public class MainController {
	
	@Autowired
	PlayerRepository repository;
	
	@RequestMapping(value="/{name}", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	public Player getPlayer(@PathVariable String name){
		return repository.findByName("Novak Djokovic");
	}
	
}
