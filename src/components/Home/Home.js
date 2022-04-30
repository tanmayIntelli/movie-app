import React, { useEffect, useState } from "react";
import MovieListing from "../MovieListing/MovieListing";
import "./Home.scss"
import { useDispatch } from "react-redux";
import {
  fetchAsyncMovies,
  fetchAsyncShows,
} from "../../features/movies/movieSlice";
const Home = () => {
  const [searchInput,setSearchInput] = useState("Harry");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAsyncMovies(searchInput));
    dispatch(fetchAsyncShows(searchInput));
  }, [dispatch,searchInput]);

  const searchHandler = () =>{
    let searchText=document.getElementById('search-text').value;
    if (searchInput){
      setSearchInput(searchText);
      document.getElementById('search-text').value = '';
    }
  }
  return (
    <div>
      <div className="search-box">
        <span><input type="text" id="search-text" placeholder="Search movies or shows..."></input><button id="search-btn" onClick={searchHandler}>Search</button></span>
      </div>
      <div className="banner-img"></div>
      <MovieListing />
    </div>
  );
};

export default Home;
