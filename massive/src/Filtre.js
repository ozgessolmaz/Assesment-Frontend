import React from 'react';
import './App.css';

const Filtre = ({ setFiltre }) => {
  const handleFiltreChange = (e) => {
    const { name, value } = e.target;

    setFiltre((prevFiltre) => ({
      ...prevFiltre,
      [name]: value,
    }));
  };

  return (
    <div className="filtre">
      <input
        type="text"
        name="name"
        placeholder="Filter by Name"
        onChange={handleFiltreChange}
      />
      <input
        type="text"
        name="species"
        placeholder="Filter by Species"
        onChange={handleFiltreChange}
      />
      <select name="status" onChange={handleFiltreChange}>
        <option value="">All Status</option>
        <option value="alive">Alive</option>
        <option value="dead">Dead</option>
        <option value="unknown">Unknown</option>
      </select>
    </div>
  );
};

export default Filtre;
