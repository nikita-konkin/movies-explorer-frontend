import React, { useContext } from 'react';



export default function SearchForm() {
  return (
    <form className="form-search">
      <div className="form-search__container">
        <input type="text" name="search-box" className="form-search__input"/>
        <input type="submit" value="Submit" className="form-search__btn-submit"/>
      </div>
        <label className="form-search__lable">
          Короткометражки
        </label>
        <button onclick="" className="form-search__btn-switch">
          btn
        </button>
    </form>
  );
}
