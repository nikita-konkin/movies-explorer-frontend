import React, { useContext, useState } from 'react';





export default function SearchForm() {

  const [tuggleSwitchState, setTuggleSwitchState] = useState(false);

  function handleTuggleSwitchState() {
    return setTuggleSwitchState(!tuggleSwitchState)
  }


  return (
    <form className="form-search">
      <div className="form-search__container">
        <input type="text" placeholder="Фильм" name="search-box" className="form-search__input"/>
        <input type="submit" value=" " src="../images/find_btn.svg" className="form-search__btn-submit"/>
      </div>
        <label className="form-search__lable">
          Короткометражки
        </label>
        <lable className="form-search__btn-switch-container">
          <input type="checkbox" className="form-search__btn-switch" checked={tuggleSwitchState} />
          <span className="form-search__btn-switch-slider" onClick={handleTuggleSwitchState}></span>
        </lable>

    </form>
  );
}
