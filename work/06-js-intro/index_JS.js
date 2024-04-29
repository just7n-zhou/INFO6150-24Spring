"use strict";
(function() {
    const btnEL = document.querySelector('button');
    const submenuEL = document.querySelector('.submenu');

    btnEL.addEventListener('click', function() {
        submenuEL.classList.toggle('active');
    });
    
})();