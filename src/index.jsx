import React from "react"
import ReactDom from "react-dom"
import {BrowserRouter as Router, Route} from "react-router-dom"
import {Statistics} from "./pages/statistics";
import {GamesList} from "./pages/gamesList/gamesList";
import {Settings} from "./pages/settings";
import {Header} from "./pages/header";
import {Footer} from "./pages/footer";
import {GameInfo} from "./pages/gameInfo/gameInfo"
import {Switch} from "react-router";

import "./style.css";

const App = () => (
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

ReactDom.render(
    <App/>,
    document.getElementById("application")
);

