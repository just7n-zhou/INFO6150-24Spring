import { useState } from "react";

import "../css/GlobalNav.css";
import menu from "./menu";

function GlobalNav( { className, setPage }){
    
    const [showMenu, setShowMenu] = useState(false);

    const ListHtml = menu.map( item => {
        return (
            <li key={item.name} className="global-nav__item" >
                <a 
                className="global-nav__link" 
                href={item.path}
                onClick = { (e) => {
                    e.preventDefault();
                    setPage(e.target.pathname);
                }}
                >
                    {item.name}
                </a>
            </li>
        );
    });

    const menuHtml = (
        <ul className="global-nav__list">
                {ListHtml}
                {/* Above is the same as below
                <li className="global-nav__item">
                    <a href="/" className="global-nav__link">Home</a>
                </li>
                <li className="global-nav__item">
                    <a href="/about.html" className="global-nav__link">About</a>
                </li>
                <li className="global-nav__item">
                    <a href="/register.html" className="global-nav__link">Register</a>
                </li> 
                */}
            </ul>
    );

    const showClass = showMenu ? "global-nav__list--open" : "";

    return(
        <nav className={`global-nav ${className}`}>
            <div className="global-nav__toggle menu_button" onClick={() => setShowMenu(!showMenu)}>
                {/* {showMenu ? "CloseMenu" : "OpenMenu"} */}
                <img className="hamburger_menu menu_toggle" src="../src/pics/menu_icon.png" width={20} height={20} alt="hamburger menu"/>
            </div>

            {/* {showMenu && menuHtml}
            This is the same as below  */}
            <ul className={`global-nav__list ${showClass}`}>
                {ListHtml}
                {/* Above is the same as below
                <li className="global-nav__item">
                    <a href="/" className="global-nav__link">Home</a>
                </li>
                <li className="global-nav__item">
                    <a href="/about.html" className="global-nav__link">About</a>
                </li>
                <li className="global-nav__item">
                    <a href="/register.html" className="global-nav__link">Register</a>
                </li> 
                */}
            </ul>
            
        </nav>
    );
};

export default GlobalNav