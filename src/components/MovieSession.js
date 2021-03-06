import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Footer from "./Footer";

export default function Session( {movieInfo,setMovieInfo}) {
  const { idMovie } = useParams();  
  let showtimes=[];
  const [Sessions, setSessions] = useState([]); 
 
  
  useEffect(() => {
    
    const promise = axios.get(
      `https://mock-api.bootcamp.respondeai.com.br/api/v2/cineflex/movies/${idMovie}/showtimes`
    );

    promise.then((r) => {
      setSessions([...r.data.days]);
      const INFO={movie:r.data.title,img:r.data.posterURL};
      setMovieInfo({...INFO});
    
    });
  }, []);

  function sessionSelected(day,time,date){
 const NewArray={weekday:day,time:time,date:date}; 
 setMovieInfo({...movieInfo,...NewArray});
  }

  return (
    <>
    <div className="titlePage">Selecione o horário</div>
      {Sessions.map((movie) => (
        showtimes=movie.showtimes,

        <div className="sessionInfo">
          <div className="sessionDay">
            {movie.weekday} - {movie.date}
          </div>

          <div className="sessionTime"> 
          {showtimes.map((show) => <Link to={`/assentos/${show.id}`}><div className="time" onClick={()=>sessionSelected(movie.weekday,show.name,movie.date)}>{show.name}</div></Link> )}

          </div>
        </div>
    

      ))};     
  

     <Footer img={movieInfo.img} title={movieInfo.movie}/>    
    </>
  );
}