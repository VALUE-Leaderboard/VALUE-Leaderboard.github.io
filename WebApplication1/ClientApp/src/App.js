import React, { Component } from 'react';
import { Route, NavLink, Link } from "react-router-dom";
import { Home } from './components/Home';
import { Leaderboard } from './components/Leaderboard';
import { FetchData } from './components/FetchData';
import { Tasks } from './components/Tasks';
import './App.css'

export default class App extends Component {
  displayName = App.name

  render() {
    return (
        <div className="App">
            <header className="Title">
                <NavLink to={"/"} className="tablink" activeClassName="homeActive">Home</NavLink>
                <NavLink to={"/code"} className="tablink" activeClassName="tabActive">Code</NavLink>
                <NavLink to={"/tasks"} className="tablink" activeClassName="tabActive">Tasks</NavLink>
                <NavLink to={"/leaderboard"} className="tablink" activeClassName="tabActive">Leaderboard</NavLink>
            </header>
            <Route exact path='/' component={Home} />
            <Route path='/tasks' component={Tasks} />
            <Route path='/code' component={FetchData} />
            <Route path='/leaderboard' component={Leaderboard} />
        </div>
    );
  }
}
