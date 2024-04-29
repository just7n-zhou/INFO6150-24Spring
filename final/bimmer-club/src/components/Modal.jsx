// This modal component is used to subscribe and unsubscribe to the newsletter.
// When subscribed the user can unsubscribe and vice versa.
// Only one subscription can be made for each card


import "../css/Modal.css";
import Button from "./Button.jsx";

import { useState } from "react";

// This is a modal dialog that satisfies the following partially required features:
// - A Modal form that alters some data shown in the app
//   - It must be a modal dialog using the dialog element as shown in class
//   - The modal dialog content must include a form
//   - The form collects/changes data that is saved into state in the application
//   - This state data must be visible somewhere in the app OUTSIDE of the form
function Modal({ dialogRef, subscribe, setSubscribe}) {
    const [email, setEmail] = useState("");
    const [confirmEmail, setConfirmEmail] = useState("");
    const [emailError, setEmailError] = useState("");
    const [confirmEmailError, setConfirmEmailError] = useState("");
    const [subscriberEmail, setSubscriberEmail] = useState("");
    const [submission, setSubmission] = useState(false);

    const resetForm = () => {
        setEmail("");
        setConfirmEmail("");
        setEmailError("");
        setConfirmEmailError("");
        setSubmission(false)
    };

    const handleSubmit = (e) => {
        e.preventDefault(); 

        setEmailError("");
        setConfirmEmailError("");

        let isValid = true;
        if (!email) {
            setEmailError("Email is required.");
            isValid = false;
        }
        if (!confirmEmail) {
            setConfirmEmailError("Confirming email is required.");
            isValid = false;
        }
        if (email && confirmEmail && email !== confirmEmail) {
            setConfirmEmailError("Emails do not match.");
            isValid = false;
        }

        if (isValid) {
            setSubscriberEmail(email);
            setSubmission(true);
            setTimeout(() => {
                dialogRef.current.close();
                setSubscribe("Subscribed");
                resetForm();
            }, 1500);
        }
    };

    const subscribePage = () => (
        <dialog ref={dialogRef} className="modal">
            <h2 className="modal_title">Subscribe to Bimmer Club</h2>
            <p className="modal_description">Subscribe to receive the latest news and updates.</p>
            <form className="register" onSubmit={handleSubmit}>
                <label className="register_label">
                    <span className="label register_email_label">Email:<span className="required_star">* required field</span></span>
                    <input 
                        name="email" 
                        type="text" 
                        className="register_input register_email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                </label>
                {emailError && <span className="register_error register_error_email">{emailError}</span>}

                <label className="register_label">
                    <span className="label register_confirm_label">Confirm Email:<span className="required_star">* required field</span></span>
                    <input 
                        name="confirm" 
                        type="text" 
                        className="register_input register_confirm"
                        value={confirmEmail}
                        onChange={e => setConfirmEmail(e.target.value)}
                    />
                </label>
                {confirmEmailError && <span className="register_error register_error_confirm">{confirmEmailError}</span>}
                {submission && <p className="thx_message">Thank you for subscribing!</p>}
                <div className="modal_buttons">
                    <Button 
                        className="modal_subscribe" text="Subscribe" type="submit" visual="link" 
                    />
                    <Button 
                        className="modal_close" text="Close" type="button" visual="button" 
                        onClick={() => {
                            resetForm();  

                            dialogRef.current.close();
                        }}
                    />
                </div>
            </form>
        </dialog>
    )

    const unsubscribePage = () => (
        <dialog ref={dialogRef} className="modal">
            <div className="register">
                <h2 className="modal_title">You're Subscribed!</h2>
                <p className="modal_description">The following email is subscribed to Bimmer Club.</p>
                <p className="modal_description">{subscriberEmail}</p>
                <div className="modal_buttons">
                    <Button 
                        className="modal_unsubscribe" text="Unsubscribe" type="submit" visual="link" 
                        onClick={() => {
                            setSubscribe("Subscribe");
                            setSubscriberEmail("");
                            resetForm();  
                            dialogRef.current.close();
                        }}
                    />
                    <Button 
                        className="modal_unsubscribe_close" text="Close" type="button" visual="button" 
                        onClick={() => {
                            dialogRef.current.close();
                        }}
                    />
                </div>
            </div>
        </dialog>
    );

    
    return (
        subscribe === "Subscribe" ? subscribePage() : unsubscribePage()
    )
}

export default Modal;
