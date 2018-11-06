import React from "react"
import {Link} from "react-router-dom";

import vkLogo from "../assets/img/vkLogo.png";

export const Footer = () => (
    <footer className="mdl-mini-footer footer">
        <div className="mdl-mini-footer__left-section">
            <div className="mdl-logo">
                Рога и копыта ©
            </div>
            <ul className="mdl-mini-footer__link-list">
                <li><Link to="">Помощь</Link></li>
                <li><Link to="">Пользовательское соглашение</Link></li>
                <li><Link to="">Политика конфиденциальности</Link></li>
            </ul>
        </div>

        <div className="mdl-mini-footer__right-section">
            <img className="socialIcon" src={vkLogo} alt=""/>
        </div>
    </footer>
);
