import React from "react";

const Loader = () => {
  return (
    <div className="container text-center my-5">
      <div className="spinner-border" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
      <h6 className="pt-3">Getting list of Pokemons...</h6>
    </div>
  );
};

export default Loader;
