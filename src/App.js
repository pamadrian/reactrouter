import "./App.css";
import { Switch, Route } from "react-router-dom";
import DiscoverMoviesPage from "./pages/DiscoverMoviesPage";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import NavBar from "./components/NavBar";
import MoviePage from "./components/MoviePage";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <NavBar />
      <header>
        <Link to="/discover">
          <button>Search Movies</button>
        </Link>
        <Switch>
          <Route path="/discover/:imdb_id" component={MoviePage} />
          <Route path="/discover" component={DiscoverMoviesPage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/" component={HomePage} />
        </Switch>
      </header>
    </div>
  );
}

export default App;
