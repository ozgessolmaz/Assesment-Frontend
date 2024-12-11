import React, { useState, useEffect } from 'react';
import Karakter from './Karakter';
import KarakterDetay from './KarakterDetay';
import Filtre from './Filtre';

function App() {
  const [karakterler, setKarakterler] = useState([]); 
  const [selectedKarakter, setSelectedKarakter] = useState(null); 
  const [info, setInfo] = useState({ pages: 1 }); 
  const [page, setPage] = useState(1); 
  const [filtre, setFiltre] = useState({ name: '', species: '', status: '' }); 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const query = new URLSearchParams({
          page,
          name: filtre.name || '',
          species: filtre.species || '',
          status: filtre.status || '',
        }).toString();

        const response = await fetch(`https://rickandmortyapi.com/api/character?${query}`);
        const data = await response.json();

        if (data.results) {
          setKarakterler(data.results); 
          setInfo(data.info); 
        } else {
          setKarakterler([]);
        }
      } catch (error) {
        console.error('API çağrısı sırasında hata oluştu:', error);
      }
    };

    fetchData();
  }, [page, filtre]); 
  return (
    <div>
      <Filtre setFiltre={setFiltre} />
      <Karakter
        karakterler={karakterler}
        setSelectedKarakter={setSelectedKarakter}
        info={info}
        setPage={setPage}
      />
      {selectedKarakter && (
        <KarakterDetay
          karakter={selectedKarakter}
        />
      )}
    </div>
  );
}

export default App;
