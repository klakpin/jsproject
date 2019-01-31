import React from "react";
import {Link} from "react-router-dom";
import AppBar from '@material-ui/core/AppBar';

export const Header = () => (
    <AppBar position={"static"}>
        <div className="mdl-layout__header-row">
            <nav className="mdl-navigation">
                <Link to="/stats" className="mdl-navigation__link">Общая статистика</Link>
                <Link to="/gamesList" className="mdl-navigation__link">Мои игры</Link>
                <Link to="/settings" className="mdl-navigation__link">Настройки</Link>
            </nav>
            <div className="mdl-layout-spacer"/>
            <span className="mdl-layout-title">Dota 2 assistant</span>
        </div>
    </AppBar>

);

