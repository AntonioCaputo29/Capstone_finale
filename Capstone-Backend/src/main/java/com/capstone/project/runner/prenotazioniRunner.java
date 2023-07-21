package com.capstone.project.runner;

import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class prenotazioniRunner implements CommandLineRunner {

	@Override
	public void run(String... args) throws Exception {
		System.out.println("prenotazioni Runner");
		
	}

}
