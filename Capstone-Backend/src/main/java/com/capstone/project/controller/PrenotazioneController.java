package com.capstone.project.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.capstone.project.entity.Prenotazione;
import com.capstone.project.service.PrenotazioneService;

@RestController
@RequestMapping ("/prenotazioni")
public class PrenotazioneController {
	
@Autowired PrenotazioneService prenotazioneService;

@PostMapping ()
public ResponseEntity<Prenotazione> salvaprenotazione(@RequestBody Prenotazione p){
	return new ResponseEntity(prenotazioneService.salvaPrenotazione(p),HttpStatus.CREATED);
}



@GetMapping ("/tuttePrenotazioni")
public ResponseEntity<List<Prenotazione>> cercaTutteprenotazione(){
	return new ResponseEntity(prenotazioneService.cercaTuttePrenotazioni(),HttpStatus.OK);
}

}



