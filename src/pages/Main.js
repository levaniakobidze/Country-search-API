import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { countryActions } from "../redux";
import { useRef } from "react";
import { Link } from "react-router-dom";
import "./Main.css";
import { FaGlobe } from "react-icons/fa";

function Main() {
  const state = useSelector((state) => state.data);
  const loading = useSelector((state) => state.loading);
  const isValid = useSelector((state) => state.isInputValid);
  const dispatch = useDispatch();
  const inputRef = useRef();
  const [inputValue, setInputValue] = useState("");
  const [isCountry, setIsCountry] = useState(true);
  const [logo, setLogo] = useState(true);
  const fetchData = async (url) => {
    try {
      dispatch(countryActions.loading(true));
      const response = await fetch(url);
      if (!response.ok) {
        setIsCountry(false);
        return;
      } else {
        setIsCountry(true);
      }
      const data = await response.json();
      dispatch(countryActions.saveData(data[0]));
      dispatch(countryActions.loading(false));
    } catch (error) {
      console.log(error.message);
    }
  };
  const onChangeHandler = (e) => {
    setInputValue(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const value = inputRef.current.value;
    if (inputValue.trim() === "") {
      setLogo(true);
      dispatch(countryActions.inValid());
      return;
    } else {
      setLogo(false);
    }
    dispatch(countryActions.valid());
    const url = `https://restcountries.com/v3.1/name/${value}`;
    if (isValid === true) {
      fetchData(url);
    }
  };

  let fetched = state.length > 0;
  return (
    <div className='main-wrapper'>
      {logo && (
        <div className='logo-img'>
          <FaGlobe className='logo' />
        </div>
      )}
      <form action='' onSubmit={submitHandler}>
        <input
          className={!isValid || !isCountry ? "error" : ""}
          ref={inputRef}
          type='text'
          value={inputValue}
          onChange={onChangeHandler}
          placeholder='search countrey'
        />
        {!isCountry && (
          <>
            <p className='no-country'>This country doesn't exists !</p>
          </>
        )}
        <p className='empty-error'>{!isValid && "Please fill input!"}</p>
      </form>
      {fetched && isValid && (
        <>
          <h1>{state[0].name.common} </h1>

          <img src={state[0].flags.png} alt='' />
          {loading && (
            <>
              <span className='load-circle'>
                <span className='line'></span>
              </span>
            </>
          )}
          <div className='btn-wrapper'>
            <Link className='seemore-btn' to={"/details"}>
              See more
            </Link>
          </div>
        </>
      )}
    </div>
  );
}

export default Main;
