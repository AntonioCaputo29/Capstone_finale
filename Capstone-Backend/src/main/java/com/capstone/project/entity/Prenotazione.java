package com.capstone.project.entity;

import java.time.LocalDate;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table (name="prenotazioni")
@NoArgsConstructor
@AllArgsConstructor
@Data

public class Prenotazione {
@Id	
@GeneratedValue(strategy = GenerationType.IDENTITY)
private Long id;

@Column(nullable = false)
private String nome;

@Column(nullable = false)
private String cognome;

@Column(nullable = false)
private String mail;

@Column(nullable = false)
private String telefono;

@Column(nullable = false, name="data_prenotazione")
private LocalDate dataPrenotazione;

@Column(nullable = false, name="numero_persone")
private Integer numeroPersone;

private Boolean bambini;

private String messaggio;

}
