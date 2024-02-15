import { useEffect, useState } from "react";
import StarRating from "./StarRating";


const average = (arr) =>
  arr.reduce((acc, cur, i, arr) => acc + cur / arr.length, 0);

function NavBar({ children }) {
  return (
    <nav className="nav-bar">
      <Logo></Logo>
      {children}
    </nav>
  );
}

function Logo() {
  return (
    <div className="logo">
      <span role="img">🍿</span>
      <h1>usePopcorn</h1>
    </div>
  );
}
function Search({ query, setQuery }) {
  return (
    <input
      className="search"
      type="text"
      placeholder="Search movies..."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
    />
  );
}

function NumResults({ movies }) {
  return (
    <p className="num-results">
      Found <strong>{movies.length}</strong> results
    </p>
  );
}

function Main({ children }) {
  return <main className="main">{children}</main>;
}
const KEY = "4ba289c9";

export default function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsloading] = useState(false);
  const [error, setError] = useState("");
  const [query, setQuery] = useState("");
  const [selectedId, setSelectedId] = useState(null);
  const [watched, setWatched] = useState(function(){
    const storedvalue = localStorage.getItem('watched');
    return storedvalue;
  });

  function handleSelectedId(id) {
    setSelectedId((selectedId) => (selectedId === id ? null : id));
  }

  function handleCloseMovie(id) {
    setSelectedId(null);
  }

function handleAddWatched(movie){
  setWatched((watched)=>[...watched, movie]);

}

function handleDeletWatched(id){
  setWatched((watched) => watched.filter((movie)=> movie.imdbID !== id ))
}



useEffect(function(){
  localStorage.setItem('watched',JSON.stringify([watched]));
},[watched])

  useEffect(
    function () {
      const controller= new AbortController();
      
      async function fetchMovies() {
        try {
          setError("");
          setIsloading(true);
          const res = await fetch(`http://omdbapi.com/?apikey=${KEY}&s=${query}
        `,{signal: controller.signal});

          if (!res.ok) {
            throw new Error("Somthing went wrong with fetching movies");
          }

          const data = await res.json();

          if (data.Response === "False") throw new Error("No resulte");

          setMovies(data.Search);
          setError("");
        } catch (err) {
          console.error(err.message);
          
          if(err.name !== "AbortError"){
            
            setError(err.message);
          }
        } finally {
          setIsloading(false);
        }
      }

      if (query.length < 3) {
        setMovies([]);
        setError("");
        return;
      }
      handleCloseMovie();
      fetchMovies();

      return function (){
        controller.abort(); 
            }
    },
    [query]
  );




  return (
    <>
      <NavBar>
        <Search query={query} setQuery={setQuery}></Search>
        <NumResults movies={movies}></NumResults>
      </NavBar>
      <Main>
        <Box>
          {error && <ErrorMessage message={error} />}
          {!isLoading && !error && (
            <MovieList movies={movies} onSelcetMovie={handleSelectedId}>
              {" "}
            </MovieList>
          )}
          {isLoading && <Loader></Loader>}
        </Box>
        <Box>
          {selectedId ? (
            <MovieDetails
              selectedId={selectedId}
              onCloseMovie={handleCloseMovie}
              onAddWatched={handleAddWatched}
              watched={watched}
            />
          ) : (
            <>
              <WatchedSummery watched={watched}></WatchedSummery>
              <WatchedMovieListe 
              watched={watched}
              onDeleteWatched={handleDeletWatched}
              ></WatchedMovieListe>
            </>
          )}
        </Box>
      </Main>
    </>
  );
}

function Loader() {
  return <p className="loader">Loading...</p>;
}

function ErrorMessage({ message }) {
  return (
    <p className="error">
      <span>⚠️</span>
      {message}
    </p>
  );
}

function Box({ children }) {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="box">
      <button className="btn-toggle" onClick={() => setIsOpen((open) => !open)}>
        {isOpen ? "–" : "+"}
      </button>
      {isOpen && children}
    </div>
  );
}
/*
function WatchedBox(){
  const [isOpen2, setIsOpen2] = useState(true);



  return(
<div className="box">
    <button
      className="btn-toggle"
      onClick={() => setIsOpen2((open) => !open)}
    >
      {isOpen2 ? "–" : "+"}
    </button>
    {isOpen2 && (
      <>
      
      </>
    )}
  </div>
  )
}
*/

function MovieList({ movies, onSelcetMovie }) {
  return (
    <ul className="list list-movies">
      {movies?.map((movie) => (
        <Movie
          movie={movie}
          key={movie.imdbID}
          onSelcetMovie={onSelcetMovie}
        ></Movie>
      ))}
    </ul>
  );
}

