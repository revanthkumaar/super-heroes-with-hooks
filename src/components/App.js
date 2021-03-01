import React, {useState,useEffect} from 'react';
import "../App.css";
import Header from "./Header";
import Movie from "./Movie";
import Search from "./Search";


const MOVIE_API_URL = "https://www.omdbapi.com/?s=man&apikey=4a3b711b";

const App = () => {
  //variables/parameters intialization/declaration
  const [loading,setLoading] = useState(true);
  const [movies,setMovies] = useState([]);
  const [errorMessage,setErrorMessage] = useState(null);

  

 }
