package com;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import com.repository.PlayerRepository;

@RunWith(SpringRunner.class)
@SpringBootTest(classes = Application.class)
public class PlayerRepositoryTest {
	
	@Autowired
	PlayerRepository playerRepository;
	
	@Test
	public void test(){
		System.out.println(playerRepository.findByTournaments("Wimbeldon").size());
	}
	
}
