import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Footer from "./Footer";

export default function Session(props) {
  //const { idFilme } = useParams();  
  //const {movieSession, setMovieSession, setMovieTitle, setMovieImg} = props;
  const [movieSession, setMovieSession] = useState([]);  
  const [movieTitle, setMovieTitle] = useState([]);
  const [movieImg, setMovieImg] = useState([]);  

  useEffect(() => {
    const promise = axios.get(
      `https://mock-api.bootcamp.respondeai.com.br/api/v2/cineflex/movies/2/showtimes`
    );

    promise.then((res) => {
      setMovieSession(res.data.days); 
      setMovieTitle(res.data.title);
      setMovieImg(res.data.posterURL)      
      console.log(res.data)     
    });
  }, []);


  return (
    <>
      <div className="titlePage">Selecione o horário</div>
      {movieSession.map((movie) => (
        <div className="sessionInfo">
          <div className="sessionDay">
            {movie.weekday} - {movie.date}
          </div>
          <div className="sessionTime">   
                <Link to={`/sessao/${movie.showtimes[0].id}`}>
                  <div className="time">{movie.showtimes[0].name}</div>
                </Link>
                <Link to={`/sessao/${movie.showtimes[1].id}`}>
                  <div className="time">{movie.showtimes[1].name}</div>
                </Link>                      
          </div>
        </div>
      ))};     
         
    </>
  );
}