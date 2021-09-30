import { useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";

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
    <div>
      <h1>Movie Page</h1>
      <h3>{movie.Title}</h3>
      <img src={movie.Poster} alt={movie.Title} />
      <p>{movie.Plot}</p>
    </div>
  );
}
