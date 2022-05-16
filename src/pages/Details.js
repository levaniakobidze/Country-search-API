import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Details() {
  const state = useSelector((state) => state.data);

  let fetched = state.length > 0;

  fetched && console.log(state);

  return (
    <div>
      {fetched ? (
        <div>
          <h1>{state[0].name.common}</h1>
          <img src={state[0].flags.png} alt='' />
          <p>Capital: {state[0].capital[0]}</p>
          <p>Region : {state[0].region}</p>
          <p>Area : {state[0].area}Km² </p>
          <p>Flag:{state[0].flag}</p>
          <p>Population: {state[0].population}</p>
          <p>
            Google map: <a href={state[0].maps.googleMaps}>link</a>
          </p>
          <p>Start of week:{state[0].startOfWeek}</p>

          <Link to={"/"}>Back</Link>
        </div>
      ) : (
        "adsad"
      )}
    </div>
  );
}

export default Details;
