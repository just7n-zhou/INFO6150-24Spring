import "../css/BMWs.css"

import { useRef } from "react"

import bmw from "./bmwsCar.js"
import Modal from "./Modal"
import Button from "./Button.jsx"

function BMWs() {

    const cardset = bmw.map( item => {

        const dialogRef = useRef()
        
        return (
            <div key={item.model} className="card">
                <h3 className="card__title">{item.model}</h3>
                <img className="card__image_P" src={item.imagePath} alt={item.model} />
                <p className="card__description">{item.description}</p>
                <Button 
                    className="subscribe-button" text="Subscribe" type="button" visual="link" 
                    handleClick={() => dialogRef.current.showModal()}
                />
                <Modal className="dialogModal" dialogRef={dialogRef}/>
            </div>
        )
    }) 

    return (
        <main className="main" id="main">
            <h2 className="main_title">BMW in the Spotlight</h2>
            <div className="cardset">
                {cardset}
            </div>
        </main>
    )
}

export default BMWs