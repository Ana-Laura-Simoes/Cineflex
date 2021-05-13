import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Footer from "./Footer";

export default function Session(props) {
  const { idMovie } = useParams();  
  const {movieSession, setMovieSession,movieTitle,setMovieTitle, movieImg,setMovieImg} = props;
  let showtimes=[];
  
  useEffect(() => {
    const promise = axios.get(
      `https://mock-api.bootcamp.respondeai.com.br/api/v2/cineflex/movies/${idMovie}/showtimes`
    );

    promise.then((r) => {
      setMovieSession([...r.data.days]); 
      setMovieTitle(r.data.title);
      setMovieImg(r.data.posterURL);      
      console.log(r.data.days)     
    });
  }, []);


  return (
    <>
      <div className="titlePage">Selecione o horário</div>
      {movieSession.map((movie) => (
        showtimes=movie.showtimes,

        <div className="sessionInfo">
          <div className="sessionDay">
            {movie.weekday} - {movie.date}
          </div>

          <div className="sessionTime"> 
          {showtimes.map((show) => <Link to={`/assentos/${show.id}`}><div className="time">{show.name}</div></Link> )}

          </div>
        </div>
      ))};     
     <Footer img={movieImg} title={movieTitle}/>    
    </>
  );
}