import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Details() {
  const state = useSelector((state) => state.data);

  console.log(state);

  return (
    <div>
      Details
      <Link to={"/"}>Back</Link>
    </div>
  );
}

export default Details;
