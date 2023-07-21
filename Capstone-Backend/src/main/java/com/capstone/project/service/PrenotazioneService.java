package com.capstone.project.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.capstone.project.entity.Prenotazione;
import com.capstone.project.repository.PrenotazioniRepository;

@Service
public class PrenotazioneService {
@Autowired PrenotazioniRepository prenotazioniRepository;

public Prenotazione salvaPrenotazione(Prenotazione p) {
	return prenotazioniRepository.save(p);
}


public List<Prenotazione> cercaTuttePrenotazioni(){

	return prenotazioniRepository.findAll();
}




}


