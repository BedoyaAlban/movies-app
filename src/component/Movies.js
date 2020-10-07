import { faHeart, faVoteYea } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Pagination from "./Pagination";

const API_KEY = process.env.REACT_APP_API_KEY;

/*TODO:
  - Add Rating by movie
  - Hover -> display overview
  - Set Pagination
  - Add input to search
  - set Filters
  - Add router onClick page for a Movie with the details
*/
const Movies = () => {
  const [status, setStatus] = useState("popular");
  const url = `https://api.themoviedb.org/3/movie/${status}?api_key=${API_KEY}`;
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getMovies();
  }, []);

  const getMovies = () => {
    axios.get(url).then(res => {
      const popularMovies = res.data.results;
      setMovies(popularMovies);
    });
  };

  console.log(movies);
  return (
    <div>
      <h1 className="title">Movies</h1>
      <div className="columns is-multiline is-mobile">
        {movies
          ? movies.map(movie => (
              <div className="column is-one-quarter" key={movie.id}>
                <div className="card">
                  <div className="card-image">
                    <img
                      src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                      alt="Movie poster"
                    />
                  </div>
                  <div className="card-content">
                    <div className="media">
                      <div className="media-content">
                        <p className="title is-4">{movie.title}</p>
                      </div>
                      <div className="media-content">
                        <span className="icon is-small">
                          <FontAwesomeIcon icon={faHeart} />
                        </span>
                        <span>{movie.popularity}</span>
                      </div>
                      <div className="media-content">
                        <span className="icon is-small">
                          <FontAwesomeIcon icon={faVoteYea} />
                        </span>
                        <span>{movie.vote_count}</span>
                      </div>
                    </div>

                    <div className="content">{movie.overview}</div>
                  </div>
                </div>
              </div>
            ))
          : null}
      </div>
      <Pagination />
    </div>
  );
};

export default Movies;