function Movie({ movie, onSelcetMovie }) {
  return (
    <li onClick={() => onSelcetMovie(movie.imdbID)}>
      <img src={movie.Poster} alt={`${movie.Title} poster`} />
      <h3>{movie.Title}</h3>
      <div>
        <p>
          <span>🗓</span>
          <span>{movie.Year}</span>
        </p>
      </div>
    </li>
  );
}

function MovieDetails({ selectedId, onCloseMovie,onAddWatched,watched }) {
  const [movie, setMovie] = useState({});
  const [isLoading, setIsloading] = useState(false);
const [userRating,setUserRating]=useState("");

const isWatched = watched.map(movie=> movie.imdbID).includes(selectedId) ;

const watchedUserRating = watched.find((movie)=>movie.imdbID === selectedId)?.userRating;

  const {
    Title: title,
    Year: year,
    Poster: poster,
    Runtime: runtime,
    imdbRating,
    Plot: plot,
    Released: released,
    Actors: actors,
    Director: director,
    Genre: genre,
  } = movie;

function handleAdd(){

const newWatchedMovie = {
  imdbID: selectedId,
  title,
  year,
  poster,
  imdbRating: Number(imdbRating),
  runtime :Number(runtime.split(" ").at(0)),
  userRating,
}

  onAddWatched(newWatchedMovie);
  onCloseMovie();
}

  useEffect(
    function () {
      async function getMovieDetail() {
        setIsloading(true);
        const res = await fetch(
          `http://omdbapi.com/?apikey=${KEY}&i=${selectedId}`
        );

        const data = await res.json();
        setMovie(data);
        setIsloading(false);
      }
      getMovieDetail();
    },
    [selectedId]
  );

useEffect(function(){
  if(!title) return
  document.title=`Movie | ${title}`;
return function (){
  document.title = "usePopcorn";
}

},[title ])


useEffect(function(){
  function callback (e){
    if(e.code === "Escape"){
      onCloseMovie();
    }
  }

  document.addEventListener("keydown",callback )
return function(){
  document.removeEventListener('keydown',callback);
}
},[onCloseMovie])

  return (
    <div className="details">
      {isLoading? <Loader></Loader>:  
     <>
     <header>
      <button className="btn-back" onClick={onCloseMovie}>
        &larr;
      </button>
      <img src={poster} alt={`Poster of ${movie}`}></img>
      <div className="details-overview">
        <h2>{title}</h2>
        <p>{released} &bull; {runtime}</p>
        <p>{genre}</p>
        <p>
          <span>⭐</span>
          {imdbRating} IMDb rating
        </p>

      </div>
      </header>
      <section>
      
        <div className="rating">
        { !isWatched ? <>
      <StarRating maxRating={10} size={24} onSetRatting={setUserRating}></StarRating>
      
      {userRating > 0 && <button className="btn-add" onClick={handleAdd} >+ Add to list</button>
      }</>:
      <p>You rated this movie  <span>{watchedUserRating}</span>⭐</p>}
      </div>
        <p>
          <em>{plot}</em></p>
          <p>Staring {actors}</p>
          <p>Directed by {director}</p>

        
      </section>
      </>
    }

  
    </div>
  );
}

function WatchedSummery({ watched }) {
  const avgImdbRating = Number(average(watched.map((movie) => movie.imdbRating)).toFixed(2));
  const avgUserRating =   Number(average(watched.map((movie) => movie.userRating)).toFixed(2));


  const avgRuntime = average(watched.map((movie) => movie.runtime));

  return (
    <div className="summary">
      <h2>Movies you watched</h2>
      <div>
        <p>
          <span>#️⃣</span>
          <span>{watched.length} movies</span>
        </p>
        <p>
          <span>⭐️</span>
          <span>{avgImdbRating}</span>
        </p>
        <p>
          <span>🌟</span>
          <span>{avgUserRating}</span>
        </p>
        <p>
          <span>⏳</span>
          <span>{avgRuntime} min</span>
        </p>
      </div>
    </div>
  );
}

function WatchedMovieListe({ watched,onDeleteWatched }) {
  return (
    <ul className="list">
      {watched.map((movie) => (
        <WatchedMovie movie={movie} key={movie.imdbID} onDeleteWatched={onDeleteWatched}></WatchedMovie>
      ))}
    </ul>
  );
}

function WatchedMovie({ movie,onDeleteWatched }) {
  return (
    <li>
      <img src={movie.poster} alt={`${movie.title} poster`} />
      <h3>{movie.title}</h3>
      <div>
        <p>
          <span>⭐️</span>
          <span>{movie.imdbRating}</span>
        </p>
        <p>
          <span>🌟</span>
          <span>{movie.userRating}</span>
        </p>
        <p>
          <span>⏳</span>
          <span>{movie.runtime} min</span>
        </p>
        <button className="btn-delete" onClick={()=>onDeleteWatched(movie.imdbID)}>X</button>
      </div>
    </li>
  );
}
