import ReactDOM from "react-dom";
import MoviesList from "./components/MoviesList";
import Header from "./components/Header";
import Movie from "./components/Movie";
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

      <Route path="/filme/:idMovie" exact>
          <Movie 
          movieSession={movieSession} 
          setMovieSession={setMovieSession}
          movieTitle={movieTitle} 
          setMovieTitle={setMovieTitle}  
          movieImg={movieImg} 
          setMovieImg={setMovieImg}                 
          />          
            
        </Route>
 

      </Switch>
    </BrowserRouter>
  );
}

ReactDOM.render(<App />, document.querySelector(".root"));