import React from 'react';
import './App.css';

const KarakterDetay = ({ karakter }) => {
  if (!karakter) return null;

  return (
    <div className="karakter-detay">
      <h2>{karakter.name}</h2>
      <img src={karakter.image} alt={karakter.name} />
      <p><strong>Status:</strong> {karakter.status}</p>
      <p><strong>Species:</strong> {karakter.species}</p>
      <p><strong>Gender:</strong> {karakter.gender}</p>
      <p><strong>Location:</strong> {karakter.location.name}</p>
    </div>
  );
};

export default KarakterDetay;
