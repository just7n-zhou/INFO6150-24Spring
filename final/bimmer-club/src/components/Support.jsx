import "../css/Support.css";
import Button from "./Button.jsx";

import { useState } from "react";


// This is support form that satisfy the following partially required features:
// - A "complex" form interaction (Ex: Specific Fields that appear/show or use a different input type based on criteria)
//   - A dropdown with "other" that shows an additional field to fill in what "other" is when selected
//   - A shipping address and billing address where a checkbox says "billing address same as shipping address" and 
//     when you check it the billing address is pre-filled and the fields are given the "readonly" attribute so that they can't be edited.
//   - Two select dropdowns where the selection in the first changes the options for the second
// - A Modal form that alters some data shown in the app
//   - See more in the Modal.jsx file
function Support() {

    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [confirmEmail, setConfirmEmail] = useState("");
    const [shipping, setShipping] = useState("");
    const [billing, setBilling] = useState("");
    const [emailError, setEmailError] = useState("");
    const [confirmEmailError, setConfirmEmailError] = useState("");
    const [userNameError, setUserNameError] = useState("");
    const [shippingError, setShippingError] = useState("");
    const [billingError, setBillingError] = useState("");
    const [tier, setTier] = useState('');
    const [billingSameAsShipping, setBillingSameAsShipping] = useState(false); 
    const [submission, setSubmission] = useState(false);
    const [model, setModel] = useState('');


    const emailRegex = /^[^@]+@[^@]+\.[^@]+$/;
    const seriesModels = {
        "7": ["750i", "M760i", "i7"],
        "5": ["540i", "M5", "i5"],
        "3": ["330i", "M340i", "M3"],
        "x": ["X3", "X5", "X7"],
        "other": [] // 'Other' can be an empty array or handle specifically
    };

    const handleUserNameChange = (e) => {
        const input = e.target.value;
        setUserName(input);
        setUserNameError(input ? "" : "Username is required.");
    };

    const handleEmailChange = (e) => {
        const input = e.target.value;
        setEmail(input);
        if (!input) {
            setEmailError("Email is required.");
        } else if (!emailRegex.test(input)) {
            setEmailError("Please enter a valid email address.");
        } else {
            setEmailError("");
        }
    
        if (confirmEmail && input !== confirmEmail) {
            setConfirmEmailError("Emails do not match.");
        } else {
            setConfirmEmailError("");
        }
    };
    

    const handleConfirmEmailChange = (e) => {
        const input = e.target.value;
        setConfirmEmail(input);
        setConfirmEmailError(input === email ? "" : "Emails do not match.");
    };
    
    const handleShippingChange = (e) => {
        const input = e.target.value;
        setShipping(input);
        setShippingError(input ? "" : "Shipping Address is required.");
    };
    
    const handleBillingChange = (e) => {
        const input = e.target.value;
        setBilling(input);
        setBillingError(input ? "" : "Billing Address is required.");
    };
    
    const handleCheckboxChange = (e) => {
        setBillingSameAsShipping(e.target.checked);
        setBilling(e.target.checked ? shipping : '');
        setBillingError(e.target.checked ? "" : "Billing Address is required.");    
    };

    const resetForm = () => {
        setUserName("");
        setUserNameError("");
        setEmail("");
        setShipping("");
        setBilling("");
        setConfirmEmail("");
        setEmailError("");
        setConfirmEmailError("");
        setSubmission(false);
        setShippingError("");
        setBillingError("");
        setTier("");
        setBillingSameAsShipping(false);
    };


    const handleSubmit = (e) => {
        e.preventDefault(); 
        

        let isValid = true;
        if (!userName) {
            setUserNameError("Username is required.");
            isValid = false;
        }
        if (!email) {
            setEmailError("Email is required.");
            isValid = false;
        } else if (!emailRegex.test(email)) {
            setEmailError("Please enter a valid email address.");
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
        if(!shipping) {
            setShippingError("Shipping Address is required.");
            isValid = false;
        }
        if(!billing) {
            setBillingError("Billing Address is required.");
            isValid = false;
        }

        if (isValid) {
            setSubmission(true);
            setTimeout(() => {
                resetForm();
            }, 3000);
        }
    }

    return (
        <main className="main_support" id="main">
            <h1 className="main_title_support">Bimmer Registration</h1>
            <h2 className="main_description_support">We will send you a <span className="distinct_text_support">FREE</span> BMW car model!</h2>
            <form className="register_support" onSubmit={handleSubmit}>
                <label className="register_label_support">
                    <span className="register_input_label_support">Username:<span className="required_star_support">*</span></span>
                    <input 
                        name="userName" 
                        type="text" 
                        className="register_input_support register_username_support"
                        value={userName}
                        onChange={handleUserNameChange}
                    />
                </label>
                {userNameError && <span className="register_error_support">{userNameError}</span>}


                <label className="register_label_support">
                    <span className="register_input_label_support">Email:<span className="required_star_support">*</span></span>
                    <input 
                        name="email" 
                        type="text" 
                        className="register_input_support register_email_support"
                        value={email}
                        onChange={handleEmailChange}
                    />
                </label>
                {emailError && <span className="register_error_support">{emailError}</span>}

                <label className="register_label_support">
                    <span className="register_input_label_support">Confirm Email:</span>
                    <input 
                        name="confirm" 
                        type="text" 
                        className="register_input_support register_confirm_support"
                        value={confirmEmail}
                        onChange={handleConfirmEmailChange}
                    />
                </label>
                {confirmEmailError && <span className="register_error_support">{confirmEmailError}</span>}

                <label className="register_label_support">
                    <span className="register_input_label_support">Shipping Address:<span className="required_star_support">*</span></span>
                    <input 
                        name="shipping" 
                        type="text" 
                        className="register_input_support register_email_support"
                        value={shipping}
                        onChange={handleShippingChange}    
                    />
                </label>
                {shippingError && <span className="register_error_support">{shippingError}</span>}
                
                <label className="register_label_support">
                    <span className="register_input_label_support">Billing Address:</span>
                    <input 
                        name="billing" 
                        type="text" 
                        className="register_input_support register_confirm_support"
                        value={billing}
                        onChange={handleBillingChange}
                        disabled={billingSameAsShipping}  // Disable if checkbox is checked
                        />
                </label>
                {billingError && <span className="register_error_support">{billingError}</span>}

                <label className="register_label_support">
                    <span className="register_input_label_support">Billing Address same as Shipping Address?</span>
                    <input 
                        name="check" 
                        type="checkbox" 
                        className="register_input_support register_check_support"
                        checked={billingSameAsShipping}
                        onChange={handleCheckboxChange}     
                    />
                </label>

                <label className="register_label_support choose_series">
                    <h3 className="register_tier_title_support">Choose your BMW model</h3>
                    
                    <span className="register_tier_label_support">Series:</span>
                    <select 
                        name="tier" 
                        className="register_input_support tier_options_support"
                        value={tier}  
                        onChange={(e) => {
                            setTier(e.target.value);
                            setModel('');
                        }}
                    >
                        <option value="" disabled>Please select</option> 
                        <option value="7">7 series</option>
                        <option value="5">5 series</option>
                        <option value="3">3 series</option>
                        <option value="x">X series</option>
                        <option value="other">Other</option>
                    </select>
                </label>


                {tier && tier !== "other" && (
                    <label className="register_label_support choose_model">
                        <span className="register_tier_label_support">Model:</span>
                        <select
                            name="model"
                            className="register_input_support tier_options_support"
                            value={model}
                            onChange={(e) => setModel(e.target.value)}
                        >
                            <option value="" disabled>Select model</option>
                            {seriesModels[tier].map((model) => (
                                <option key={model} value={model}>{model}</option>
                            ))}
                        </select>
                    </label>
                )}

                {tier==="other" && <input type="text" className="register_otherinput_support" placeholder="Please specify" />}

                <a className="required_text_support"><span className="required_star_support">*</span>This is a required field</a>
                <Button 
                    className="register_submit_support" text="Support" type="submit" visual="link"
                />
                {submission && <p className="thx_message_support">Thank you for supporting Bimmer Club!</p>}
            </form>
        </main>
    );
}

export default Support;
