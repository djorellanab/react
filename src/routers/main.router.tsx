import React from 'react';
import {
  BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {Api, Arrow, Form, Greeting, SimpleState, Error, Navbar, Person, Home} from '../components';

const mainRouter = () =>{
    return (
    <Router>
        <Navbar/>
        <Switch>
            <Route exact path="/">
                <Home/>
            </Route>
            <Route path="/api">
                <Api/>
            </Route>
            <Route path="/greeting">
                <Greeting/>
            </Route>
            <Route path="/form">
                <Form/>
            </Route>
            <Route path="/simplestate">
                <SimpleState/>
            </Route>
            <Route path="/arrow">
                <Arrow/>
            </Route>
            <Route path="/person/:id" children={<Person />} />
            <Route path="/*">
                <Error/>
            </Route>
        </Switch>
    </Router>)
}

export default mainRouter;