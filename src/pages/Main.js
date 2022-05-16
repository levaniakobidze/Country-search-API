import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { countryActions } from "../redux";
import { useRef } from "react";
import { Link } from "react-router-dom";

function Main() {
  const state = useSelector((state) => state.data);
  const dispatch = useDispatch();
  const inputRef = useRef();

  const fetchData = async (url) => {
    try {
      const response = await fetch(url);

      const data = await response.json();
      dispatch(countryActions.saveData(data[0]));
    } catch (error) {
      console.log(error);
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const value = inputRef.current.value;
    const url = `https://restcountries.com/v3.1/name/${value}`;
    fetchData(url);
  };

  let fetched = state.length > 0;

  return (
    <div>
      <form action='' onSubmit={submitHandler}>
        <input ref={inputRef} type='text' placeholder='search countrey' />

        <button type='submit'>Serarch</button>
      </form>
      {fetched && (
        <>
          <h1>{state[0].name.common} </h1>
          <img src={state[0].flags.png} alt='' />
          <Link to={"/details"}>See more</Link>
        </>
      )}
    </div>
  );
}

export default Main;
