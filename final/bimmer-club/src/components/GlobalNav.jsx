import { useState } from "react";

import "../css/GlobalNav.css";
import headerMenu from "./headerMenu";


// This is a navigation component that satisfies the following partially required features:
// - Drop down navigation menu
// - An Adaptive "hamburger menu"
//   - - A menu that is visible at larger viewport size, but is replaced with a dropdown menu at smaller viewport sizes (this counts as a dropdown as well if done)
//   - If you have a hamburger menu that is available on ALL page sizes, that counts as a dropdown navigation menu but NOT as an Adaptive Hamburger Menu
//   - Having two navigation and only showing one at a time does NOT count as an Adaptive Hamburger Menu
function GlobalNav( { className, setPage }){
    
    const [showMenu, setShowMenu] = useState(false);

    const ListHtml = headerMenu.map( item => {
        return (
            <li key={item.name} className="global-nav__item" >
                <a 
                className="global-nav__link" 
                href={item.path}
                onClick = { (e) => {
                    e.preventDefault();
                    setPage(e.target.pathname);
                    setShowMenu(false);
                }}
                >
                    {item.name}
                </a>
            </li>
        );
    });

    const showClass = showMenu ? "global-nav__list--open" : "";

    return(
        <nav className={`global-nav ${className}`}>
            <div className="global-nav__toggle" tabIndex={0} role="button" aria-label="Toggle navigation"  
                onClick={() => setShowMenu(!showMenu)}  
                onKeyDown={(event) => {  
                    if (event.key === 'Enter' || event.key === ' ') {  
                        setShowMenu(!showMenu);
                    }
                }}
            >
                <img className="hamburger_menu" src="/pics/menu_icon.png" width={20} height={20} alt="hamburger menu"/>
             </div>

            <ul className={`global-nav__list ${showClass}`}>
                {ListHtml}
            </ul>      
        </nav>
    );
};

export default GlobalNav