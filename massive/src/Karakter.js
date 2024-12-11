import React from 'react';
import ReactPaginate from 'react-paginate';
import './App.css';

const Karakter = ({ karakterler, setSelectedKarakter, info, setPage }) => {
  const handlePageChange = ({ selected }) => {
    setPage(selected + 1);
  };

  return (
    <div>
      {karakterler.length > 0 ? (
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Status</th>
              <th>Species</th>
              <th>Gender</th>
            </tr>
          </thead>
          <tbody>
            {karakterler.map((karakter) => (
              <tr key={karakter.id} onClick={() => setSelectedKarakter(karakter)}>
                <td>{karakter.name}</td>
                <td>{karakter.status}</td>
                <td>{karakter.species}</td>
                <td>{karakter.gender}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No characters found with the given filters.</p>
      )}

      {info && info.pages > 0 && (
        <ReactPaginate
          previousLabel={'Previous'}
          nextLabel={'Next'}
          pageCount={info.pages}
          onPageChange={handlePageChange}
          containerClassName={'pagination'}
          activeClassName={'active'}
        />
      )}
    </div>
  );
};

export default Karakter;
