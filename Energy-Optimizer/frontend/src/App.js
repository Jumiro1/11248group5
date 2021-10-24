import './App.css';
import React from "react"
import {Switch, Route, Link} from "react-router-dom"
import logo from './images/logo.png';
import Login from "./components/Login";
import Account from "./components/Account";
import Dashboard from "./components/Dashboard";
import Services from "./components/Services";


import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <nav class="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
        <div class="container-fluid">
            <div class="navbar-collapse collapse w-100 order-1 order-md-0">
                <ul class="navbar-nav me-auto">
                    <li class="nav-item active">
                      <Link to={"/Services"} className="nav-link">
                        About Us
                      </Link>
                    </li>
                    <li class="nav-item dropdown">
                      <a class="nav-link dropdown-toggle" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      </a>
                      <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
                        <li><a class="dropdown-item" href="/Services#slides">Services</a></li>
                        <li><a class="dropdown-item" href="/Services#team">Team</a></li>
                      </ul>
                    </li>
                    <li class="nav-item active">
                      <Link to={"/Dashboard"} className="nav-link" >
                          Dashboard
                      </Link>
                    </li>
                    <li class="nav-item dropdown">
                      <a class="nav-link dropdown-toggle" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      </a>
                      <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
                        <li><a class="dropdown-item" href="/Dashboard#graphs">Graphs</a></li>
                        <li><a class="dropdown-item" href="/Dashboard#map">Map</a></li>
                        <li><a class="dropdown-item" href="/Dashboard#dataAnalytics">Data Analytics</a></li>
                      </ul>
                    </li>
                </ul>
            </div>
            <div class="mx-auto order-0">
                <a class="navbar-brand mx-auto" href="/Services">Energy Optimizer</a>
                <button class="navbar-toggler" data-bs-toggle="collapse" data-bs-targe="#collapseHeader" aria-controls="collapseHeader" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
            </div>
            <div class="navbar-collapse collapse w-100 order-3" id="collapseHeader">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item">
                      <Link to={"/Login"} className="nav-link">
                        Login
                      </Link>
                    </li>
                    <li class="nav-item">
                      <Link to={"/Account"} className="nav-link">
                        <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" class="rounded-circle" widht="36" height="36"/>
                      </Link>
                    </li>
                </ul>
            </div>
        </div>
      </nav>
      <div className="container mt-3">
        <Switch>
          <Route exact path={["/", "/Services"]} component={Services} />
          <Route path={["/Login"]} component={Login}/>
          <Route exact path={["/Dashboard"]} component={Dashboard}/>
          <Route exact path={["/Account"]} component={Account}/>
        </Switch>
      </div>
      <footer class="page-footer font-small  fixed-bottom bg-dark text-white-50">
        <div class="footer-copyright text-center py-3">© 2021 Copyright:
          <a> International Energy Optimization Company (IEOC) - Energy Optimizer</a>
        </div>
      </footer>
  </div>
  );
}

export default App;
