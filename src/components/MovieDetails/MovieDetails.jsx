import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const MovieDetails = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const url = "movies.json";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setMovies(data));
  }, []);

  const { id } = useParams();
  const allMovies = movies.filter((movie) => movie.imdbmovieid === id);

  return (
    <Box sx={{ width: "fit",}}>
      {allMovies.map((movie) => (
        <Box sx={{}} key="movie.imdbmovieid">
          <Typography fontWeight={"bold"} variant="h4">{movie.movietitle}</Typography>
          <img className="size-42  my-4" src={movie.moviemainphotos} alt="movie_photo" />
           <div className=" flex-col items-center ">
           <Typography sx={{display: "flex", gap: 1,}} variant="body2" color="text.secondary">
              <span className="text-black font-bold">Languages:</span>
              {movie.movielanguages.map((language, idx) => <p key={idx}>{language}</p>)}
            </Typography>
            <Typography  sx={{display: "flex", gap: 1, width: "fit-content", }}  variant="body2" color="text.secondary">
            <span className="text-black font-bold">Countries:</span>
              {movie.moviecountries.map((country, idx) => <p key={idx}>{country}</p>)}
            </Typography>
            <Typography sx={{display: "flex", gap: 1}} variant="body2" color="text.secondary">
            <span className="text-black font-bold">Genres:</span>
              {movie.moviegenres.map((genres, idx) => <p key={idx}>{genres}</p>)}
            </Typography>
           </div>
        </Box>
      ))}
    </Box>
  );
};

export default MovieDetails;
