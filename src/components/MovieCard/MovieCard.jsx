import React from "react";
import Backgroud from "../Overlay/Backgroud";
import Gradient from "../Overlay/Gradient";
import './MovieCard.css'
import MovieInfo from "./MovieInfo";
import MovieTitle from "./MovieTitle";
import UtilityInfo from "./UtilityInfo";
export default function MovieCard(props) {
  return (

    <div className="blog-card spring-fever">
      {props.loadMovie&&<img src={props.poster} alt="" />}
      <img src="https://cdn.britannica.com/26/129426-131-B63C9426/film-reel-Brown-arts-blog-entertainment-Hompepage-2009.jpg" alt="" />
      
     <MovieTitle  
     title={props.title}
    loadMovie={props.loadMovie}
    setLoadMovie={props.setLoadMovie}
  chooseMovie={props.chooseMovie}
  promote={props.promote}></MovieTitle>
     {props.loadMovie&& <MovieInfo
     intro={props.intro}
     link={props.link}
     chooseMovie={props.chooseMovie}
     ></MovieInfo>}
    
     
     <UtilityInfo
     rating={props.rating}
     year={props.year}
     genres={props.genres}></UtilityInfo>
     <Gradient>

     </Gradient>
     <Backgroud></Backgroud>
      
    </div>
  );
}
