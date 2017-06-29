package com.repository;

import java.io.Serializable;

import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;

import com.model.Player;

public interface PlayerRepository extends MongoRepository<Player, Serializable> {
	public Player findByName(String name);

	public Player findById(ObjectId id);
}
