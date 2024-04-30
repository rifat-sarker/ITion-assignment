import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useEffect, useState } from "react";
import { Box } from "@mui/material";
const Home = () => {
  const [movies, setMovies] = useState([]);
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [selectedLanguages, setSelectedLanguages] = useState([]);
  const [selectedCountries, setSelectedCountries] = useState([]);
  useEffect(() => {
    const url = "movies.json";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setMovies(data));
    // console.log(movies);
  }, []);


 // Function to handle genre selection
 const handleGenreChange = (event) => {
  const { value } = event.target;
  if (selectedGenres.includes(value)) {
    setSelectedGenres(selectedGenres.filter((genre) => genre !== value));
  } else {
    setSelectedGenres([...selectedGenres, value]);
  }
};

  // Function to handle language selection
  const handleLanguageChange = (event) => {
    const { value } = event.target;
    if (selectedLanguages.includes(value)) {
      setSelectedLanguages(selectedLanguages.filter((language) => language !== value));
    } else {
      setSelectedLanguages([...selectedLanguages, value]);
    }
  };

  // Function to handle country selection
  const handleCountryChange = (event) => {
    const { value } = event.target;
    if (selectedCountries.includes(value)) {
      setSelectedCountries(selectedCountries.filter((country) => country !== value));
    } else {
      setSelectedCountries([...selectedCountries, value]);
    }
  };
    // Filter movies based on selected options
    const filteredMovies = movies.filter((movie) => {
      const genresMatch = selectedGenres.length === 0 || selectedGenres.some((genre) => movie.moviegenres.includes(genre));
      const languagesMatch = selectedLanguages.length === 0 || selectedLanguages.some((language) => movie.movielanguages.includes(language));
      const countriesMatch = selectedCountries.length === 0 || selectedCountries.some((country) => movie.moviecountries.includes(country));
      return genresMatch && languagesMatch && countriesMatch;
    });
  return (
    <Box className="">
      <Typography fontWeight={"bold"} textAlign={"center"} my={3} variant="h3">
        All Movies
      </Typography>
      <Box className="my-10 justify-center flex gap-16">
        <Typography>
          <span className="font-bold">Sort by Genres :</span>
          {["Action", "Adventure", "Fantasy"].map((genre) => (
            <Box key={genre}>
              <label className="mr-1" htmlFor={genre}>
                {genre}
              </label>
              <input
                className="mr-3"
                type="checkbox"
                name={genre}
                id={genre}
                value={genre}
                onChange={handleGenreChange}
                checked={selectedGenres.includes(genre)}
              />
            </Box>
          ))}
        </Typography>
        <Typography>
        <span className="font-bold"><span className="font-bold">Sort by Languages :</span></span>
          {["Hindi", "Tamil", "English"].map((language) => (
            <Box key={language}>
              <label className="mr-1" htmlFor={language}>
                {language}
              </label>
              <input
                className="mr-3"
                type="checkbox"
                name={language}
                id={language}
                value={language}
                onChange={handleLanguageChange}
                checked={selectedLanguages.includes(language)}
              />
            </Box>
          ))}
        </Typography>
        <Typography>
        <span className="font-bold"><span className="font-bold">Sort by Countries :</span></span>
          {["India", "United States", "United Arab Emirates"].map((country) => (
            <Box key={country}>
              <label className="mr-1" htmlFor={country}>
                {country}
              </label>
              <input
                className="mr-3"
                type="checkbox"
                name={country}
                id={country}
                value={country}
                onChange={handleCountryChange}
                checked={selectedCountries.includes(country)}
              />
            </Box>
          ))}
        </Typography>
      </Box>
      <Box className="flex flex-wrap justify-center gap-6 ">
        {filteredMovies.map((movie) => (
          <Card key={movie.imdbmovieid} sx={{ width: "400px" }}>
            <CardMedia
              sx={{ width: "400px", height: "200px" }}
              image={movie.moviemainphotos}
              title="green iguana"
            />
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                fontWeight={"bold"}
                component="div"
              >
                {movie.movietitle}
              </Typography>
              <Typography
                display={"flex"}
                gap={2}
                my={2}
                variant="body2"
                color="text.secondary"
              >
                <span className="text-black font-bold">Genres:</span>
                {movie.moviegenres.map((genres, idx) => (
                  <p key={idx}>{genres}</p>
                ))}
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  gap: 2,
                }}
              >
                <Typography variant="body2" color="text.secondary">
                  <span className="text-black font-bold">Languages:</span>
                  {movie.movielanguages.slice(0, 5).map((language, idx) => (
                    <p key={idx}>{language}</p>
                  ))}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  <span className="text-black font-bold">Countries:</span>
                  {movie.moviecountries.slice(0, 5).map((country, idx) => (
                    <p key={idx}>{country}</p>
                  ))}
                </Typography>
              </Box>
              <Button
                href={`${movie.imdbmovieid}`}
                sx={{ mt: 2, textTransform: "none" }}
                variant="contained"
              >
                Details
              </Button>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
};

export default Home;
