import { useState } from "react";
// import axios from "axios";
import MovieItem from "../components/MovieItem";

export default function DiscoverMoviesPage() {
  const [searchText, set_searchText] = useState("");
  const [state, setState] = useState({ status: "idle" });

  const search = async () => {
    if (searchText === "") {
      setState({ status: "idle" });
      return;
    }
    setState({ status: "searching" });
    console.log("Start searching for:", searchText);

    // Best practice: encode the string so that special characters
    //  like '&' and '?' don't accidentally mess up the URL
    const queryParam = encodeURIComponent(searchText);

    // Option A: use the browser-native fetch function
    const response = await fetch(
      `http://www.omdbapi.com/?apikey=407d686a&s=${queryParam}`
    ).then((r) => r.json());

    // Option B: use the `axios` library like we did on Tuesday
    // const data = await axios.get(
    //   `http://www.omdbapi.com/?i=tt3896198&apikey=bc96477e${queryParam}`
    // );

    console.log("Success!", response);
    if (response.Response === "True") {
      setState({ status: "done", data: response.Search });
    }
    if (response.Response === "False") {
      setState({ status: "idle", error: "Request failed" });
    }
  };

  return (
    <div>
      <h1>Discover some movies!</h1>
      <p>
        <input
          value={searchText}
          onChange={(event) => set_searchText(event.target.value)}
        />
        {/* above is an inputfield, to find the searched text */}
        <button onClick={search}>Search</button>
        {/* the function search is passed to the button */}
      </p>

      {state.status === "idle" && (
        <p> Type in a search term and click search to start...</p>
      )}
      {state.status === "searching" && <p> Searching...</p>}
      {state.error && <p>{state.error}</p>}
      {state.status === "done" && (
        <div>
          <h2> Search Results</h2>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              margin: "0 -10px",
            }}
          >
            {state.data.map((movie) => (
              <MovieItem key={movie.imdbID} movie={movie} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
