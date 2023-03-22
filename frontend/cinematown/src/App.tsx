import type { Component } from 'solid-js';
import { lazy } from "solid-js";
import { Routes, Route } from "@solidjs/router"


const MoviesList = lazy(() => import("./screens/movies_list"));
const MoviePage = lazy(() => import("./screens/movie_page"));

const App: Component = () => {
  return (
    <>
    <Routes>
     <Route path="/movie/:id" component={MoviePage} />
      <Route path="/" component={MoviesList} />
    </Routes>
    
    
    </>



  );
};

export default App;
