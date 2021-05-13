import ReactDOM from "react-dom";
import MoviesList from "./components/MoviesList";
import Header from "./components/Header";
import Movie from "./components/Movie";
import Seats from "./components/Seats";
import FooterSeats from "./components/FooterSeats";
import { useState, useEffect } from "react";

import { Switch, Route, BrowserRouter } from "react-router-dom";

function App() {
  const [movieSession, setMovieSession] = useState([]);  
  const [movieTitle, setMovieTitle] = useState([]);
  const [movieImg, setMovieImg] = useState([]);  

  return (
    <BrowserRouter>
      <Header />
      <Switch>
      <Route path="/" exact>
          <MoviesList/>          
        </Route>

      <Route path="/sessoes/:idMovie" exact>
          <Movie 
          movieSession={movieSession} 
          setMovieSession={setMovieSession}
          movieTitle={movieTitle} 
          setMovieTitle={setMovieTitle}  
          movieImg={movieImg} 
          setMovieImg={setMovieImg}                 
          />              
        </Route>

        <Route path="/assentos/:idSession" exact>
          <Seats/> 
          <FooterSeats movieTitle={movieTitle} movieImg={movieImg} movieSession={movieSession}/>          
        </Route>
 

      </Switch>
    </BrowserRouter>
  );
}

ReactDOM.render(<App />, document.querySelector(".root"));