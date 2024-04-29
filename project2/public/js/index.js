"use strict";
(function(){
    const menuButtonEl = document.querySelector('.menu_button'); 
    
    function toggleSubmenu() {
        const submenuEl = document.querySelector('.submenu'); 
        submenuEl.classList.toggle('submenu_open');
    }

    menuButtonEl.addEventListener('click', toggleSubmenu);

    menuButtonEl.addEventListener('keydown', (e) => {
        if(e.key === 'Enter' || e.key === ' ') {
            e.preventDefault(); 
            toggleSubmenu();
        }
    });
})();
