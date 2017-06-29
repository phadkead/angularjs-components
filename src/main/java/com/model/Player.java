package com.model;

import java.util.List;

import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;

public class Player {
	
	@Id
	private ObjectId id;
	
	private String name;

	private List<String> tournaments;

	private int noOfMatchesPLayed;

	private int upVotes;

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public List<String> getTournaments() {
		return tournaments;
	}

	public void setTournaments(List<String> tournaments) {
		this.tournaments = tournaments;
	}

	public int getNoOfMatchesPLayed() {
		return noOfMatchesPLayed;
	}

	public void setNoOfMatchesPLayed(int noOfMatchesPLayed) {
		this.noOfMatchesPLayed = noOfMatchesPLayed;
	}

	public int getUpVotes() {
		return upVotes;
	}

	public void setUpVotes(int upVotes) {
		this.upVotes = upVotes;
	}

	public String getId() {
	    return id.toString();
	}
	public void setId(String id) {
	    this.id = new ObjectId(id);
	}
	
	@Override
	public String toString() {
		return "Player [name=" + name + ", tournaments=" + tournaments + ", noOfMatchesPLayed=" + noOfMatchesPLayed
				+ ", upVotes=" + upVotes + "]";
	}

}
