"use strict";
(function() {
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

    const userNameEL = document.querySelector(".register_username");
    const userNameErrorEl = document.querySelector(".register_error_username");
    const emailEl = document.querySelector(".register_email");
    const emailErrorEl = document.querySelector(".register_error_email");
    const confirmEl = document.querySelector(".register_confirm");
    const confirmErrorEl = document.querySelector(".register_error_confirm");
    const registerEl = document.querySelector(".register");

    const state = {
        hasUserNameError: false,
        hasEmailError: false,
        hasConfirmError: false,
    };

    function checkUserNameError() {
        state.hasUserNameError = !userNameEL.value;
    }
    function checkEmailError() {
        state.hasEmailError = !emailEl.value;
    }
    function checkConfirmError() {
        state.hasConfirmError = emailEl.value !== confirmEl.value || !confirmEl.value;
    }
    function isFormValid() {
        return !state.hasUserNameError && !state.hasEmailError && !state.hasConfirmError;
    }
    
    userNameEL.addEventListener("input", (e) => {
        checkUserNameError();
        renderUserNameError();
    });
    emailEl.addEventListener("input", (e) => {
        checkEmailError();
        renderEmailError();
    });
    confirmEl.addEventListener("blur", (e) => {
        checkConfirmError();
        renderConfirmError();
    });
    registerEl.addEventListener("submit", (e) => {
        checkUserNameError();
        checkEmailError();
        checkConfirmError();
        if(!isFormValid()) {
            e.preventDefault();
            renderUserNameError();
            renderEmailError();
            renderConfirmError();
        }
    });

    function renderUserNameError() {
        if(state.hasUserNameError) {
            userNameErrorEl.innerHTML = "Username is required";
        }
        else {
            userNameErrorEl.innerHTML = "";
        }
    }
    function renderEmailError() {
        if(state.hasEmailError) {
            emailErrorEl.innerHTML = "Email is required";
        }
        else {
            emailErrorEl.innerHTML = "";
        }
    }
    function renderConfirmError() {
        if(state.hasConfirmError) {
            confirmErrorEl.innerHTML = "Confirm email does not match";
        }
        else {
            confirmErrorEl.innerHTML = "";
        }
    }
})();