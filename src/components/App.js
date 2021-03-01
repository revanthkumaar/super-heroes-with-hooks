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

  useEffect(() => {
    fetch(MOVIE_API_URL)
    .then(response => response.json())
    .then(jsonResponse => {
      setMovies(json.Response.Search);
      setLoading(false);
    })
  },[])

  const search = searchValue => {
    //complete search functionality
    setLoading(true);
    setErrorMessage(null);
    fetch(`https://www.omdbapi.com/?s=${searchValue}&apikey=4a3b711b`)
    .then(response=> response.json())
    .then(jsonResponse => {
      if(jsonResponse.Reponse === "True"){
        //when there is response and some information
        setMovies(jsonReponse.Search);
        setLoading(false);
      }
      else{
        //when there is no response
        setErrorMessage(jsonResponse.Error);
        setLoading(false);
      }

    })
  }








  

 }
