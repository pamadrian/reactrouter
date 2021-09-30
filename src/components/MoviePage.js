import { useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import "./MoviePage.scss";

export default function MoviePage() {
  const [movie, setMovie] = useState({});
  const { imdb_id } = useParams();

  //   const params = useParams();

  const fetchData = async () => {
    const response = await axios.get(
      `http://www.omdbapi.com/?apikey=407d686a&i=${imdb_id}`
    );
    setMovie(response.data);
  };

  useEffect(() => {
    fetchData();
  }, [imdb_id]);
  //   I forgot to place the imdb_id at the array, run it to show in the page

  return (
    <div className="MoviePage">
      {movie ? (
        <>
          <h2>{movie.Title}</h2>
          {/* <div>
            {movie.Genre.split(", ").map((genre, index) => (
              <span key={index} className="genre">
                {genre}
              </span>
            ))}
          </div> */}
          <div className="details">
            <img alt={movie.Title} src={movie.Poster} />
            <div>
              <h3>Director</h3>
              <p>{movie.Director}</p>
              <h3>Language</h3>
              <p>{movie.Language}</p>
              <h3>Plot</h3>
              <p>{movie.Plot}</p>
              <h3>IMDB Rating</h3>
              <p>{movie.imdbRating}</p>
            </div>
          </div>
        </>
      ) : (
        <p>Loading....</p>
      )}
    </div>
  );
}
