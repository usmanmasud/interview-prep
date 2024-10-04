import { useEffect, useState } from "react"
import './App.css'
import SearchIcon from './components/search.svg'
import MovieCard from "./components/MovieCard"

const API_URL = 'http://www.omdbapi.com/?apikey=a979b0a1'

const movie11 = {
  'Poster': "https://m.media-amazon.com/images/M/MV5BZWQxMjcwNjItZjI0ZC00ZTc4LWIwMzItM2Q0YTZhNzI3NzdlXkEyXkFqcGdeQXVyMTA0MTM5NjI2._V1_SX300.jpg",
  'Title': "Italian Spiderman",
  'Type': "movie",
  'Year': "2007",
  'imdbID': "tt2705436"
}

function App() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, SetSearchTerm] = useState('')

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`)
    const data = await response.json()

    setMovies(data.Search);
  }
  useEffect(() => {
    searchMovies('Spiderman')
  }, [])

  return (
    <div className="app">
      <h1>MovieLand</h1>

      <div className="search">
        <input
          placeholder="Search for movies"
          value={searchTerm}
          onChange={(e) => SetSearchTerm(e.target.value)}
        />
        <img
          src={SearchIcon}
          alt="Search"
          onClick={() => searchMovies({ searchTerm })}
        />
      </div>

      {
        movies.length > 0 ? (
          <div className="container">
            {movies.map((movie) => (
              <MovieCard movie={movie} />
            ))}
          </div>
        ) :
          (
            <div className="empty">
              <h2>No movies found</h2>
            </div>
          )
      }

    </div>
  )
}


export default App