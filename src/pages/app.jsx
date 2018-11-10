import React from "react"
import {Switch} from "react-router";
import {BrowserRouter as Router, Route} from "react-router-dom"

import {Statistics} from "./statistics";
import {GamesList} from "./gamesList/gamesList";
import {Settings} from "./settings";
import {Header} from "./header";
import {Footer} from "./footer";
import {GameInfo} from "./gameInfo/gameInfo"

import "../style.css";

export const App = () => (
    <Router>
        <div className="site">
            <Header/>
            <div className="content">
                <Switch>
                    <Route path="/(|stats)" component={Statistics}/>
                    <Route path="/gamesList" component={GamesList}/>
                    <Route path="/settings" component={Settings}/>
                    <Route path="/game/:id" component={GameInfo}/>
                </Switch>
            </div>
            <Footer/>
        </div>
    </Router>
);