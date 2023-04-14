import React from "react";

function Card({ pokemon, loading, infoPokemon }) {
  return (
    <>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        pokemon.map((item) => {
          return (
            <div
              className="card"
              key={item.id}
            >
              <h2>{item.id}</h2>
              <img src={item.sprites.front_default} alt="" />
              <h2>{item.name}</h2>
              <button onClick={() => infoPokemon(item)}>Read more</button>
            </div>
          );
        })
      )}
    </>
  );
}

export default Card;
