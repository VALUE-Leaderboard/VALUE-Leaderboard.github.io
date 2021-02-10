import React, { Component } from 'react';
import { Route, NavLink, Link } from "react-router-dom";
import { Home } from './components/Home';
import { Leaderboard } from './components/Leaderboard';
import { Tasks } from './components/Tasks';
import './App.css'

export default class App extends Component {
  displayName = App.name

  render() {
    return (
        <div className="App">
            <header className="Title">
                <NavLink exact to={"/"} className="tablink" activeClassName="tabActive">Home</NavLink>
                <NavLink to={"/tasks"} className="tablink" activeClassName="tabActive">Tasks</NavLink>
                <NavLink to={"/leaderboard"} className="tablink" activeClassName="tabActive">Leaderboard</NavLink>
            </header>
            <Route exact path='/' component={Home} />
            <Route path='/tasks' component={Tasks} />
            <Route path='/leaderboard' component={Leaderboard} />
        </div>
    );
  }
}
