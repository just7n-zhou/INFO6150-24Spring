import "../css/Home.css"

import cars from './homeCar'

function Home() {

    const cardset = cars.map( item => {
        return (
            <div key={item.model} className="card_home">
                <img className="card__image_P_home" src={item.imagePath} alt={item.model} />
                <div className="card__content_home">
                    <h3 className="card__title_home">{item.model}</h3>
                    <p className="card__description_home">{item.description}</p>
                </div>
            </div>
        )
    }) 

    return (
        <main className="main" id="main">
            <h2 className="main_title_home">Welcome to Bimmer Club</h2>
            <div className="cardset_home">
                {cardset}
            </div>
        </main>
    )
}

export default Home