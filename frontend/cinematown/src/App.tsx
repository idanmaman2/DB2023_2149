import type { Component } from 'solid-js';
import { lazy } from "solid-js";
import { Routes, Route } from "@solidjs/router"
import {NavBar} from "./componnets/navbar"
import {Footer} from "./componnets/footer"
import { About } from './screens/about';
import VipPage from './screens/vip_page';
import SitesPage from './screens/sites_page';
import LoginPage from './screens/login_page';
import SignupPage from './screens/signup_page';
const MoviesList = lazy(() => import("./screens/movies_list"));
const MoviePage = lazy(() => import("./screens/movie_page"));

const App: Component = () => {
  return (
    <div class="grid grid-cols-1" >


    <NavBar></NavBar>
      <Routes>
        <Route path="/movie/:id" component={MoviePage} />
        <Route path="/" component={MoviesList} />
        <Route path="/vip" component={VipPage} />
        <Route path="/sites" component={SitesPage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/signup" component={SignupPage} />

      </Routes>

<Footer></Footer>
      </div>



  );
};

export default App;