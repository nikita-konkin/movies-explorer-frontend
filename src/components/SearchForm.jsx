import React, { useState, useEffect } from 'react';

export default function SearchForm(props) {

  const StoredRequest = localStorage.getItem('userSearchRequest') != 'undefined' ? JSON.parse(localStorage.getItem('userSearchRequest')) : '';
  const shortStored = JSON.parse(localStorage.getItem('userSearchRequestShort'))
  const [tuggleSwitchState, setTuggleSwitchState] = useState(props.saved ? false : shortStored);
  const [input, setInput] = useState(props.saved ? '' : StoredRequest);
  const [errorText, setErrorText] = useState('Фильм');
  const [errorState, setErrorstate] = useState(false);
  const inputPlaceholderClass = errorState ? 'form-search__input form-search__input_color_red' : 'form-search__input'
  
  // console.log(tuggleSwitchState)
  // console.log(shortStored)

  function handleTuggleSwitchState() {
    // console.log(!tuggleSwitchState)
    setTuggleSwitchState(!tuggleSwitchState)
    localStorage.setItem('userSearchRequestShort', JSON.stringify(!tuggleSwitchState))
    // localStorage.setItem('userSearchRequestShort1', !tuggleSwitchState)
    props.pullSerchData(input, !tuggleSwitchState)
  }

  // useEffect(() => {
  //   localStorage.setItem('userSearchRequestShort', !shortStored)
  // }, [StoredRequest]);


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
  // console.log(tuggleSwitchState)
  return (
    <form className="form-search"   onSubmit = {e => onSubmit(e)}>
      <div className="form-search__container">
        <input type="text"
          placeholder={errorText}
          name="search-box"
          className={inputPlaceholderClass}
          onInput={e => setInput(e.target.value)}
          value={input}
        />
        <input type="submit" value=" "
          src="../images/find_btn.svg"
          className="form-search__btn-submit"
        />
      </div>
      <div className="form-search__switch-container">
        <div className="form-search__btn-switch-container">
          <input type="checkbox" className="form-search__btn-switch"
            // defaultChecked={false}
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
