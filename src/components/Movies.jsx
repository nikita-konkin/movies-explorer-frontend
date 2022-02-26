import React, { useContext } from 'react';
import SearchForm from './SearchForm.jsx'

export default function Movies() {
  return (
    <main style={{ padding: "1rem 0" }}>
      <SearchForm />
      <h2>Movies</h2>
    </main>
  );
}
