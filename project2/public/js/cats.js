"use strict";
(function(){
    // Toggle the submenu when the menu button is clicked 
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

    // Open and close the modal when the subscribe button is clicked
    const modalEl = document.querySelector('.modal');
    const openEls = document.querySelectorAll('.subscribe-button'); // Select all subscribe buttons
    const closeEl = document.querySelector('.modal_close');
    
    openEls.forEach(button => {
        button.addEventListener('click', () => {
            modalEl.showModal();
        });
    });
    
    closeEl.addEventListener('click', () => {
        modalEl.close();

        emailEl.value = '';
        confirmEl.value = '';
    
        emailErrorEl.innerHTML = '';
        confirmErrorEl.innerHTML = '';
    
        state.hasEmailError = false;
        state.emailFormatError = false;
        state.hasConfirmError = false;
    });
    

    // Validate the form
    const emailEl = document.querySelector('.register_email');
    const emailErrorEl = document.querySelector('.register_error_email');
    const confirmEl = document.querySelector('.register_confirm');
    const confirmErrorEl = document.querySelector('.register_error_confirm');
    const registerEl = document.querySelector(".register");

    const state = {
        hasEmailError: false,
        emailFormatError: false,
        hasConfirmError: false,
    };

    function checkHasEmailError() {
        state.hasEmailError = !emailEl.value;
    }
    function checkEmailFormatError() {
        state.emailFormatError = !emailEl.value.includes('@');
    }
    function checkConfirmError() {
        state.hasConfirmError = emailEl.value !== confirmEl.value || !confirmEl.value;
    }

    function isEmailValid() {
        return !state.hasEmailError && !state.emailFormatError;
    }
    function isConfirmValid() {
        return !state.hasConfirmError;
    }

    emailEl.addEventListener('blur', (e) => {
        checkHasEmailError();
        checkEmailFormatError();
        renderEmailError();
    });

    confirmEl.addEventListener('blur', (e) => {
        checkConfirmError();
        renderConfirmError();
    });

    registerEl.addEventListener("submit", (e) => {
        checkHasEmailError();
        checkEmailFormatError();
        checkConfirmError();
        if(!isEmailValid()) {
            e.preventDefault();
            renderEmailError();
        }
        else if(!isConfirmValid()) {
            e.preventDefault();
            renderConfirmError();
        }
    });

    function renderEmailError() {
        if(state.hasEmailError) {
            emailErrorEl.innerHTML = 'Email field is required';
        }
        else if(state.emailFormatError) {
            emailErrorEl.innerHTML = 'Email must contain an "@"';
        }
        else {
            emailErrorEl.innerHTML = '';
        }
    }

    function renderConfirmError() {
        if(state.hasConfirmError) {
            confirmErrorEl.innerHTML = 'Email and confirmation must match';
        }
        else {
            confirmErrorEl.innerHTML = '';
        }
    }

})();