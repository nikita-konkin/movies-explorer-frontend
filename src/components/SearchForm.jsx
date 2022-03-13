import React, { useContext, useState } from 'react';

export default function SearchForm(props) {

  const [tuggleSwitchState, setTuggleSwitchState] = useState(false);
  const [input, setInput] = useState('');

  function handleTuggleSwitchState() {
    setTuggleSwitchState(!tuggleSwitchState)
    if (input !== '') {
      props.pullSerchData(input, tuggleSwitchState)
    }

  }

  function onSubmit(e){
    e.preventDefault();
    if (input !== '') {
      props.pullSerchData(input, tuggleSwitchState)
    }

  }

  return (
    <form className="form-search"   onSubmit = {e => onSubmit(e)}>
      <div className="form-search__container">
        <input type="text"
          placeholder="Фильм"
          name="search-box"
          className="form-search__input"
          onInput={e => setInput(e.target.value)}
        />
        <input type="submit" value=" "
          src="../images/find_btn.svg"
          className="form-search__btn-submit"
        />
      </div>
      <div className="form-search__switch-container">
        <div className="form-search__btn-switch-container">
          <input type="checkbox" className="form-search__btn-switch"
            checked={tuggleSwitchState}
            readOnly/>
          <span className="form-search__btn-switch-slider" onClick={handleTuggleSwitchState}></span>
        </div>
        <label className="form-search__lable">
          Короткометражки
        </label>
        <hr />
      </div>

    </form>
  );
}
