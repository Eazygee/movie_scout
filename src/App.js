import React, { useEffect, useState } from "react";

import SearchIcon from "./search.svg";
import "./App.css"
import MovieCard from "./MovieCard";
//18052507
const API_URL = 'http://www.omdbapi.com?apikey=18052507'
const App = () => {
    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState("")
    const [error, setError] = useState(null);

    const searchMovies = async (title) => {
        try {
            const response = await fetch(`${API_URL}&s=${title}`)
            const data = await response.json();
            setMovies(data.Search);
        } catch (error) {
            console.log(setError(error.messsage))
        }
    }
    useEffect(() => {
        console.log("next")
        searchMovies()

    }, [])
    return (
        <div className="app">
            <h1>Movieland</h1>
            <div className="search">
                <input placeholder="Search for movies"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <img src={SearchIcon}
                    alt="search"
                    onClick={() => searchMovies(searchTerm)}
                />
            </div>
            {
                movies.length > 0
                    ? (<div className="container">
                        {
                            movies.map((movie) => (
                                <MovieCard Movie={movie} />
                            ))
                        }
                    </div>) : (
                        <div className="empty">
                            <h2>No movies found</h2>
                        </div>

                    )
            }
        </div>
    );
}

export default App;