import React, { useContext, useState } from 'react';

export default function SearchForm(props) {

  const [tuggleSwitchState, setTuggleSwitchState] = useState(false);
  const [input, setInput] = useState('');
  const [errorText, setErrorText] = useState('Фильм');
  const [errorState, setErrorstate] = useState(false);
  const inputPlaceholderClass = errorState ? 'form-search__input form-search__input_color_red' : 'form-search__input'
  function handleTuggleSwitchState() {
    setTuggleSwitchState(!tuggleSwitchState)
    props.pullSerchData(input, !tuggleSwitchState)


  }

  function onSubmit(e){
    e.preventDefault();
    props.pullSerchData(input, tuggleSwitchState)
    setErrorText('Фильм')
    setErrorstate(false)
    if (input == '') {
      setErrorText('Не введен текст для посика')
      setErrorstate(true)
    }

  }

  return (
    <form className="form-search"   onSubmit = {e => onSubmit(e)}>
      <div className="form-search__container">
        <input type="text"
          placeholder={errorText}
          name="search-box"
          className={inputPlaceholderClass}
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
