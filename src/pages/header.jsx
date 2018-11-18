import React from "react";
import {Link} from "react-router-dom";
import AppBar from '@material-ui/core/AppBar';

export const Header = () => (
    <AppBar position={"static"}>
        <div className="mdl-layout__header-row">
            <nav className="mdl-navigation">
                <Link className="mdl-navigation__link" to="/stats">Общая статистика</Link>
                <Link className="mdl-navigation__link" to="/gamesList">Мои игры</Link>
                <Link className="mdl-navigation__link" to="/settings">Настройки</Link>
            </nav>
            <div className="mdl-layout-spacer"/>
            <span className="mdl-layout-title">Dota 2 assistant</span>
        </div>
    </AppBar>

);

