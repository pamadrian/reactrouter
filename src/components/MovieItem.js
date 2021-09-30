import React from "react";
import { NavLink, Link } from "react-router-dom";

export default function MovieITem({ movie }) {
  return (
    <div
      style={{
        width: "25%",
        padding: "10px",
        boxSizing: "border-box",
      }}
    >
      <Link to={`/discover/${movie.imdbID}`}>
        <strong>{movie.Title}</strong>({movie.imdbID})
        <img
          src={movie.Poster}
          alt={movie.Title}
          style={{
            display: "block",
            maxWidth: "100%",
          }}
        />
      </Link>
    </div>
  );
}
