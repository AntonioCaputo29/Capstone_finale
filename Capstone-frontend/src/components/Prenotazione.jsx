import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import ActivityForm from './ActivityForm';

function Prenotazione() {
  return (
    <div className="container my-custom-class  fw-bold">
      <h1 className="text-center">Prenota la tua giornata</h1>
      <p className="text-center">Trascorri assieme ai tuoi familiari, amici ecc, le tue vacanze insieme a noi</p>
      <p className="text-center">Nel nostro stabilimento troverai qualità, cortesia e specialmente tanti sorrisi</p>
      <ActivityForm />
    </div>
  );
}

export default Prenotazione;
