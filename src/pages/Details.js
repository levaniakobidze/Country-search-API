import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./Details.css";

function Details() {
  const state = useSelector((state) => state.data);
  const isValid = useSelector((state) => state.isInputValid);

  let fetched = state.length > 0;

  fetched && console.log(state);

  return (
    <div>
      {fetched && isValid ? (
        <div className='details-wrapper'>
          <div className='details-content'>
            <h1>{state[0].name.common}</h1>
            <img src={state[0].flags.png} alt='' />
            <p>
              {" "}
              <span className='capital'>
                Capital <span className='colon-capital'> : </span>{" "}
              </span>
              {state[0].capital[0]}
            </p>
            <p>
              {" "}
              <span className='region'>
                Region <span className='colon-region'> : </span>{" "}
              </span>
              {state[0].region}
            </p>
            <p>
              {" "}
              <span className='area'>
                {" "}
                Area <span className='colon-area'> : </span>{" "}
              </span>{" "}
              {state[0].area}Km²{" "}
            </p>
            <p>
              {" "}
              <span className='flag'>
                Flag <span className='colon-flag'> : </span>{" "}
              </span>{" "}
              {state[0].flag}
            </p>
            <p>
              <span className='population'>
                Popula... <span className='colon-population'> : </span>{" "}
              </span>{" "}
              {state[0].population}
            </p>
            <p>
              <span className='map'>
                Map <span className='colon-map'> : </span>{" "}
              </span>{" "}
              <a href={state[0].maps.googleMaps}>link</a>
            </p>
            <p>
              <span className='week'>
                Strt week <span className='colon-week'> : </span>{" "}
              </span>
              {state[0].startOfWeek}
            </p>
            <div className='btn-wrapper'>
              <Link className='back-btn' to={"/"}>
                Back
              </Link>
            </div>
          </div>
        </div>
      ) : (
        "adsad"
      )}
    </div>
  );
}

export default Details;
