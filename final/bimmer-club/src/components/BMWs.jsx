import "../css/BMWs.css"

import { useRef, useState } from "react"

import bmw from "./bmwsCar.js"
import Modal from "./Modal"
import Button from "./Button.jsx"


// This is a card components page that satisfies the following partially required features:
// - Cards or Panels that include an image and text grouped together visually
// - A Modal form that alters some data shown in the app.
//   - It must be a modal dialog using the dialog element as shown in class
//   - The modal dialog content must include a form
//   - The form collects/changes data that is saved into state in the application
//   - This state data must be visible somewhere in the app OUTSIDE of the form
function BMWs() {
    const cardset = bmw.map( item => {

        const dialogRef = useRef()
        const [subscribe, setSubscribe] = useState("Subscribe")
        
        return (
            <div key={item.model} className="card">
                <h3 className="card__title">{item.model}</h3>
                <img className="card__image_P" src={item.imagePath} alt={item.model} />
                <p className="card__description">{item.description}</p>
                <Button 
                    className={`subscribe-button ${subscribe}`}
                    text={subscribe}
                    type="button" 
                    visual="link" 
                    onClick={() => dialogRef.current.showModal()}
                />
                <Modal className="dialogModal" dialogRef={dialogRef} subscribe={subscribe} setSubscribe={setSubscribe}/>
            </div> 
        )
    }) 

    return (
        <main className="main" id="main">
            <h2 className="main_title">BMW Newsletter Subscriber</h2>
            <div className="cardset">
                {cardset}
            </div>
        </main>
    )
}

export default BMWs