import ReactDOM from "react-dom";
import MoviesList from "./components/MoviesList";
import Header from "./components/Header";
import Movie from "./components/MovieSession";
import Seats from "./components/Seats";
import FooterSeats from "./components/FooterSeats";
import Success from "./components/Success";
import { useState} from "react";

import { Switch, Route, BrowserRouter } from "react-router-dom";

function App() {
    /*

    */
  const [movieInfo,setMovieInfo] =useState({});

  return (
    <BrowserRouter>
      <Header />
      <Switch>
      <Route path="/" exact>
          <MoviesList/>          
        </Route>

      <Route path="/sessoes/:idMovie" exact>
          <Movie 
          movieInfo={movieInfo}
          setMovieInfo={setMovieInfo}                
          />              
        </Route>

        <Route path="/assentos/:idSession" exact>
          <Seats
          movieInfo={movieInfo}
          setMovieInfo={setMovieInfo}          
          />
          
           
          <FooterSeats
          movieInfo={movieInfo}
          setMovieInfo={setMovieInfo} 
          />    

        </Route>
        <Route path="/sucesso" exact>
          <Success 
          movieInfo={movieInfo}
          />
        </Route>

      </Switch>
    </BrowserRouter>
  );
}

ReactDOM.render(<App />, document.querySelector(".root"));