import "../css/Modal.css";
import Button from "./Button.jsx";

import { useState } from "react";

function Modal({ dialogRef }) {
    const [email, setEmail] = useState("");
    const [confirmEmail, setConfirmEmail] = useState("");
    const [emailError, setEmailError] = useState("");
    const [confirmEmailError, setConfirmEmailError] = useState("");
    const [submission, setSubmission] = useState(false);

    const resetForm = () => {
        setEmail("");
        setConfirmEmail("");
        setEmailError("");
        setConfirmEmailError("");
        setSubmission(false);
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
            setSubmission(true);
        }
    };

    return (
        <dialog ref={dialogRef} className="modal">
            <h2 className="modal_title">Subscribe to Bimmer Club</h2>
            <form className="register" onSubmit={handleSubmit}>
                <label className="register_label">
                    <span className="label register_email_label">Email:<span className="required_star">* required field</span></span>
                    <input 
                        name="email" 
                        type="email" 
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
                        type="email" 
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
                        handleClick={() => {
                            dialogRef.current.close();
                            resetForm();  
                        }}
                    />
                </div>
            </form>
        </dialog>
    );
}

export default Modal;
